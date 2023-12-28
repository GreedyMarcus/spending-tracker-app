import { SpendingOrderOption } from "./spending.types";

export const SpendingOrderOptionMapper = {
  toLabel(option: SpendingOrderOption): string {
    switch (option) {
      case SpendingOrderOption.AmountAsc:
        return "Sort by Amount ascending";
      case SpendingOrderOption.AmountDesc:
        return "Sort by Amount descending";
      case SpendingOrderOption.SpentAtAsc:
        return "Sort by Date ascending";
      case SpendingOrderOption.SpentAtDesc:
        return "Sort by Date descending";
    }
  },
} as const;
