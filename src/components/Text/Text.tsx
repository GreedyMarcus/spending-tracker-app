import { ReactNode } from "react";
import { ColorOption, TextComponent, TextVariant } from "styled-components";
import { parseColor } from "@styles/theme";
import * as S from "./Text.styles";

export type TextProps = {
  as?: TextComponent;
  variant?: TextVariant;
  color?: ColorOption;
  bold?: boolean;
  children: ReactNode;
};

export function Text({ variant = "primary", color = "black.900", bold, ...rest }: TextProps) {
  return <S.Component $variant={variant} $bold={bold} color={parseColor(color)} {...rest} />;
}
