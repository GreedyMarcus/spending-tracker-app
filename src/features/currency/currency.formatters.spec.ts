import { CurrencyFormatter } from "./currency.formatters";
import { Currency } from "./currency.types";

describe("Currency Formatters", () => {
  describe("CurrencyFormatter", () => {
    it.each<[number, Currency, string]>([
      [1000, Currency.HUF, "1000Ft"],
      [1000.5, Currency.HUF, "1001Ft"],
      [10, Currency.USD, "$10.00"],
      [10.5, Currency.USD, "$10.50"],
    ])("should format '%s %s' as '%s'", async (amount, currency, expectedFormat) => {
      expect(CurrencyFormatter.format(amount, currency)).toEqual(expectedFormat);
    });
  });
});
