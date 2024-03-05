import { API_URL } from "@/constans/api-url";
import api from "./config";

export const getWaitingOrder = async () => {
  const response = await api.get(API_URL.WAITING_ORDER);
  return response.data;
};

export const updateWaitingOrder = async () => {
  const response = await api.put(API_URL.UPDATE_WAITING_ORDER);
  return response.data;
};

export const deleteWaitingOrder = async () => {
  const response = await api.delete(API_URL.DELETE_HISTORY_ORDER);
  return response.data;
};
