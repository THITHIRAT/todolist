import { UseMutateFunction } from "react-query";
import LoadingLayout from "../../../components/LoadingLayout";
import { ITodoResponse } from "../../../interfaces/todo";
import TodoCard from "../TodoCard";

interface ITodoList {
  todoList: ITodoResponse[] | undefined;
  isLoading: boolean;
  deleteTodo: UseMutateFunction<any, unknown, string, unknown>;
}

const TodoList = ({ todoList, isLoading, deleteTodo }: ITodoList) => {
  if (isLoading) {
    return <LoadingLayout />;
  }

  return (
    <div className="py-4">
      {todoList?.length !== 0 ? (
        <div className="flex flex-col gap-2">
          {todoList?.map((todo: ITodoResponse) => (
            <TodoCard key={todo._id} todo={todo} deleteTodo={deleteTodo} />
          ))}
        </div>
      ) : (
        <h3 className="text-darkGrey text-center">
          Please press Create to add a new task to your empty to-do list.
        </h3>
      )}
    </div>
  );
};

export default TodoList;
