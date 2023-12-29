import { Fixture } from "@utils/fixture";
import { SpendingFixture } from "../spending.fixture";
import { useSpendingListData } from "./useSpendingListData";

type UseSpendingListDataReturnType = ReturnType<typeof useSpendingListData>;

export const UseSpendingListDataFixture = {
  createReturnValue: Fixture.object<UseSpendingListDataReturnType>({
    isPending: () => false,
    isError: () => false,
    data: () => SpendingFixture.createSpendings(5),
  }),
} as const;
