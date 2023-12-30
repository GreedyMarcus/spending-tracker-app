import { Controller } from "react-hook-form";
import { CurrencySelector } from "@features/currency/CurrencySelector";
import { Currency } from "@features/currency/currency.types";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Stack } from "@components/Stack";
import { useSmartForm } from "@hooks/useSmartForm";
import { CreateSpendingSchema } from "../spending.schema";
import { useCreateSpending } from "./useCreateSpending";

export type SpendingCreatorFormProps = {
  defaultCurrency: Currency;
};

export function SpendingCreatorForm({ defaultCurrency }: SpendingCreatorFormProps) {
  const { isPending, createSpending } = useCreateSpending();

  const { control, canSubmit, register, handleSubmit } = useSmartForm(
    CreateSpendingSchema,
    (data) => createSpending({ ...data, spent_at: new Date().toISOString() }),
    { currency: defaultCurrency }
  );

  const descriptionInput = register({ name: "description" });
  const amountInput = register({ name: "amount" });

  return (
    <Stack spacing={1} fullWidth>
      <Input type="text" placeholder="Description" disabled={isPending} {...descriptionInput} />
      <Input type="number" placeholder="Amount" disabled={isPending} {...amountInput} />
      <Controller
        name="currency"
        control={control}
        render={({ field: { value, onChange } }) => (
          <CurrencySelector value={value} disabled={isPending} onChange={onChange} />
        )}
      />
      <Button color="success" disabled={isPending || !canSubmit} onClick={handleSubmit}>
        Save
      </Button>
    </Stack>
  );
}
