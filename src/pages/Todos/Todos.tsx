import { useState } from "react";
import TodoList from "./TodoList";
import useTodos from "./useTodos";
import CreateTodoModal from "./CreateTodoModal";
import { ITodo } from "../../interfaces/todo";
import DeleteTodoModal from "./DeleteTodoModal";

const Todos = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { createTodo, deleteTodo, todoList, isLoading } = useTodos();

  const handleCreateModal = () => {
    setIsCreateModalOpen((prevValue) => !prevValue);
  };

  const onSubmit = (data: ITodo) => {
    createTodo(data);
    setIsCreateModalOpen(false);
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
        />
      </div>
      {isCreateModalOpen && (
        <CreateTodoModal setIsCreateModalOpen={setIsCreateModalOpen} onSubmit={onSubmit} />
      )}
    </div>
  );
};

export default Todos;
