import TodoList from "./TodoList";
import useTodos from "./useTodos";

const Todos = () => {
  const { todoList, isToodoListLoading } = useTodos();

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full overflow-y-hidden bg-background">
      <div className="w-80">
        <TodoList todoList={todoList} isToodoListLoading={isToodoListLoading} />
        <button className="w-full h-11 bg-white rounded-lg cursor-pointer p-2">
          Create
        </button>
      </div>
    </div>
  );
};

export default Todos;
