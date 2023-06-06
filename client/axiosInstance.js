import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'http://localhost:3000',
  responseType: 'json',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
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

instance.interceptors.response.use((response) => {
  // trigger 'loading=false' event here
  const loading = false;
  return { ...response, loading };
}, (error) => {
  // trigger 'loading=false' event here
  return Promise.reject(error);
});



const axiosInstance = instance;

export default axiosInstance;
