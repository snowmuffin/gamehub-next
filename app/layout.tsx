"use client";
import React, { useEffect } from "react";
import "./globals.scss";
import { Provider, useSelector, useDispatch } from "react-redux";

import type { RootState } from "@/shared/redux/store";
import store from "@/shared/redux/store";
import { logout } from "@/shared/redux/authSlice";

import { useRouter } from "next/navigation";

import { logEnvironmentInfo } from "@/shared/utils/environment";

const isTokenExpired = (token: string): boolean => {
  try {
    const base64Url = token.split(".")[1];
    if (!base64Url) return true; // Invalid token format
    const payload = JSON.parse(atob(base64Url));
    if (!payload.exp) return true; // Missing expiration field

    const expirationTime = payload.exp * 1000;
    const currentTime = Date.now();
    const bufferTime = 60 * 1000; // 1-minute buffer

    return expirationTime <= currentTime + bufferTime; // Check with buffer
  } catch (error) {
    return true; // Treat as expired if any error occurs
  }
};

const AuthHandler = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

  // Log environment info on client side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      logEnvironmentInfo();
    }
  }, []);

  // Check for token expiration periodically
  useEffect(() => {
    if (!token) return;

    // Check immediately
    if (isTokenExpired(token)) {
      console.warn("🚨 Token expired, logging out...");
      handleTokenExpiration();
      return;
    }

    // Set up periodic check every 30 seconds
    const interval = setInterval(() => {
      const currentToken = (store.getState() as RootState).auth.token;
      if (currentToken && isTokenExpired(currentToken)) {
        console.warn("🚨 Token expired during periodic check, logging out...");
        handleTokenExpiration();
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [token, dispatch]);

  const handleTokenExpiration = () => {
    // Dispatch logout action
    dispatch(logout());
    
    // Clear localStorage
    try {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      console.log("🧹 Cleared localStorage after token expiration");
    } catch (e) {
      console.error("❌ Failed to clear localStorage:", e);
    }

    // Redirect to dashboard (public page)
    router.push("/dashboard/gaming");
  };

  return <>{children}</>;
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <Provider store={store}>
          <AuthHandler>{children}</AuthHandler>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
