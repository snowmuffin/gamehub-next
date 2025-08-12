import axios from "axios";
import store from "../redux/store"; // Redux 스토어 가져오기
import { getApiUrl } from "../utils/environment";

// 환경 변수를 통한 API URL 설정
const getApiBaseUrl = () => {
  // 클라이언트 사이드에서는 항상 rewrite를 통한 상대 경로 사용 (CORS 우회)
  if (typeof window !== "undefined") {
    console.log("� 클라이언트 사이드 API 요청 - baseURL: /api (rewrite 사용, CORS 우회)");
    return "/api";
  }

  // 서버 사이드에서는 환경 변수 사용
  const envApiUrl = getApiUrl();
  if (envApiUrl) {
    console.log("🖥️ 서버 사이드 API 요청 - baseURL:", envApiUrl);
    return envApiUrl;
  }

  // 서버 사이드 fallback
  const fallbackApiUrl = "https://api.snowmuffingame.com";
  console.log("🖥️ 서버 사이드 API 요청 fallback - baseURL:", fallbackApiUrl);
  return fallbackApiUrl;
};

const AxiosInstance = axios.create({
  baseURL: getApiBaseUrl(),
  timeout: 5000,
  withCredentials: false // 기본적으로 credentials 사용하지 않음
});

// 인증이 필요한 요청을 위한 별도 인스턴스
const AuthAxiosInstance = axios.create({
  baseURL: getApiBaseUrl(),
  timeout: 5000,
  withCredentials: true // 인증이 필요한 요청에만 credentials 사용
});

// 공통 요청 인터셉터 함수
const setupRequestInterceptor = (instance: any, instanceName: string) => {
  instance.interceptors.request.use((config: any) => {
    const state = store.getState();
    const token = state.auth?.token;

    console.log(`📤 ${instanceName} API 요청:`, {
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

// 공통 응답 인터셉터 함수
const setupResponseInterceptor = (instance: any, instanceName: string) => {
  instance.interceptors.response.use(
    (response: any) => {
      console.log(`✅ ${instanceName} API 응답 성공:`, {
        status: response.status,
        url: response.config.url,
        timestamp: new Date().toISOString()
      });
      return response;
    },
    (error: any) => {
      console.error(`❌ ${instanceName} API 응답 실패:`, {
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

// 인터셉터 설정
setupRequestInterceptor(AxiosInstance, "Public");
setupResponseInterceptor(AxiosInstance, "Public");
setupRequestInterceptor(AuthAxiosInstance, "Auth");
setupResponseInterceptor(AuthAxiosInstance, "Auth");

export const apiRequest = {
  // 공개 API 요청 (credentials 없음)
  get: async (url: string, params?: any) => {
    return AxiosInstance.get(url, { params });
  },
  post: async (url: string, data?: any) => {
    return AxiosInstance.post(url, data);
  },
  
  // 인증이 필요한 API 요청 (credentials 포함)
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
