import { IEditTodo, ITodoResponse } from "../../../interfaces/todo";
import EditTodoForm from "../EditTodoForm";

interface IEditTodoModal {
  editTodoId: string;
  setEditTodoId: React.Dispatch<React.SetStateAction<string>>;
  onEditSubmit: (data: IEditTodo) => void;
}

const EditTodoModal = ({ editTodoId, setEditTodoId, onEditSubmit }: IEditTodoModal) => {
  return (
    <div
      className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
      id="modal"
    >
      <div role="alert" className="container mx-auto w-5/6 lg:w-2/3 max-w-lg">
        <div className="relative py-6 px-4 bg-background shadow-md rounded">
          <EditTodoForm
            editTodoId={editTodoId}
            setEditTodoId={setEditTodoId}
            onSubmit={onEditSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default EditTodoModal;
