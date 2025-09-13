import axios, {
  type AxiosInstance as AxiosInstanceType,
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from "axios";
import store from "../redux/store"; // Import Redux store
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
  withCredentials: false // Don't use credentials by default
});

// Separate instance for requests requiring authentication
const AuthAxiosInstance: AxiosInstanceType = axios.create({
  baseURL: getApiBaseUrl(),
  timeout: 5000,
  withCredentials: true // Use credentials only for authenticated requests
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
      console.info(`[${instanceName}]`, config.method?.toUpperCase(), config.url);
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
