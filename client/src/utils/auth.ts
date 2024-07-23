// my-nextjs-app/utils/axiosInstance.ts

import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Replace with your actual backend URL
}); 
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = Cookies.get('token');
//     if (token) {
//       config.headers['Authorization'] = token;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
