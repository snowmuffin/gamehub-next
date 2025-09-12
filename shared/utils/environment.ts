/**
 * URL configuration utilities based on environment variables
 */

// Get frontend URL
export const getFrontendUrl = (): string => {
  return process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";
};

// Get API URL
export const getApiUrl = (): string => {
  return process.env.NEXT_PUBLIC_API_URL || "";
};

// Get Steam authentication URL
export const getSteamAuthUrl = (): string => {
  return process.env.NEXT_PUBLIC_STEAM_AUTH_URL || `${getApiUrl()}/auth/steam`;
};

// Get domain info
export const getFrontendDomain = (): string => {
  return process.env.NEXT_PUBLIC_FRONTEND_DOMAIN || "localhost:3000";
};

export const getApiDomain = (): string => {
  return process.env.NEXT_PUBLIC_API_DOMAIN || "";
};

// Environment helpers
export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === "development";
};

export const isProduction = (): boolean => {
  return process.env.NODE_ENV === "production";
};

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
    console.log("🌍 Environment Configuration:", {
      NODE_ENV: process.env.NODE_ENV,
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
