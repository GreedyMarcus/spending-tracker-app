import { ReactNode } from "react";
import * as S from "./Overlay.styles";

export type OverlayProps = {
  transparent?: boolean;
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export function Overlay({ transparent, ...rest }: OverlayProps) {
  return <S.Component data-testid="overlay" $transparent={transparent} {...rest} />;
}
