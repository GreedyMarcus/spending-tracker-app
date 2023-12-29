import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useId } from "react";
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm } from "react-hook-form";
import { Schema } from "zod";

type UseSmartFormRegisterOptions<T extends FieldValues = FieldValues> = {
  name: Path<T>;
};

export function useSmartForm<T extends FieldValues = FieldValues>(
  schema: Schema<T>,
  submitHandler: SubmitHandler<T>,
  defaultValues?: DefaultValues<T>
) {
  const formId = useId();
  const methods = useForm<T>({ mode: "onChange", resolver: zodResolver(schema), defaultValues });

  const {
    register: registerField,
    formState: { errors },
    handleSubmit: handleFormSubmit,
  } = methods;

  const handleSubmit = useCallback(() => handleFormSubmit(submitHandler)(), [handleFormSubmit, submitHandler]);

  const handleKeydown = useCallback(
    ({ key, shiftKey }: React.KeyboardEvent<HTMLElement>) => {
      if (key === "Enter" && !shiftKey) {
        handleSubmit();
      }
    },
    [handleSubmit]
  );

  const register = useCallback(
    ({ name }: UseSmartFormRegisterOptions<T>) => ({
      ...registerField(name),
      id: `${formId}-${name}`,
      errorMessage: errors[name]?.message,
      onKeyDown: handleKeydown,
    }),
    [registerField, formId, errors, handleKeydown]
  );

  return {
    ...methods,
    canSubmit: !Object.values(errors).length,
    handleSubmit,
    register,
  };
}
