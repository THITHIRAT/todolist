import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../../api/auth";

const useLoginForm = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const { mutate: submitLoginForm, isLoading } = useMutation(login, {
    onSuccess: (response) => {
      if (response.token) {
        localStorage.clear();
        localStorage.setItem("user-token", response.token);
      }
      if (response.message) {
        setErrorMessage(response.message);
      }
      setTimeout(() => {
        navigate("/list");
      }, 500);
    },
  });

  return {
    errorMessage,
    submitLoginForm,
    isLoading,
  };
};

export default useLoginForm;
