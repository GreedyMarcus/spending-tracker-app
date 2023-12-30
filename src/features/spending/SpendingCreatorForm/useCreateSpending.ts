import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SPENDING_LIST_QUERY_KEY } from "../SpendingList/useSpendingListData";
import { createSpending } from "../spending.api";

export function useCreateSpending() {
  const queryClient = useQueryClient();

  const { isPending, isSuccess, mutate } = useMutation({
    mutationFn: createSpending,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [SPENDING_LIST_QUERY_KEY] });
    },
  });

  return { isPending, isSuccess, createSpending: mutate };
}
