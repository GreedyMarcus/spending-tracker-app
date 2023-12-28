import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@styles/global";
import { theme } from "@styles/theme";

function renderWithWrapper(component: ReactElement) {
  return render(component, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    ),
  });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { renderWithWrapper as render };
