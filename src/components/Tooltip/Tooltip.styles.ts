import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div(
  ({ theme }) => css`
    display: flex;
    border-radius: ${theme.shape.borderRadius};
    background-color: ${theme.colors.black[700]};
    padding: 0.5rem;
    color: ${theme.colors.black[50]};
    max-width: 32rem;
    font-size: ${theme.text.secondary};
    user-select: none;
  `
);
