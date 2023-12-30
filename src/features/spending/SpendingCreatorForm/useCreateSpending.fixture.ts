import { vi } from "vitest";
import { Fixture } from "@utils/fixture";
import { useCreateSpending } from "./useCreateSpending";

type UseCreateSpendingReturnType = ReturnType<typeof useCreateSpending>;

export const UseCreateSpendingFixture = {
  createReturnValue: Fixture.object<UseCreateSpendingReturnType>({
    isPending: () => false,
    isSuccess: () => false,
    createSpending: vi.fn,
  }),
} as const;
