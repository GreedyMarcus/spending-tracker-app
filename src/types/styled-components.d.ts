import "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    screen: Screen;
    colors: Colors;
    text: Text;
    shape: Shape;
    shadow: string;
    zIndex: ZIndex;
  }

  type Screen = Record<ScreenSize, string>;
  type ScreenSize = "sm" | "md" | "lg" | "xl";

  type Colors = Record<ColorVariant, Color>;
  type Color = Record<ColorRange, string>;
  type ColorOption = `${ColorVariant}.${ColorRange}`;
  type ColorVariant = "black" | "primary" | "error" | "success";
  type ColorRange = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

  type Text = Record<TextVariant, string>;
  type TextVariant = "primary" | "secondary";
  type TextComponent = "div" | "span";

  type Shape = {
    borderRadius: string;
  };

  type ZIndex = Record<ZIndexElement, number>;
  type ZIndexElement = "overlay" | "menu" | "tooltip";
}
