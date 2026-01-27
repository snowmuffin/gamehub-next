import axios, {
  type AxiosInstance as AxiosInstanceType,
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from "axios";
import store from "../redux/store"; // Import Redux store
import { logout } from "../redux/authSlice"; // Import logout action
import { getApiUrl } from "../utils/environment";

// Determine API base URL via environment variables
const getApiBaseUrl = (): string => {
  // On the client, always use the proxied relative path via rewrites (bypasses CORS)
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.warn("Client-side API baseURL: /api (using rewrite, bypassing CORS)");
    return "/api";
  }

  // On the server, use environment variable
  const envApiUrl = getApiUrl();
  if (envApiUrl) {
    // eslint-disable-next-line no-console
    console.warn("Server-side API baseURL:", envApiUrl);
    return envApiUrl;
  }

  // Server-side fallback
  const fallbackApiUrl = process.env.NEXT_PUBLIC_API_URL || "";
  // eslint-disable-next-line no-console
  console.warn("Server-side API baseURL fallback:", fallbackApiUrl);
  return fallbackApiUrl;
};

const AxiosInstance: AxiosInstanceType = axios.create({
  baseURL: getApiBaseUrl(),
  timeout: 5000,
  withCredentials: true // Enable credentials to send cookies
});

// Separate instance for requests requiring authentication
const AuthAxiosInstance: AxiosInstanceType = axios.create({
  baseURL: getApiBaseUrl(),
  timeout: 5000,
  withCredentials: true // Use credentials for all requests (including cookies)
});

// Shared request interceptor
const setupRequestInterceptor = (instance: AxiosInstanceType, instanceName: string) => {
  instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    // Access store in a try/catch to avoid SSR import timing issues
    let token: string | undefined;
    try {
      const state = store.getState() as any;
      token = state?.auth?.token as string | undefined;
    } catch (_e) {
      token = undefined;
    }

    // eslint-disable-next-line no-console
    if (process.env.NODE_ENV !== "production") {
      const fullUrl = `${config.baseURL}${config.url}${config.params ? `?${new URLSearchParams(config.params).toString()}` : ''}`;
      console.info(`[${instanceName}]`, config.method?.toUpperCase(), fullUrl, 'params:', config.params);
    }

    if (token) {
      config.headers = config.headers ?? ({} as any);
      (config.headers as any).Authorization = `Bearer ${token}`;
    }

    return config;
  });
};

// Shared response interceptor
const setupResponseInterceptor = (instance: AxiosInstanceType, instanceName: string) => {
  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: any) => {
      // eslint-disable-next-line no-console
      console.error(`[${instanceName}] API error`, {
        status: error.response?.status,
        url: error.config?.url,
        baseURL: error.config?.baseURL,
        message: error.message
      });

      // Handle 401 Unauthorized errors (token expired or invalid)
      if (error.response?.status === 401) {
        console.warn("🚨 Token expired or unauthorized, logging out...");
        
        // Dispatch logout action to clear Redux state
        store.dispatch(logout());
        
        // Clear localStorage
        try {
          if (typeof window !== "undefined") {
            localStorage.removeItem("authToken");
            localStorage.removeItem("user");
            console.log("🧹 Cleared localStorage after 401 error");
          }
        } catch (e) {
          console.error("❌ Failed to clear localStorage:", e);
        }

        // Optionally redirect to login page or home
        if (typeof window !== "undefined") {
          // Only redirect if not already on public pages
          const currentPath = window.location.pathname;
          const publicPaths = ["/dashboard/gaming", "/landing", "/authentication"];
          const isOnPublicPath = publicPaths.some(path => currentPath.startsWith(path));
          
          if (!isOnPublicPath) {
            window.location.href = "/dashboard/gaming";
          }
        }
      }

      return Promise.reject(error);
    }
  );
};

// Setup interceptors
setupRequestInterceptor(AxiosInstance, "Public");
setupResponseInterceptor(AxiosInstance, "Public");
setupRequestInterceptor(AuthAxiosInstance, "Auth");
setupResponseInterceptor(AuthAxiosInstance, "Auth");

export const apiRequest = {
  // Public API requests (no credentials)
  get: async <T = unknown>(url: string, params?: Record<string, unknown>) =>
    AxiosInstance.get<T>(url, { params }),
  post: async <T = unknown>(url: string, data?: unknown) => AxiosInstance.post<T>(url, data),

  // Authenticated API requests (with credentials)
  auth: {
    get: async <T = unknown>(url: string, params?: Record<string, unknown>) =>
      AuthAxiosInstance.get<T>(url, { params }),
    post: async <T = unknown>(url: string, data?: unknown) => AuthAxiosInstance.post<T>(url, data),
    put: async <T = unknown>(url: string, data?: unknown) => AuthAxiosInstance.put<T>(url, data),
    delete: async <T = unknown>(url: string) => AuthAxiosInstance.delete<T>(url)
  }
};
