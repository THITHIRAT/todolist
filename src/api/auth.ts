import { IAuthLogin } from "../interfaces";
import axiosInstance from "./axiosInstance";
import { AxiosError } from "axios";

export const login = async (data: IAuthLogin) => {
  try {
    const response =  await axiosInstance.post('/users/auth', data);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    } else {
      return "Something went wrong";
    }
  }
};
