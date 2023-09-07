import { useState } from "react";
import TodoList from "./TodoList";
import useTodos from "./useTodos";
import CreateTodoModal from "./CreateTodoModal";
import { IEditTodo, ITodo } from "../../interfaces/todo";

const Todos = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editTodoId, setEditTodoId] = useState("");
  const { createTodo, updateTodo, deleteTodo, todoList, isLoading } =
    useTodos();

  const handleCreateModal = () => {
    setIsCreateModalOpen((prevValue) => !prevValue);
  };

  const onCreateSubmit = (data: ITodo) => {
    createTodo(data);
    setIsCreateModalOpen(false);
  };

  const onEditSubmit = (data: IEditTodo) => {
    updateTodo(data);
    setEditTodoId("");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full overflow-y-hidden bg-background">
      <div className="w-96">
        <button
          className="w-full h-11 duration-150 bg-white text-gray-600 ease-in-out hover:border-gray-400 border rounded-lg"
          onClick={handleCreateModal}
        >
          Create
        </button>
        <TodoList
          todoList={todoList}
          isLoading={isLoading}
          deleteTodo={deleteTodo}
          editTodoId={editTodoId}
          setEditTodoId={setEditTodoId}
          onEditSubmit={onEditSubmit}
        />
      </div>
      {isCreateModalOpen && (
        <CreateTodoModal
          setIsCreateModalOpen={setIsCreateModalOpen}
          onCreateSubmit={onCreateSubmit}
        />
      )}
    </div>
  );
};

export default Todos;
