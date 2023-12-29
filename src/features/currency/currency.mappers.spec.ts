import { CurrencyFilterOptionMapper } from "./currency.mappers";
import { Currency, CurrencyFilterOption } from "./currency.types";

describe("Currency Mappers", () => {
  describe("CurrencyFilterOptionMapper", () => {
    it.each<[CurrencyFilterOption, Currency | undefined]>([
      [CurrencyFilterOption.ALL, undefined],
      [CurrencyFilterOption.HUF, Currency.HUF],
      [CurrencyFilterOption.USD, Currency.USD],
    ])("should map '%s' to '%s'", async (option, expectedCurrency) => {
      expect(CurrencyFilterOptionMapper.toCurrency(option)).toEqual(expectedCurrency);
    });
  });
});
