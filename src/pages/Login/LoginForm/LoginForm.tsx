import { FormProvider, useForm } from "react-hook-form";
import ReactHookField from "../../../components/ReactHookField";
import { IAuthLogin } from "../../../interfaces";
import useLoginForm from "./useLoginForm";

const defaultInitialValues = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const {
    errorMessage: loginErrorMessage,
    submitLoginForm,
    isLoading,
  } = useLoginForm();
  const methods = useForm({
    defaultValues: defaultInitialValues,
  });

  const onSubmit = (data: IAuthLogin) => {
    submitLoginForm(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="mt-4">
          <ReactHookField label="Username" name="username" required />
        </div>
        <div className="mt-4">
          <ReactHookField
            label="Password"
            name="password"
            type="password"
            required
          />
        </div>
        {loginErrorMessage && (
          <p className="mt-4 py-1 text-xs text-red-700">{loginErrorMessage}</p>
        )}
        <div className="mt-8">
          <button
            className={`w-full h-11 bg-white text-gray-600 ease-in-out hover:border-gray-400 border rounded-lg ${
              isLoading ? "opacity-60 cursor-progress" : "opacity-100 cursor-pointer"
            }`}
            type="submit"
            disabled={isLoading}
          >
            Log In
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
