import { ITodoResponse } from "../../../interfaces/todo";

interface IDeleteTodoModal {
  todo: ITodoResponse;
  handleDeleteTodo: () => void;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteTodoModal = ({
  todo,
  handleDeleteTodo,
  setIsDeleteModalOpen,
}: IDeleteTodoModal) => {
  return (
    <div
      className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
      id="modal"
    >
      <div role="alert" className="container mx-auto w-5/6 lg:w-2/3 max-w-lg">
        <div className="relative py-6 px-4 bg-background shadow-md rounded">
          <h2 className="text-lg font-semibold">Do you want to delete?</h2>
          <p className="text-gray-600 mt-3">{todo.title}</p>
          <div className="flex items-center justify-between w-full gap-4 mt-4">
            <button
              className="w-full bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 border rounded-lg p-2"
              onClick={() => setIsDeleteModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="w-full transition duration-150 ease-in-out bg-primary rounded-lg text-white p-2"
              onClick={handleDeleteTodo}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteTodoModal;
