import { ITodo, ITodoResponse } from "../interfaces/todo";
import axiosInstance from "./axiosInstance";

export const getTodos = async () => {
  const response = await axiosInstance.get<ITodoResponse[]>("/todos");
  return response.data;
};

export const createTask = async (data: ITodo) => {
  const response = await axiosInstance.post<ITodoResponse>("/todos", data);
  return response.data;
};

export const deleteTask = async (id: string) => {
  const response = await axiosInstance.delete(`/todos/${id}`);
  return response.data;
};
