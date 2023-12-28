import { CSSProperties, ReactNode } from "react";
import * as S from "./Stack.styles";

export type StackProps = {
  direction?: CSSProperties["flexDirection"];
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  spacing?: number;
  fullWidth?: boolean;
  children: ReactNode;
};

export function Stack({ direction, alignItems, justifyContent, spacing, fullWidth, ...rest }: StackProps) {
  return (
    <S.Component
      $direction={direction}
      $alignItems={alignItems}
      $justifyContent={justifyContent}
      $spacing={spacing}
      $fullWidth={fullWidth}
      {...rest}
    />
  );
}
