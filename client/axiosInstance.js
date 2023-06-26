import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://cms-flower.onrender.com',
  responseType: 'json',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true,
  credentials: 'include',
});

// Add an interceptor to transform requests
instance.interceptors.request.use((config) => {
  // If request is for multipart/form-data, change headers accordingly
  if (config.headers['Content-Type'] === 'multipart/form-data') {
    // eslint-disable-next-line no-param-reassign
    config.headers['Content-Type'] = 'multipart/form-data';
  }
  return config;
});

const axiosInstance = instance;

export default axiosInstance;
