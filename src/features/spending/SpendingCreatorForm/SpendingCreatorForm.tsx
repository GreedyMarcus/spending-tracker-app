import { Controller } from "react-hook-form";
import { CurrencySelector } from "@features/currency/CurrencySelector";
import { Currency } from "@features/currency/currency.types";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Stack } from "@components/Stack";
import { useSmartForm } from "@hooks/useSmartForm";
import { CreateSpendingSchema } from "../spending.schema";
import * as S from "./SpendingCreatorForm.styles";
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
    <S.Container>
      <S.InputContainer>
        <Input type="text" placeholder="Description" disabled={isPending} {...descriptionInput} />
      </S.InputContainer>
      <S.InputContainer>
        <Input type="number" placeholder="Amount" disabled={isPending} {...amountInput} />
      </S.InputContainer>
      <Stack spacing={0.75} justifyContent="flex-end" fullWidth>
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
    </S.Container>
  );
}
