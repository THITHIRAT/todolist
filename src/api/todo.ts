import axiosInstance from "./axiosInstance";

export const getTodos = async () => {
  const response = await axiosInstance.get<any>('/todos');
  return response.data;
};
