import styled, { css } from "styled-components";

export const Component = styled.li(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    border-radius: ${theme.shape.borderRadius};
    background-color: white;
    box-shadow: ${theme.shadow};
    padding: 1.25rem;
  `
);
