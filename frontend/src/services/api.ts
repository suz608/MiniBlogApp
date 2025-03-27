// src/api.ts
import axios, { AxiosError } from 'axios';
import store from '@/store/index.ts'

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,  // Base URL from environment variables
  timeout: 10000,  // Optional: Set a timeout for requests
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (axios.isAxiosError(error)) {
      const message = error.message || 'An error occurred. Please try again.';
      store.commit('setErrorMessage', message);  // Set a global error message in your store
    } else {
      store.commit('setErrorMessage', 'An unexpected error occurred.');
    }
    return Promise.reject(error);  // Propagate the error
  }
);
export default api;
