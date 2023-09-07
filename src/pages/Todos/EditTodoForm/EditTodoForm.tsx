import { FormProvider, useForm } from "react-hook-form";
import { IEditTodo } from "../../../interfaces/todo";
import ReactHookField from "../../../components/ReactHookField";
import ReactHookTextAreaField from "../../../components/ReactHookTextAreaField";
import { useQuery } from "react-query";
import { getTodoDetail } from "../../../api/todo";
import { useEffect } from "react";
import LoadingLayout from "../../../components/LoadingLayout";

interface IEditTodoForm {
  editTodoId: string;
  setEditTodoId: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (data: IEditTodo) => void;
}

const EditTodoForm = ({
  editTodoId,
  setEditTodoId,
  onSubmit,
}: IEditTodoForm) => {
  const { data: todoDetail, isLoading } = useQuery(["getTodoDetail", editTodoId], () =>
    getTodoDetail(editTodoId)
  );
  const methods = useForm({
    defaultValues: {
      _id: todoDetail?._id || "",
      title: todoDetail?.title || "",
      description: todoDetail?.description || "",
    },
  });

  useEffect(() => {
    methods.setValue("_id", todoDetail?._id || "", { shouldValidate: true });
    methods.setValue("title", todoDetail?.title || "", { shouldValidate: true });
    methods.setValue("description", todoDetail?.description || "", {
      shouldValidate: true,
    });
  }, [todoDetail]);

  if (isLoading) {
    return <LoadingLayout />;
  }

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
            Edit
          </button>
          <button
            className="w-full bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 border rounded-lg p-2"
            onClick={() => setEditTodoId("")}
          >
            Cancel
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default EditTodoForm;
