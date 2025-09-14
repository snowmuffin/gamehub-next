"use client";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import { loginSuccess, loginStart, loginFailure, logout, initializeAuth } from "@/shared/redux/authSlice";
import type { RootState, AppDispatch } from "@/shared/redux/store";

const AuthDropdown = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { loading, error, token, user: reduxUser } = useSelector((state: RootState) => state.auth);
  const [clientError, setClientError] = useState<string | null>(null);
  const [isLoginInProgress, setIsLoginInProgress] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setClientError(error);
  }, [error]);

  // Load user data from localStorage and initialize auth state
  useEffect(() => {
    try {
      const storedToken = localStorage.getItem("authToken");
      const storedUser = localStorage.getItem("user");
      
      console.log("🔄 Initializing auth from localStorage:", { 
        hasToken: !!storedToken, 
        hasUser: !!storedUser 
      });
      
      if (storedToken && storedUser) {
        const userData = JSON.parse(storedUser);
        dispatch(initializeAuth({ 
          token: storedToken, 
          user: userData 
        }));
        setUser(userData);
        console.log("✅ Auth initialized successfully");
      }
    } catch (e) {
      // Clear invalid data and ignore error
      console.error("❌ Failed to initialize auth, clearing localStorage:", e);
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
    }
  }, [dispatch]);

  // Update user data when token changes
  useEffect(() => {
    if (!token) {
      setUser(null);
    } else if (reduxUser) {
      setUser(reduxUser);
    }
  }, [token, reduxUser]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Allowed origins based on environment variables (avoid hardcoded hosts/IPs)
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
      const frontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL || "";
      const frontendDomain = process.env.NEXT_PUBLIC_FRONTEND_DOMAIN || "";

      const baseOrigins = [window.location.origin, apiUrl, frontendUrl];

      const additionalOrigins = process.env.NEXT_PUBLIC_ALLOWED_ORIGINS
        ? process.env.NEXT_PUBLIC_ALLOWED_ORIGINS.split(",")
            .map((origin) => origin.trim())
            .filter(Boolean)
        : [];

      if (frontendDomain) {
        baseOrigins.push(`https://${frontendDomain}`);
        baseOrigins.push(`http://${frontendDomain}`);
      }

      const allowedOrigins = Array.from(
        new Set([...baseOrigins.filter(Boolean), ...additionalOrigins])
      );

      const currentHost = window.location.hostname;
      let eventUrl: URL;
      try {
        eventUrl = new URL(event.origin);
      } catch (e) {
        return;
      }

      const allowedHostnames = [
        currentHost,
        process.env.NEXT_PUBLIC_FRONTEND_DOMAIN,
        process.env.NEXT_PUBLIC_API_DOMAIN
      ].filter(Boolean);

      const isAllowedDomain = allowedHostnames.includes(eventUrl.hostname);

      if (!allowedOrigins.includes(event.origin) && !isAllowedDomain) {
        return;
      }

      const { status, token, user, error } = event.data;
      
      console.log("🔐 Login message received:", { status, token: !!token, user: !!user, error });

      if (status === 200 && token) {
        setIsLoginInProgress(false);
        
        console.log("✅ Login success, dispatching to Redux");
        // Dispatch to Redux with both token and user
        dispatch(loginSuccess({ token, user: user || null }));

        try {
          localStorage.setItem("authToken", token);
          if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            setUser(user);
          }
          console.log("💾 Token and user saved to localStorage");
        } catch (e) {
          // Ignore if writing to localStorage fails
          console.error("❌ Failed to save to localStorage:", e);
        }
      } else if (status === 401) {
        setIsLoginInProgress(false);
        dispatch(loginFailure(error || "Steam authentication failed."));
        setClientError(error || "Steam authentication failed.");
      } else {
        setIsLoginInProgress(false);
        const errorMsg = "Unexpected response from Steam authentication.";
        dispatch(loginFailure(errorMsg));
        setClientError(errorMsg);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [dispatch]);

  const handleSteamLogin = () => {
    setIsLoginInProgress(true);
    setClientError(null);
    dispatch(loginStart());

    const currentOrigin = window.location.origin;
    const baseUrl =
      process.env.NEXT_PUBLIC_STEAM_AUTH_URL || `${window.location.origin}/auth/steam`;

    const steamAuthUrl = `${baseUrl}?origin=${encodeURIComponent(currentOrigin)}`;

    const popup = window.open(
      steamAuthUrl,
      "Steam Login",
      "width=600,height=700,scrollbars=yes,resizable=yes"
    );

    if (!popup) {
      setIsLoginInProgress(false);
      const errorMsg = "Popup was blocked. Please allow popups for this site.";
      dispatch(loginFailure(errorMsg));
      setClientError(errorMsg);
      return;
    }

    const interval = setInterval(() => {
      if (popup && popup.closed) {
        clearInterval(interval);

        setTimeout(() => {
          if (isLoginInProgress && !token) {
            const errorMsg = "Login was cancelled or failed. Please try again.";
            dispatch(loginFailure(errorMsg));
            setClientError(errorMsg);
            setIsLoginInProgress(false);
          }
        }, 1000);
      }
    }, 500);

    setTimeout(() => {
      if (popup && !popup.closed) {
        popup.close();
        clearInterval(interval);
        const timeoutMsg = "Login timeout. Please try again.";
        dispatch(loginFailure(timeoutMsg));
        setIsLoginInProgress(false);
        setClientError(timeoutMsg);
      }
    }, 30000);
  };

  const handleLogout = () => {
    dispatch(logout());
    setUser(null);
    router.push("/dashboard/gaming");
  };

  if (!token) {
    return (
      <li className="header-element">
        <div className="position-relative">
          <Button
            variant="primary"
            size="sm"
            onClick={handleSteamLogin}
            className="d-flex align-items-center"
          >
            <i className="bi bi-steam me-2"></i>
            Login with Steam
          </Button>
          {clientError && (
            <div className="position-absolute top-100 start-0 mt-1 p-2 bg-danger text-white rounded small z-3" style={{ minWidth: "200px" }}>
              {clientError}
            </div>
          )}
        </div>
      </li>
    );
  }

  return (
    <li className="header-element">
      <Dropdown>
        <Dropdown.Toggle
          variant=""
          className="header-link dropdown-toggle-no-caret d-flex align-items-center"
          id="profileDropdown"
        >
          <div className="d-flex align-items-center">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt="Profile"
                className="rounded-circle me-2"
                width="24"
                height="24"
              />
            ) : (
              <i className="bi bi-person-circle me-2 fs-5"></i>
            )}
            <span className="d-none d-sm-inline">{user?.displayName || "User"}</span>
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu-end">
          <Dropdown.Item as="div" className="px-3 py-2">
            <div className="d-flex align-items-center">
              {user?.avatar ? (
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="rounded-circle me-2"
                  width="32"
                  height="32"
                />
              ) : (
                <i className="bi bi-person-circle me-2 fs-4"></i>
              )}
              <div>
                <div className="fw-bold">{user?.displayName || "User"}</div>
                <small className="text-muted">{user?.steamId || ""}</small>
              </div>
            </div>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <i className="bi bi-person me-2"></i>
            My Profile
          </Dropdown.Item>
          <Dropdown.Item>
            <i className="bi bi-gear me-2"></i>
            Settings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>
            <i className="bi bi-box-arrow-right me-2"></i>
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </li>
  );
};

export default AuthDropdown;
