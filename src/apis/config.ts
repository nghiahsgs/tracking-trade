import { API_URL } from "@/constants/api-url";
import { LocalStorageService } from "@/utils/storage";
import axios, { AxiosError } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 30 * 1000,
  });

  instance.interceptors.request.use(
    (config) => {
      const url = config.url;
      const publishApi: Array<string> = [API_URL.LOGIN, API_URL.REGISTER];
      if (url && publishApi.includes(url)) {
        return config;
      }
      const accessToken = LocalStorageService.getAccessToken();
      config.headers.Authorization = `Bearer ${accessToken}`;
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
