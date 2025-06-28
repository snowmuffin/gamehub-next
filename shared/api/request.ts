import axios from "axios";
import store from "../redux/store"; // Redux 스토어 가져오기

// 환경 변수를 통한 API URL 설정
const getApiBaseUrl = () => {
  // 프로덕션에서는 rewrite를 사용하여 /api 경로로 요청
  if (typeof window !== 'undefined') {
    // 클라이언트 사이드에서는 상대 경로 사용
    console.log('🌐 클라이언트 사이드 API 요청 - baseURL: /api');
    return "/api";
  }
  
  // 서버 사이드에서는 직접 API 서버로 요청
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://REDACTED_API';
  console.log('🖥️ 서버 사이드 API 요청 - baseURL:', apiUrl);
  return apiUrl;
};

const AxiosInstance = axios.create({
  baseURL: getApiBaseUrl(),
  timeout: 5000,
  withCredentials: true, // Include cookies in requests
});

// 요청 인터셉터에 로깅 추가
AxiosInstance.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.auth?.token; // Retrieve token from Redux store

  console.log('📤 API 요청:', {
    method: config.method?.toUpperCase(),
    url: config.url,
    baseURL: config.baseURL,
    fullURL: `${config.baseURL}${config.url}`,
    hasToken: !!token,
    timestamp: new Date().toISOString()
  });

  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`; // Attach Authorization header
  }

  return config;
});

// 응답 인터셉터에 로깅 추가
AxiosInstance.interceptors.response.use(
  (response) => {
    console.log('✅ API 응답 성공:', {
      status: response.status,
      url: response.config.url,
      timestamp: new Date().toISOString()
    });
    return response;
  },
  (error) => {
    console.error('❌ API 응답 실패:', {
      status: error.response?.status,
      url: error.config?.url,
      baseURL: error.config?.baseURL,
      fullURL: error.config ? `${error.config.baseURL}${error.config.url}` : 'unknown',
      message: error.message,
      timestamp: new Date().toISOString()
    });
    return Promise.reject(error);
  }
);

export const apiRequest = {
  get: async (url: string, params?: any) => {
    return AxiosInstance.get(url, { params });
  },
  post: async (url: string, data?: any) => {
    return AxiosInstance.post(url, data);
  },

};