import { FormProvider, useForm } from "react-hook-form";
import ReactHookField from "../../../components/ReactHookField";
import ReactHookTextAreaField from "../../../components/ReactHookTextAreaField";
import { ITodo } from "../../../interfaces/todo";

const defaultInitialValues = {
  title: "",
  description: "",
};

interface ICreateTodoForm {
  setIsCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (data: ITodo) => void;
}

const CreateTodoForm = ({ setIsCreateModalOpen, onSubmit }: ICreateTodoForm) => {
  const methods = useForm({
    defaultValues: defaultInitialValues,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="mb-4">
          <ReactHookField label="Title" name="title" required />
        </div>
        <div className="mb-4">
          <ReactHookTextAreaField label="Description" name="description" />
        </div>
        <div className="flex flex-col items-center justify-between w-full gap-4">
          <button className="w-full transition duration-150 ease-in-out bg-primary rounded-lg text-white p-2">
            Create
          </button>
          <button
            className="w-full bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 border rounded-lg p-2"
            onClick={() => setIsCreateModalOpen(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default CreateTodoForm;
