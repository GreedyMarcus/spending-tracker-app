import styled, { css } from "styled-components";

export const Component = styled.input(
  ({ theme }) => css`
    outline: 0.0625rem solid transparent;
    border: 0.0625rem solid ${theme.colors.black[300]};
    border-radius: ${theme.shape.borderRadius};
    background-color: white;
    box-shadow: ${theme.shadows};
    padding: 0.75rem 1rem;
    color: ${theme.colors.black[900]};
    width: 100%;
    font-family: "Readex Pro";
    font-size: ${theme.text.primary};
    transition-property: outline-color, border-color;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
    cursor: text;

    &::placeholder {
      color: ${theme.colors.black[400]};
    }

    &:hover {
      border-color: ${theme.colors.black[400]};
    }

    &:focus {
      outline-color: ${theme.colors.primary[500]};
      border-color: ${theme.colors.primary[500]};
    }

    &:disabled {
      border-color: ${theme.colors.black[400]};
      background-color: ${theme.colors.black[200]};
      color: ${theme.colors.black[400]};
      cursor: not-allowed;

      &::placeholder {
        color: ${theme.colors.black[300]};
      }
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type="number"] {
      -moz-appearance: textfield;
      appearance: textfield;
    }
  `
);
