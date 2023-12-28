import styled, { TextVariant, css } from "styled-components";

type ComponentProps = {
  $variant: TextVariant;
  $bold?: boolean;
};

export const Component = styled.span<ComponentProps>(
  ({ theme, color, $variant, $bold }) => css`
    color: ${color};
    font-size: ${theme.text[$variant]};
    font-weight: ${$bold ? 600 : 400};
  `
);
