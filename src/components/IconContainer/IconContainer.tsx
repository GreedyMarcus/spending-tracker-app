import { ReactNode } from "react";
import { ColorOption } from "styled-components";
import { parseColor } from "@styles/theme";
import * as S from "./IconContainer.styles";

export type IconContainerProps = {
  color?: ColorOption;
  background?: ColorOption;
  children: ReactNode;
};

export function IconContainer({ color = "black.900", background, ...rest }: IconContainerProps) {
  return (
    <S.Component color={parseColor(color)} $background={background ? parseColor(background) : undefined} {...rest} />
  );
}
