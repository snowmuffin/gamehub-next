"use client";
import React from "react";
import "./globals.scss";
import { Provider } from "react-redux";
import store from "@/shared/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/shared/redux/store";

const isTokenExpired = (token: string): boolean => {
    try {
        const base64Url = token.split(".")[1];
        if (!base64Url) return true; // Invalid token format
        const payload = JSON.parse(atob(base64Url));
        if (!payload.exp) return true; // Missing expiration field

        const expirationTime = payload.exp * 1000;
        const currentTime = Date.now();
        const bufferTime = 60 * 1000; // 1-minute buffer

        console.log("Token expiration time:", new Date(expirationTime));
        console.log("Current time:", new Date(currentTime));

        return expirationTime <= currentTime + bufferTime; // Check with buffer
    } catch (error) {
        console.error("Error parsing token:", error);
        return true; // Treat as expired if any error occurs
    }
};

const AuthHandler = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const token = useSelector((state: RootState) => state.auth.token);

    useEffect(() => {
        if (token && !isTokenExpired(token)) {
            router.push("/dashboard/gaming");
        } else {
            router.push("/authentication/sign-in/signin-basic");
        }
    }, [token, router]);

    return <>{children}</>;
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <AuthHandler>{children}</AuthHandler>
        </Provider>
    );
};

export default RootLayout;
