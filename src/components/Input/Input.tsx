import { Ref, forwardRef } from "react";
import * as S from "./Input.styles";

export type InputProps = {
  id: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  type?: "text" | "number";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
};

export const Input = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
  return <S.Component ref={ref} autoComplete="off" {...props} />;
});
