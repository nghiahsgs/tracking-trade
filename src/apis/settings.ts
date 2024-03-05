import { API_URL } from "@/constans/api-url";
import api from "./config";

export const getSetting = async () => {
  const response = await api.get(API_URL.SETTINGS);
  return response.data;
};
