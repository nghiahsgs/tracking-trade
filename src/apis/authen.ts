import { API_URL } from "@/constants/api-url";

import api from "./config";
import { ILogin, IRegister } from "@/types/authenticate";

export const registerAccount = async (body: IRegister) => {
  const response = await api.post(API_URL.REGISTER, body);
  return response.data;
};

export const loginAccount = async (body: ILogin) => {
  const formData = new FormData();
  formData.append("username", body.username);
  formData.append("password", body.password);
  const response = await api.post(API_URL.LOGIN, formData);
  return response.data;
};
