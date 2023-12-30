import { Button } from "@components/Button";
import { Stack } from "@components/Stack";
import { CurrencyFilterOption } from "../currency.types";

export type CurrencyFilterProps = {
  value: CurrencyFilterOption;
  onChange: (value: CurrencyFilterOption) => void;
};

export function CurrencyFilter({ value, onChange }: CurrencyFilterProps) {
  return (
    <Stack spacing={0.75}>
      {Object.values(CurrencyFilterOption).map((option) => (
        <Button key={option} color={value === option ? "primary" : "light"} onClick={() => onChange(option)}>
          {option}
        </Button>
      ))}
    </Stack>
  );
}
