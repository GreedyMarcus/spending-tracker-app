import { CSSProperties } from "react";
import styled, { css } from "styled-components";

type ComponentProps = {
  $direction?: CSSProperties["flexDirection"];
  $alignItems?: CSSProperties["alignItems"];
  $justifyContent?: CSSProperties["justifyContent"];
  $spacing?: number;
  $fullWidth?: boolean;
};

export const Component = styled.div<ComponentProps>(
  ({ $direction, $alignItems, $justifyContent, $spacing = 0, $fullWidth }) => css`
    display: flex;
    flex-direction: ${$direction};
    align-items: ${$alignItems};
    justify-content: ${$justifyContent};
    gap: ${$spacing}rem;
    width: ${$fullWidth ? "100%" : "fit-content"};
  `
);
