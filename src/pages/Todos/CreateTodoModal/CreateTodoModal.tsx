import { ITodo } from "../../../interfaces/todo";
import CreateTodoForm from "../CreateTodoForm";

interface ICreateTodoModal {
  setIsCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (data: ITodo) => void
}
const CreateTodoModal = ({ setIsCreateModalOpen, onSubmit }: ICreateTodoModal) => {
  return (
    <div
      className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
      id="modal"
    >
      <div role="alert" className="container mx-auto w-5/6 lg:w-2/3 max-w-lg">
        <div className="relative py-6 px-4 bg-background shadow-md rounded">
          <CreateTodoForm setIsCreateModalOpen={setIsCreateModalOpen} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default CreateTodoModal;
