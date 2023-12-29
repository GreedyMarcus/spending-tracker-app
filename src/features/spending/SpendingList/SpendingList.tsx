import { CurrencyFilterOptionMapper } from "@features/currency/currency.mappers";
import { CurrencyFilterOption } from "@features/currency/currency.types";
import { EmptyState } from "@components/EmptyState";
import { ErrorState } from "@components/ErrorState";
import { List } from "@components/List";
import { LoadingContainer } from "@components/LoadingContainer";
import { SpendingListItem } from "../SpendingListItem/SpendingListItem";
import { SpendingOrderOption } from "../spending.types";
import { useSpendingListData } from "./useSpendingListData";

export type SpendingListProps = {
  order: SpendingOrderOption;
  filter: CurrencyFilterOption;
};

export function SpendingList({ order, filter }: SpendingListProps) {
  const { isPending, isError, data } = useSpendingListData(order, CurrencyFilterOptionMapper.toCurrency(filter));

  return (
    <LoadingContainer loading={isPending} loadingKey={`${order}-${filter}`}>
      {isError ? (
        <ErrorState />
      ) : (
        <>
          {!data?.length ? (
            <EmptyState resource="spendings" />
          ) : (
            <List aria-label="Spending list">
              {data.map((spending) => (
                <SpendingListItem
                  key={spending.id}
                  description={spending.description}
                  amount={spending.amount}
                  currency={spending.currency}
                  spentAt={new Date(spending.spent_at)}
                />
              ))}
            </List>
          )}
        </>
      )}
    </LoadingContainer>
  );
}
