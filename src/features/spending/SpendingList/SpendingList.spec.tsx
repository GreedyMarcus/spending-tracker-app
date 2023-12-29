import { vi } from "vitest";
import { CurrencyFilterOption } from "@features/currency/currency.types";
import { render, screen } from "@utils/component.testing";
import { SpendingOrderOption } from "../spending.types";
import { SpendingList } from "./SpendingList";
import * as useSpendingListData from "./useSpendingListData";
import { UseSpendingListDataFixture } from "./useSpendingListData.fixture";

vi.mock("@components/EmptyState", () => ({
  EmptyState: vi.fn().mockImplementation(() => <div data-testid="empty-state" />),
}));

vi.mock("@components/ErrorState", () => ({
  ErrorState: vi.fn().mockImplementation(() => <div data-testid="error-state" />),
}));

describe("SpendingList", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should display error state when spending list query returns error", async () => {
    vi.spyOn(useSpendingListData, "useSpendingListData").mockReturnValue(
      UseSpendingListDataFixture.createReturnValue({ isError: true })
    );

    render(<SpendingList order={SpendingOrderOption.SpentAtDesc} filter={CurrencyFilterOption.ALL} />);

    const errorState = screen.getByTestId("error-state");
    const emptyState = screen.queryByTestId("empty-state");
    const collectionList = screen.queryByRole("list", { name: "Spending list" });

    expect(errorState).toBeInTheDocument();
    expect(emptyState).not.toBeInTheDocument();
    expect(collectionList).not.toBeInTheDocument();
  });

  it("should display empty state when spending list is empty", async () => {
    vi.spyOn(useSpendingListData, "useSpendingListData").mockReturnValue(
      UseSpendingListDataFixture.createReturnValue({ data: [] })
    );

    render(<SpendingList order={SpendingOrderOption.SpentAtDesc} filter={CurrencyFilterOption.ALL} />);

    const emptyState = screen.getByTestId("empty-state");
    const errorState = screen.queryByTestId("error-state");
    const collectionList = screen.queryByRole("list", { name: "Collection list" });

    expect(emptyState).toBeInTheDocument();
    expect(errorState).not.toBeInTheDocument();
    expect(collectionList).not.toBeInTheDocument();
  });

  it("should display spending list", async () => {
    vi.spyOn(useSpendingListData, "useSpendingListData").mockReturnValue(
      UseSpendingListDataFixture.createReturnValue()
    );

    render(<SpendingList order={SpendingOrderOption.SpentAtDesc} filter={CurrencyFilterOption.ALL} />);

    const collectionList = screen.getByRole("list", { name: "Spending list" });
    const emptyState = screen.queryByTestId("empty-state");
    const errorState = screen.queryByTestId("error-state");

    expect(collectionList).toBeInTheDocument();
    expect(emptyState).not.toBeInTheDocument();
    expect(errorState).not.toBeInTheDocument();
  });
});
