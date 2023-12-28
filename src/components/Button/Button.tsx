import { ReactNode, Ref, forwardRef } from "react";
import * as S from "./Button.styles";
import { ButtonColorVariant, ButtonRole } from "./Button.types";

export type ButtonProps = {
  id?: string;
  role?: ButtonRole;
  color?: ButtonColorVariant;
  disabled?: boolean;
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = forwardRef(({ color, ...rest }: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  return <S.Component ref={ref} $color={color} {...rest} />;
});
