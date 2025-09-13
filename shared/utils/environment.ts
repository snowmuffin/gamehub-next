/**
 * URL configuration utilities based on environment variables
 */

import type { Env } from "./env.schema";
import { getEnv } from "./env.schema";

const env = (): Env => getEnv();

// Get frontend URL
export const getFrontendUrl = (): string =>
  env().NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

// Get API URL
export const getApiUrl = (): string => env().NEXT_PUBLIC_API_URL || "";

// Get Steam authentication URL
export const getSteamAuthUrl = (): string =>
  env().NEXT_PUBLIC_STEAM_AUTH_URL || `${getApiUrl()}/auth/steam`;

// Get domain info
export const getFrontendDomain = (): string =>
  env().NEXT_PUBLIC_FRONTEND_DOMAIN || "localhost:3000";

export const getApiDomain = (): string => env().NEXT_PUBLIC_API_DOMAIN || "";

// Environment helpers
export const isDevelopment = (): boolean => env().NODE_ENV === "development";
export const isProduction = (): boolean => env().NODE_ENV === "production";

// URL builder helpers
export const createUrl = (path: string, baseUrl?: string): string => {
  const base = baseUrl || getFrontendUrl();
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
};

export const createApiUrl = (path: string): string => {
  const base = getApiUrl();
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
};

// Log environment info (development mode only)
export const logEnvironmentInfo = (): void => {
  if (isDevelopment() && typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.log("🌍 Environment Configuration:", {
      NODE_ENV: env().NODE_ENV,
      FRONTEND_URL: getFrontendUrl(),
      FRONTEND_DOMAIN: getFrontendDomain(),
      API_URL: getApiUrl(),
      API_DOMAIN: getApiDomain(),
      STEAM_AUTH_URL: getSteamAuthUrl(),
      IS_DEVELOPMENT: isDevelopment(),
      IS_PRODUCTION: isProduction()
    });
  }
};
