import { CurrencyFormatter } from "./currency.formatters";
import { Currency } from "./currency.types";

describe("Currency Formatters", () => {
  describe("CurrencyFormatter", () => {
    it.each<[number, Currency, string]>([
      [100, Currency.HUF, "100Ft"],
      [1000, Currency.HUF, "1,000Ft"],
      [1000.5, Currency.HUF, "1,001Ft"],
      [10000, Currency.HUF, "10,000Ft"],
      [100000, Currency.HUF, "100,000Ft"],
      [1000000, Currency.HUF, "1,000,000Ft"],
      [10, Currency.USD, "$10.00"],
      [10.5, Currency.USD, "$10.50"],
      [1000, Currency.USD, "$1,000.00"],
      [10000, Currency.USD, "$10,000.00"],
      [100000, Currency.USD, "$100,000.00"],
      [1000000, Currency.USD, "$1,000,000.00"],
    ])("should format '%s %s' as '%s'", async (amount, currency, expectedFormat) => {
      expect(CurrencyFormatter.format(amount, currency)).toEqual(expectedFormat);
    });
  });
});
