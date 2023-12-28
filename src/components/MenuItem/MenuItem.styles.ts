import styled, { css } from "styled-components";
import { Button } from "@components/Button";

export const Component = styled(Button)(
  ({ theme }) => css`
    box-shadow: none;
    padding: 0.5rem 0.75rem;
    width: unset;

    &:focus-visible:enabled {
      outline: none;
    }

    &:hover:enabled,
    &:focus-visible:enabled {
      background-color: ${theme.colors.black[200]};
    }

    &:active:enabled {
      transform: none;
      background-color: ${theme.colors.black[300]};
    }
  `
);
