import { ReactNode } from "react";
import * as S from "./ListItem.styles";

export type ListItemProps = {
  children: ReactNode;
};

export function ListItem(props: ListItemProps) {
  return <S.Component {...props} />;
}
