import axios from "axios";
import store from "../redux/store"; // Redux 스토어 가져오기

const AxiosInstance = axios.create({
  baseURL: "/api",
  timeout: 5000,
  withCredentials: true, // Include cookies in requests
});

AxiosInstance.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.auth?.token; // Retrieve token from Redux store

  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`; // Attach Authorization header
  }

  return config;
});

export const apiRequest = {
  get: async (url: string, params?: any) => {
    return AxiosInstance.get(url, { params });
  },
  post: async (url: string, data?: any) => {
    return AxiosInstance.post(url, data);
  },

};