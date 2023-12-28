import { ReactNode } from "react";
import * as S from "./MenuItem.styles";

export type MenuItemProps = {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const MenuItem = (props: MenuItemProps) => {
  return <S.Component role="menuitem" color="light" {...props} />;
};
