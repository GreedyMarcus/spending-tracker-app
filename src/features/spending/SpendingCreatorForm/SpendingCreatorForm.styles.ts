import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;

    @media (min-width: ${theme.screen.md}) {
      display: grid;
      grid-template-columns: 3fr 1fr auto;
    }
  `
);

export const InputContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 4.5rem;

    @media (min-width: ${theme.screen.md}) {
      height: 5.5rem;
    }
  `
);
