import { Currency, CurrencyFilterOption } from "./currency.types";

export const CurrencyFilterOptionMapper = {
  toCurrency(option: CurrencyFilterOption): Currency | undefined {
    switch (option) {
      case CurrencyFilterOption.ALL:
        return undefined;
      case CurrencyFilterOption.HUF:
        return Currency.HUF;
      case CurrencyFilterOption.USD:
        return Currency.USD;
    }
  },
} as const;
