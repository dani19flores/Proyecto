import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { API_CONFIG } from '../../config/api';

// Create axios instance for CoinGecko API (no auth required)
export const coinGeckoApi: AxiosInstance = axios.create({
    baseURL: API_CONFIG.COINGECKO_BASE_URL,
    timeout: API_CONFIG.TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
coinGeckoApi.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        console.log('API Request:', config.method?.toUpperCase(), config.url);
        return config;
    },
    (error: AxiosError) => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor
coinGeckoApi.interceptors.response.use(
    (response: AxiosResponse) => {
        console.log('API Response:', response.status, response.config.url);
        return response;
    },
    (error: AxiosError) => {
        console.error('Response Error:', error.response?.status, error.message);
        return Promise.reject(error);
    }
);

export default coinGeckoApi;
