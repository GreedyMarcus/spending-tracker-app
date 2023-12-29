import { Currency } from "@features/currency/currency.types";

export type Spending = {
  id: number;
  description: string;
  amount: number;
  currency: Currency;
  spent_at: string;
};

export enum SpendingOrderOption {
  SpentAtAsc = "spent_at",
  SpentAtDesc = "-spent_at",
  AmountAsc = "amount",
  AmountDesc = "-amount",
}

export type CreateSpendingData = {
  description: string;
  amount: number;
  currency: Currency;
  spent_at: string;
};
