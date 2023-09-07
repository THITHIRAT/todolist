import { useMutation, useQuery, useQueryClient } from "react-query";
import { createTask, deleteTask, getTodos } from "../../api/todo";
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
      isToodoListLoading || isCreateTodoLoading || isDeleteTodoLoading
    );
  }, [isToodoListLoading, isCreateTodoLoading, isDeleteTodoLoading]);

  return {
    todoList,
    createTodo,
    deleteTodo,
    isLoading,
  };
};

export default useTodos;
