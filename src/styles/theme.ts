import { ColorOption, ColorRange, ColorVariant, DefaultTheme } from "styled-components";

export const theme: Readonly<DefaultTheme> = {
  screen: {
    sm: "600px",
    md: "900px",
    lg: "1200px",
    xl: "1600px",
  },
  colors: {
    black: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },
    primary: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
    },
    error: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
    },
    success: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
    },
  },
  text: {
    primary: "1rem",
    secondary: "0.875rem",
  },
  shape: {
    borderRadius: "0.75rem",
  },
  shadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  zIndex: {
    overlay: 10,
    menu: 20,
    tooltip: 30,
  },
};

export function parseColor(option: ColorOption): string | undefined {
  if (option?.includes(".")) {
    const [variant, range] = option.split(".");
    return theme.colors[variant as ColorVariant]?.[parseInt(range) as ColorRange];
  }
}
