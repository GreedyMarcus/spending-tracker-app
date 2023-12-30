import { z } from "zod";
import { Currency } from "@features/currency/currency.types";

export const CreateSpendingSchema = z
  .object({
    description: z.string().trim().min(1, { message: "Description cannot be empty." }),
    amount: z.coerce.number().positive({ message: "Amount must be greater than 0." }),
    currency: z.enum([Currency.HUF, Currency.USD], {
      errorMap: () => ({
        message: `Currency must be on of the following values: ${Currency.HUF} or ${Currency.USD}.`,
      }),
    }),
  })
  .refine(
    ({ currency, amount }) => {
      if (currency !== Currency.HUF) {
        return true;
      }

      return Number.isInteger(amount);
    },
    { path: ["amount"], message: "HUF currency does not support decimals." }
  )
  .refine(
    ({ currency, amount }) => {
      if (currency !== Currency.USD || !amount.toString().includes(".")) {
        return true;
      }

      return amount.toString().split(".")[1].length <= 2;
    },
    { path: ["amount"], message: "Maximum precision is 2 decimal places." }
  );
