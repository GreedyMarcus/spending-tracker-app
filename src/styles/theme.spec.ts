import { ColorOption } from "styled-components";
import { parseColor, theme } from "./theme";

describe("Theme", () => {
  describe("parseColor", () => {
    it.each<[string | undefined, ColorOption]>([
      [undefined, undefined as unknown as ColorOption],
      [undefined, null as unknown as ColorOption],
      [undefined, "invalid" as ColorOption],
      [undefined, "invalid.invalid" as ColorOption],
      [undefined, "primary.invalid" as ColorOption],
      [theme.colors.primary[500], "primary.500" as ColorOption],
    ])("should return %s when the color options is %s", (expected, value) => {
      expect(parseColor(value)).toEqual(expected);
    });
  });
});
