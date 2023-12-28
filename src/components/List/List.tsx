import { ReactNode } from "react";
import * as S from "./List.styles";

export type ListProps = {
  children: ReactNode;
};

export function List(props: ListProps) {
  return <S.Component {...props} />;
}
