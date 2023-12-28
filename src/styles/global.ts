import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    html {
      font-size: 16px;
    }

    html,
    body {
      margin: 0;
      padding: 0;
      height: 100%;
      font-family: "Readex Pro";
      background-color: ${theme.colors.black[300]};
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }

    @media (min-width: ${theme.screen.xl}) {
      html {
        font-size: 20px;
      }
    }
  `
);
