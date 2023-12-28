import { vi } from "vitest";
import { CurrencyFormatter } from "@features/currency/currency.formatters";
import { Currency } from "@features/currency/currency.types";
import { render, screen } from "@utils/component.testing";
import { SpendingDateFormatter } from "../spending.formatters";
import { SpendingListItem } from "./SpendingListItem";

describe("SpendingListItem", () => {
  it("should render list item with formatted content", () => {
    vi.spyOn(SpendingDateFormatter, "format").mockReturnValue("FORMATTED_DATE");
    vi.spyOn(CurrencyFormatter, "format").mockReturnValue("FORMATTED_AMOUNT");

    render(
      <SpendingListItem description="Test" spentAt={new Date("2023-01-01")} amount={100} currency={Currency.HUF} />
    );

    const formattedDate = screen.getByText("FORMATTED_DATE");
    const formattedAmount = screen.getByText("FORMATTED_AMOUNT");

    expect(formattedDate).toBeInTheDocument();
    expect(formattedAmount).toBeInTheDocument();
  });
});
