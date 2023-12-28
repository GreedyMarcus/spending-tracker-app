import { SpendingDateFormatter } from "./spending.formatters";

describe("Spending Formatters", () => {
  describe("SpendingDateFormatter", () => {
    it.each<[Date, string]>([
      [new Date("2023-01-01T08:00:00.000Z"), "9:00 AM - January 01, 2023"],
      [new Date("2023-02-10T10:00:00.000Z"), "11:00 AM - February 10, 2023"],
      [new Date("2023-03-20T14:00:00.000Z"), "3:00 PM - March 20, 2023"],
      [new Date("2023-04-30T21:00:00.000Z"), "11:00 PM - April 30, 2023"],
    ])("should format '%s' as '%s'", async (date, expectedFormat) => {
      expect(SpendingDateFormatter.format(date)).toEqual(expectedFormat);
    });
  });
});
