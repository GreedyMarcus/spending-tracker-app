import { CurrencyFormatter } from "@features/currency/currency.formatters";
import { Currency } from "@features/currency/currency.types";
import { IconContainer } from "@components/IconContainer";
import { ListItem } from "@components/ListItem";
import { Stack } from "@components/Stack";
import { Text } from "@components/Text";
import DollarIcon from "@svgs/dollar-icon.svg?react";
import { SpendingDateFormatter } from "../spending.formatters";

export type SpendingListItemProps = {
  description: string;
  spentAt: Date;
  amount: number;
  currency: Currency;
};

export function SpendingListItem({ description, spentAt, amount, currency }: SpendingListItemProps) {
  return (
    <ListItem>
      <Stack alignItems="center" justifyContent="space-between" fullWidth>
        <Stack spacing={1.5}>
          <IconContainer color="primary.700" background="primary.200">
            <DollarIcon />
          </IconContainer>
          <Stack direction="column" spacing={0.125}>
            <Text variant="primary" bold>
              {description}
            </Text>
            <Text variant="secondary" color="black.400">
              {SpendingDateFormatter.format(spentAt)}
            </Text>
          </Stack>
        </Stack>
        <Text variant="primary" bold>
          {CurrencyFormatter.format(amount, currency)}
        </Text>
      </Stack>
    </ListItem>
  );
}
