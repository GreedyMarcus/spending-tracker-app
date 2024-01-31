import styled, { TextVariant, css } from "styled-components";

type ComponentProps = {
  $variant: TextVariant;
  $bold?: boolean;
  $breakWord?: boolean;
};

export const Component = styled.span<ComponentProps>(
  ({ theme, color, $variant, $bold, $breakWord }) => css`
    color: ${color};
    font-size: ${theme.text[$variant]};
    font-weight: ${$bold ? 600 : 400};
    word-break: ${$breakWord && "break-all"};
  `
);
