import LoadingLayout from "../../../components/LoadingLayout";

interface ITodoList {
  todoList: any;
  isToodoListLoading: boolean;
}

const TodoList = ({ todoList, isToodoListLoading }: ITodoList) => {
  if (isToodoListLoading) {
    return <LoadingLayout />;
  }

  return (
    <div className="p-4">
      {todoList?.length !== 0 ? (
        <div>Todo List</div>
      ) : (
        <h3 className="text-darkGrey text-center">
          Please press Create to add a new task to your empty to-do list.
        </h3>
      )}
    </div>
  );
};

export default TodoList;
