import { useQuery } from "@tanstack/react-query";
import { Currency } from "@features/currency/currency.types";
import { getSpendings } from "../spending.api";
import { SpendingOrderOption } from "../spending.types";

export const SPENDING_LIST_QUERY_KEY = "SPENDING_LIST";

export function useSpendingListData(order: SpendingOrderOption, currency?: Currency) {
  const { isPending, isError, data } = useQuery({
    queryKey: [SPENDING_LIST_QUERY_KEY, order, currency],
    queryFn: () => getSpendings(order, currency),
  });

  return { isPending, isError, data };
}
