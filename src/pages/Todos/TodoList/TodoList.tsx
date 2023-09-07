import { UseMutateFunction } from "react-query";
import LoadingLayout from "../../../components/LoadingLayout";
import { IEditTodo, ITodoResponse } from "../../../interfaces/todo";
import TodoCard from "../TodoCard";

interface ITodoList {
  todoList: ITodoResponse[] | undefined;
  isLoading: boolean;
  deleteTodo: UseMutateFunction<any, unknown, string, unknown>;
  editTodoId: string;
  setEditTodoId: React.Dispatch<React.SetStateAction<string>>;
  onEditSubmit: (data: IEditTodo) => void;
}

const TodoList = ({
  todoList,
  isLoading,
  deleteTodo,
  editTodoId,
  setEditTodoId,
  onEditSubmit,
}: ITodoList) => {
  if (isLoading) {
    return (
      <div className="py-4 overflow-y-auto h-[calc(100vh-64px)]">
        <LoadingLayout />
      </div>
    );
  }

  return (
    <div className="py-4 overflow-y-auto h-[calc(100vh-64px)]">
      {todoList?.length !== 0 ? (
        <div className="flex flex-col gap-2">
          {todoList?.map((todo: ITodoResponse) => (
            <TodoCard
              key={todo._id}
              todo={todo}
              deleteTodo={deleteTodo}
              editTodoId={editTodoId}
              setEditTodoId={setEditTodoId}
              onEditSubmit={onEditSubmit}
            />
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
