import dayjs from "dayjs";
import { UseMutateFunction } from "react-query";
import { IEditTodo, ITodoResponse } from "../../../interfaces/todo";
import DeleteTodoModal from "../DeleteTodoModal";
import { useState } from "react";
import EditTodoModal from "../EditTodoModal";

interface ITodoCard {
  todo: ITodoResponse;
  deleteTodo: UseMutateFunction<any, unknown, string, unknown>;
  editTodoId: string;
  setEditTodoId: React.Dispatch<React.SetStateAction<string>>;
  onEditSubmit: (data: IEditTodo) => void;
}

const TodoCard = ({
  todo,
  deleteTodo,
  editTodoId,
  setEditTodoId,
  onEditSubmit,
}: ITodoCard) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteTodo = () => {
    deleteTodo(todo._id);
    setIsDeleteModalOpen(true);
  };

  return (
    <div className="flex justify-between w-full bg-primary rounded-lg p-4">
      <div
        className="flex-1 flex flex-col"
        onClick={() => setEditTodoId(todo._id)}
      >
        <h2 className="text-white font-semibold">{todo.title}</h2>
        <span className="text-white">{todo.description}</span>
      </div>
      <div className="flex-none flex flex-col justify-between items-end">
        <span className="text-secondary text-sm">
          {dayjs(todo.updatedAt).format("DD/MM/YY")}
        </span>
        <button
          className="text-red-500 hover:text-white text-sm cursor-pointer"
          onClick={() => setIsDeleteModalOpen(true)}
        >
          Delete
        </button>
      </div>
      {isDeleteModalOpen && (
        <DeleteTodoModal
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
        />
      )}
      {editTodoId && (
        <EditTodoModal
          editTodoId={editTodoId}
          setEditTodoId={setEditTodoId}
          onEditSubmit={onEditSubmit}
        />
      )}
    </div>
  );
};

export default TodoCard;
