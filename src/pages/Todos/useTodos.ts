import { useMutation, useQuery, useQueryClient } from "react-query";
import { createTask, deleteTask, getTodoDetail, getTodos, updateTask } from "../../api/todo";
import { useEffect, useState } from "react";

const useTodos = () => {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  const { data: todoList, isLoading: isToodoListLoading } = useQuery(
    "getTodos",
    () => getTodos()
  );

  const { mutate: createTodo, isLoading: isCreateTodoLoading } = useMutation(
    createTask,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getTodos");
      },
    }
  );

  const { mutate: updateTodo, isLoading: isUpdateTodoLoading } = useMutation(
    updateTask,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getTodos");
      },
    }
  );

  const { mutate: deleteTodo, isLoading: isDeleteTodoLoading } = useMutation(
    deleteTask,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getTodos");
      },
    }
  );

  useEffect(() => {
    setIsLoading(
      isToodoListLoading ||
        isCreateTodoLoading ||
        isUpdateTodoLoading ||
        isDeleteTodoLoading
    );
  }, [
    isToodoListLoading,
    isCreateTodoLoading,
    isUpdateTodoLoading,
    isDeleteTodoLoading,
  ]);

  return {
    todoList,
    createTodo,
    updateTodo,
    deleteTodo,
    isLoading,
  };
};

export default useTodos;
