import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { useAuthStore } from "./store";

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add JWT token
api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers = config.headers || {};
      a;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    const message =
      error.response?.data?.error?.message || "An unexpected error occurred";
    return Promise.reject({ message, status: error.response?.status || 500 });
  }
);

export default api;
