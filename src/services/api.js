import axios from 'axios';
import errorInterceptor from '../interceptors/error-interceptor';
import authHeader from './auth-header';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
})



api.interceptors.request.use((config) => {
  config.headers.Authorization = authHeader();

  return config;
});


api.interceptors.response.use((response) => response , (error) => errorInterceptor(error));

export default api;