import { Currency } from "./currency.types";

export const CurrencyFormatter = {
  format(amount: number, currency: Currency): string {
    switch (currency) {
      case Currency.HUF:
        return `${amount.toLocaleString("en-US", { maximumFractionDigits: 0 })}Ft`;
      case Currency.USD:
        return amount.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 2,
        });
    }
  },
} as const;
