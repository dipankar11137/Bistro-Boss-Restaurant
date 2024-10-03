import axios from 'axios';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
});
const useAxiosSecure = () => {
  // request interceptor to add authorization header for every secure call to the api
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('access-token');
      config.headers.authorization = `Bearer ${token}`;
      console.log('dado aice', token);
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // intercepts 401 and 403
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    error => {
      console.log('status Error', error);
      const status = error.response.status;
      return Promise.reject(status);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
