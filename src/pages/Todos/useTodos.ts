import { useQuery } from "react-query";
import { getTodos } from "../../api/todo";

const useTodos = () => {
  const { data: todoList, isLoading: isToodoListLoading } = useQuery(
    "getTodos",
    () => getTodos()
  );

  return {
    todoList,
    isToodoListLoading
  }
}

export default useTodos;
