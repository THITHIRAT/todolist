import React from 'react';
import { useFormContext } from "react-hook-form";

export type ReactHookTextAreaField = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  type?: string;
  label?: string;
  name?: string;
};

const ReactHookTextAreaField = ({
  label,
  required = false,
  name = "field",
  ...otherProps
}: ReactHookTextAreaField): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      {label && (
        <p className="m-0 mb-1.5 text-sm font-medium text-darkGrey">
          {label}
          {required && "*"}
        </p>
      )}
      <div className="relative">
        <textarea
          placeholder={otherProps?.placeholder || ""}
          className={`
            h-11 w-full appearance-none rounded-lg border-0 px-3.5 py-2.5 ring-1 placeholder:text-darkGrey focus-visible:outline-0
            ${errors[name]?.message ? "ring-red-700" : "ring-white"}
          `}
          {...register(name, {
            required: {
              value: required,
              message: `${label || "Field"} is required`,
            },
          })}
        />
      </div>
      {errors[name]?.message && (
        <p className="m-0 px-4 py-1 text-xs text-red-700">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default ReactHookTextAreaField;