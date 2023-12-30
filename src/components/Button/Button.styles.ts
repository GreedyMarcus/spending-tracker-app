import styled, { css } from "styled-components";
import { ButtonColorVariant } from "./Button.types";

type ComponentProps = {
  $color?: ButtonColorVariant;
};

export const Component = styled.button<ComponentProps>(
  ({ theme, $color = "primary" }) => css`
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.shape.borderRadius};
    box-shadow: ${theme.shadow};
    padding: 0.675rem 1rem;
    width: fit-content;
    height: fit-content;
    font-size: ${theme.text.primary};
    font-weight: 600;
    transition-property: transform, background-color, color;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
    user-select: none;
    cursor: pointer;

    &:active:enabled {
      transform: scale(0.95);
    }

    &:focus-visible:enabled {
      outline: 0.125rem solid transparent;
      outline-offset: 0.125rem;
    }

    &:disabled {
      background-color: ${theme.colors.black[100]};
      color: ${theme.colors.black[400]};
      cursor: not-allowed;
    }

    ${() => {
      switch ($color) {
        case "light":
          return css`
            background-color: white;
            color: ${theme.colors.black[800]};

            &:hover:enabled {
              background-color: ${theme.colors.black[100]};
              color: ${theme.colors.black[900]};
            }

            &:focus-visible:enabled {
              outline-color: ${theme.colors.black[100]};
            }
          `;
        case "primary":
          return css`
            background-color: ${theme.colors.primary[500]};
            color: ${theme.colors.black[50]};

            &:hover:enabled {
              background-color: ${theme.colors.primary[600]};
              color: ${theme.colors.black[200]};
            }

            &:focus-visible:enabled {
              outline-color: ${theme.colors.primary[500]};
            }
          `;
        case "error":
          return css`
            background-color: ${theme.colors.error[500]};
            color: ${theme.colors.black[50]};

            &:hover:enabled {
              background-color: ${theme.colors.error[600]};
              color: ${theme.colors.black[100]};
            }

            &:focus-visible:enabled {
              outline-color: ${theme.colors.error[500]};
            }
          `;
        case "success":
          return css`
            background-color: ${theme.colors.success[500]};
            color: ${theme.colors.black[50]};

            &:hover:enabled {
              background-color: ${theme.colors.success[600]};
              color: ${theme.colors.black[100]};
            }

            &:focus-visible:enabled {
              outline-color: ${theme.colors.success[500]};
            }
          `;
      }
    }}
  `
);
