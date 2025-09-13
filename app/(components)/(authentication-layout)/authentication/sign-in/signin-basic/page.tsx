"use client";
import { useRouter } from "next/navigation";
import React, { Fragment, useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import Seo from "@/shared/layout-components/seo";
import { loginSuccess, loginStart, loginFailure } from "@/shared/redux/authSlice";
import type { RootState, AppDispatch } from "@/shared/redux/store";

const SigninBasic = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { loading, error, token } = useSelector((state: RootState) => state.auth);
  const [clientError, setClientError] = React.useState<string | null>(null);
  const [isLoginInProgress, setIsLoginInProgress] = React.useState(false);

  useEffect(() => {
    setClientError(error);
  }, [error]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Allowed origins based on environment variables (avoid hardcoded hosts/IPs)
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || ""; // e.g., https://api.example.com
      const frontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL || ""; // e.g., https://app.example.com
      const frontendDomain = process.env.NEXT_PUBLIC_FRONTEND_DOMAIN || ""; // e.g., app.example.com

      const baseOrigins = [window.location.origin, apiUrl, frontendUrl];

      const additionalOrigins = process.env.NEXT_PUBLIC_ALLOWED_ORIGINS
        ? process.env.NEXT_PUBLIC_ALLOWED_ORIGINS.split(",")
            .map((origin) => origin.trim())
            .filter(Boolean)
        : [];

      if (frontendDomain) {
        // add both http and https forms if only domain provided
        baseOrigins.push(`https://${frontendDomain}`);
        baseOrigins.push(`http://${frontendDomain}`);
      }

      const allowedOrigins = Array.from(
        new Set([...baseOrigins.filter(Boolean), ...additionalOrigins])
      );

      // Additionally, allow protocol differences when the hostname matches
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

      if (status === 200 && token) {
        setIsLoginInProgress(false);

        // Update Redux state (use the correct action)
        dispatch(loginSuccess(token));

        // Also persist token in localStorage
        try {
          localStorage.setItem("authToken", token);
          if (user) {
            localStorage.setItem("user", JSON.stringify(user));
          }
        } catch (e) {
          // Ignore if writing to localStorage fails
        }

        // Redirect after a short delay (wait for Redux state to settle)
        setTimeout(() => {
          router.push("/dashboard/gaming");
        }, 100);
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
  }, [dispatch, router]);

  const handleSteamLogin = () => {
    setIsLoginInProgress(true);
    setClientError(null); // Clear previous error
    dispatch(loginStart()); // Update Redux state

    // Pass current origin to the backend so it can target postMessage correctly
    const currentOrigin = window.location.origin;
    const baseUrl =
      process.env.NEXT_PUBLIC_STEAM_AUTH_URL || `${window.location.origin}/auth/steam`;

    // Append the current origin as a query parameter
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

        // If the popup closes and no success message arrives within a short time, treat as error
        setTimeout(() => {
          // Consider it failed if login was in progress but did not complete
          if (isLoginInProgress && !token) {
            const errorMsg = "Login was cancelled or failed. Please try again.";
            dispatch(loginFailure(errorMsg));
            setClientError(errorMsg);
            setIsLoginInProgress(false);
          }
        }, 1000);
      }
    }, 500);

    // If the popup is still open after 30 seconds, time out
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

  return (
    <Fragment>
      <Seo title="Signin-Basic" />
      <div dir="ltr" className="container">
        <Row className="justify-content-center align-items-center authentication authentication-basic h-100">
          <Col xxl={5} xl={5} lg={5} md={6} sm={8} className="col-12">
            <Card className="custom-card my-4">
              <Card.Body className="p-5">
                <h3 className="text-center mb-4">Sign in with Steam</h3>
                {clientError && <p className="text-danger text-center">{clientError}</p>}
                <Button
                  variant="primary"
                  className="w-100"
                  onClick={handleSteamLogin}
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login with Steam"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default SigninBasic;
