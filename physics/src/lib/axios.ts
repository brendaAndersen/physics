import axios from 'axios'
import { env } from '../env'
import { getToken } from '../api/services/auth';

// import { env } from 'process'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: false,
})

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;