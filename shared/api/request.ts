import axios from "axios";
import store from "../redux/store"; // Import Redux store
import { getApiUrl } from "../utils/environment";

// Determine API base URL via environment variables
const getApiBaseUrl = () => {
  // On the client, always use the proxied relative path via rewrites (bypasses CORS)
  if (typeof window !== "undefined") {
    console.log("� Client-side API request - baseURL: /api (using rewrite, bypassing CORS)");
    return "/api";
  }

  // On the server, use environment variable
  const envApiUrl = getApiUrl();
  if (envApiUrl) {
    console.log("🖥️ Server-side API request - baseURL:", envApiUrl);
    return envApiUrl;
  }

  // Server-side fallback
  const fallbackApiUrl = process.env.NEXT_PUBLIC_API_URL || "";
  console.log("🖥️ Server-side API request fallback - baseURL:", fallbackApiUrl);
  return fallbackApiUrl;
};

const AxiosInstance = axios.create({
  baseURL: getApiBaseUrl(),
  timeout: 5000,
  withCredentials: false // Don't use credentials by default
});

// Separate instance for requests requiring authentication
const AuthAxiosInstance = axios.create({
  baseURL: getApiBaseUrl(),
  timeout: 5000,
  withCredentials: true // Use credentials only for authenticated requests
});

// Shared request interceptor
const setupRequestInterceptor = (instance: any, instanceName: string) => {
  instance.interceptors.request.use((config: any) => {
    const state = store.getState();
    const token = state.auth?.token;

    console.log(`📤 ${instanceName} API request:`, {
      method: config.method?.toUpperCase(),
      url: config.url,
      baseURL: config.baseURL,
      fullURL: `${config.baseURL}${config.url}`,
      hasToken: !!token,
      withCredentials: config.withCredentials,
      timestamp: new Date().toISOString()
    });

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });
};

// Shared response interceptor
const setupResponseInterceptor = (instance: any, instanceName: string) => {
  instance.interceptors.response.use(
    (response: any) => {
      console.log(`✅ ${instanceName} API response success:`, {
        status: response.status,
        url: response.config.url,
        timestamp: new Date().toISOString()
      });
      return response;
    },
    (error: any) => {
      console.error(`❌ ${instanceName} API response error:`, {
        status: error.response?.status,
        url: error.config?.url,
        baseURL: error.config?.baseURL,
        fullURL: error.config ? `${error.config.baseURL}${error.config.url}` : "unknown",
        message: error.message,
        withCredentials: error.config?.withCredentials,
        timestamp: new Date().toISOString()
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
  get: async (url: string, params?: any) => {
    return AxiosInstance.get(url, { params });
  },
  post: async (url: string, data?: any) => {
    return AxiosInstance.post(url, data);
  },

  // Authenticated API requests (with credentials)
  auth: {
    get: async (url: string, params?: any) => {
      return AuthAxiosInstance.get(url, { params });
    },
    post: async (url: string, data?: any) => {
      return AuthAxiosInstance.post(url, data);
    },
    put: async (url: string, data?: any) => {
      return AuthAxiosInstance.put(url, data);
    },
    delete: async (url: string) => {
      return AuthAxiosInstance.delete(url);
    }
  }
};
