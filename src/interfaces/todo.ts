export interface ITodoResponse {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export type ITodo = Omit<ITodoResponse, "_id" | "createdAt" | "updatedAt">;
