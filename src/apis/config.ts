import axios, { AxiosError } from "axios";

const BASE_URL = "";

const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 30 * 1000,
  });

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError<unknown>) => {
      return Promise.reject(error?.response || error);
    }
  );

  return instance;
};
const api = createAxiosInstance();

export default api;
