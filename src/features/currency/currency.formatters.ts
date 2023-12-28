import { Currency } from "./currency.types";

export const CurrencyFormatter = {
  format(amount: number, currency: Currency): string {
    switch (currency) {
      case Currency.HUF:
        return `${amount.toFixed(0)}Ft`;
      case Currency.USD:
        return `$${amount.toFixed(2)}`;
    }
  },
} as const;
