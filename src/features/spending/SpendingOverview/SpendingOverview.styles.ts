import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin: 0 auto;
    padding: 1rem;
    width: 100%;
    max-width: 100%;

    > * {
      width: 100%;
    }

    @media (min-width: ${theme.screen.sm}) {
      padding: 4rem 1rem 1rem;
      max-width: ${theme.screen.md};
    }

    @media (min-width: ${theme.screen.xl}) {
      max-width: ${theme.screen.lg};
    }
  `
);

export const FilterSection = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;

    @media (max-width: ${theme.screen.sm}) {
      * {
        width: 100%;
      }
    }

    @media (min-width: ${theme.screen.sm}) {
      flex-direction: row;
      justify-content: space-between;
      max-width: ${theme.screen.md};
    }
  `
);
