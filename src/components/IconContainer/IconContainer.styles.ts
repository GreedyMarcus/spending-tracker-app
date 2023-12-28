import styled, { css } from "styled-components";

type ComponentProps = {
  $background?: string;
};

export const Component = styled.div<ComponentProps>(
  ({ theme, color, $background }) => css`
    display: flex;
    border-radius: ${theme.shape.borderRadius};
    background-color: ${$background};
    padding: 0.25rem;
    color: ${color};
    width: fit-content;
    height: fit-content;

    > svg {
      width: 2rem;
      height: 2rem;
    }
  `
);
