import { IEditTodo, ITodo, ITodoResponse } from "../interfaces/todo";
import axiosInstance from "./axiosInstance";

export const getTodos = async () => {
  const response = await axiosInstance.get<ITodoResponse[]>("/todos");
  return response.data;
};

export const getTodoDetail = async (_id: string) => {
  if (!_id) return;
  const response = await axiosInstance.get<ITodoResponse>(`/todos/${_id}`);
  return response.data;
}

export const createTask = async (data: ITodo) => {
  const response = await axiosInstance.post<ITodoResponse>("/todos", data);
  return response.data;
};

export const updateTask = async (data: IEditTodo) => {
  const response = await axiosInstance.put<ITodoResponse>(
    `/todos/${data._id}`,
    { title: data.title, description: data.description }
  );
  return response.data;
};

export const deleteTask = async (id: string) => {
  const response = await axiosInstance.delete(`/todos/${id}`);
  return response.data;
};
