import { ReactNode } from "react";
import { ColorOption, TextComponent, TextVariant } from "styled-components";
import { parseColor } from "@styles/theme";
import * as S from "./Text.styles";

export type TextProps = {
  as?: TextComponent;
  variant?: TextVariant;
  color?: ColorOption;
  bold?: boolean;
  breakWord?: boolean;
  children: ReactNode;
};

export function Text({ variant = "primary", color = "black.900", bold, breakWord, ...rest }: TextProps) {
  return <S.Component $variant={variant} $bold={bold} $breakWord={breakWord} color={parseColor(color)} {...rest} />;
}
