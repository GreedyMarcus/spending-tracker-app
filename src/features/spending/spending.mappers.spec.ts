import { SpendingOrderOptionMapper } from "./spending.mappers";
import { SpendingOrderOption } from "./spending.types";

describe("Spending Mappers", () => {
  describe("SpendingOrderOptionMapper", () => {
    it.each<[SpendingOrderOption, string]>([
      [SpendingOrderOption.AmountAsc, "Sort by Amount ascending"],
      [SpendingOrderOption.AmountDesc, "Sort by Amount descending"],
      [SpendingOrderOption.SpentAtAsc, "Sort by Date ascending"],
      [SpendingOrderOption.SpentAtDesc, "Sort by Date descending"],
    ])("should map '%s' to '%s'", async (option, expectedLabel) => {
      expect(SpendingOrderOptionMapper.toLabel(option)).toEqual(expectedLabel);
    });
  });
});
