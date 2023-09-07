import dayjs from "dayjs";
import { UseMutateFunction } from "react-query";
import { ITodoResponse } from "../../../interfaces/todo";
import DeleteTodoModal from "../DeleteTodoModal";
import { useState } from "react";

interface ITodoCard {
  todo: ITodoResponse;
  deleteTodo: UseMutateFunction<any, unknown, string, unknown>;
}

const TodoCard = ({ todo, deleteTodo }: ITodoCard) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteTodo = () => {
    deleteTodo(todo._id);
    setIsDeleteModalOpen(true);
  };

  return (
    <div className="flex justify-between w-full bg-primary rounded-lg p-4">
      <div className="flex-1 flex flex-col">
        <h2 className="text-white font-semibold">{todo.title}</h2>
        <span className="text-white">{todo.description}</span>
      </div>
      <div className="flex-none flex flex-col justify-between items-end">
        <span className="text-secondary text-sm">
          {dayjs(todo.updatedAt).format("DD/MM/YY")}
        </span>
        <span
          className="text-red-500 text-sm cursor-pointer"
          onClick={() => setIsDeleteModalOpen(true)}
        >
          Delete
        </span>
      </div>
      {isDeleteModalOpen && (
        <DeleteTodoModal
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
        />
      )}
    </div>
  );
};

export default TodoCard;
