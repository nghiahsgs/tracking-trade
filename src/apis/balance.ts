import { API_URL } from "@/constans/api-url";
import api from "./config";

export const getBalance = async () => {
  const response = await api.get(API_URL.BALANCE);
  return response.data;
};
