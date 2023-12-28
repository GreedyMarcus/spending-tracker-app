import styled, { css } from "styled-components";

type ComponentProps = {
  $width?: string;
};

export const Component = styled.div<ComponentProps>(
  ({ theme, $width }) => css`
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin: 0;
    box-shadow: ${theme.shadow};
    border: 0.0625rem solid ${theme.colors.black[200]};
    border-radius: ${theme.shape.borderRadius};
    background-color: white;
    padding: 0.25rem;
    width: ${$width};
  `
);
