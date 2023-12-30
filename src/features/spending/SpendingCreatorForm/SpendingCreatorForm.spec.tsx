import { vi } from "vitest";
import { Currency } from "@features/currency/currency.types";
import { render, screen, userEvent } from "@utils/component.testing";
import { SpendingCreatorForm } from "./SpendingCreatorForm";
import * as useCreateSpending from "./useCreateSpending";
import { UseCreateSpendingFixture } from "./useCreateSpending.fixture";

describe("SpendingCreatorForm", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should disable all inputs when spending is pending", () => {
    vi.spyOn(useCreateSpending, "useCreateSpending").mockReturnValue(
      UseCreateSpendingFixture.createReturnValue({ isPending: true })
    );

    render(<SpendingCreatorForm defaultCurrency={Currency.HUF} />);

    const descriptionInput = screen.getByPlaceholderText("Description");
    const amountInput = screen.getByPlaceholderText("Amount");
    const currencySelector = screen.getByRole("button", { name: Currency.HUF });
    const createButton = screen.getByRole("button", { name: "Save" });

    expect(descriptionInput).toBeDisabled();
    expect(amountInput).toBeDisabled();
    expect(currencySelector).toBeDisabled();
    expect(createButton).toBeDisabled();
  });

  it("should disable save button when cannot submit", async () => {
    vi.spyOn(useCreateSpending, "useCreateSpending").mockReturnValue(UseCreateSpendingFixture.createReturnValue());

    render(<SpendingCreatorForm defaultCurrency={Currency.HUF} />);

    const descriptionInput = screen.getByPlaceholderText("Description");
    const createButton = screen.getByRole("button", { name: "Save" });

    await userEvent.type(descriptionInput, "Test");
    expect(createButton).not.toBeDisabled();

    await userEvent.clear(descriptionInput);
    expect(createButton).toBeDisabled();
  });

  it("should display error message for empty input description input", async () => {
    vi.spyOn(useCreateSpending, "useCreateSpending").mockReturnValue(UseCreateSpendingFixture.createReturnValue());

    render(<SpendingCreatorForm defaultCurrency={Currency.HUF} />);

    const createButton = screen.getByRole("button", { name: "Save" });

    await userEvent.click(createButton);

    const emptyDescriptionError = screen.getByText("Description cannot be empty.");

    expect(emptyDescriptionError).toBeInTheDocument();
  });

  it.each<string>(["-", "--", "-1", "--1", "0", "0.0"])(
    "should display 'Amount must be greater than 0' error message for '%s' amount input",
    async (text) => {
      vi.spyOn(useCreateSpending, "useCreateSpending").mockReturnValue(UseCreateSpendingFixture.createReturnValue());

      render(<SpendingCreatorForm defaultCurrency={Currency.HUF} />);

      const amountInput = screen.getByPlaceholderText("Amount");
      const createButton = screen.getByRole("button", { name: "Save" });

      await userEvent.type(amountInput, text);
      await userEvent.click(createButton);

      const amountError = screen.getByText("Amount must be greater than 0.");

      expect(amountError).toBeInTheDocument();
    }
  );

  it.each<string>(["100.1", "100.01"])(
    "should display 'HUF currency does not support decimals' error message for '%s' amount input text when currency is set to HUF",
    async (text) => {
      vi.spyOn(useCreateSpending, "useCreateSpending").mockReturnValue(UseCreateSpendingFixture.createReturnValue());

      render(<SpendingCreatorForm defaultCurrency={Currency.HUF} />);

      const amountInput = screen.getByPlaceholderText("Amount");
      const createButton = screen.getByRole("button", { name: "Save" });

      await userEvent.type(amountInput, text);
      await userEvent.click(createButton);

      const amountError = screen.getByText("HUF currency does not support decimals.");

      expect(amountError).toBeInTheDocument();
    }
  );

  it.each<string>(["10.001", "10.0001"])(
    "should display 'Maximum precision is 2 decimal places' error message for '%s' amount input text when currency is set to USD",
    async (text) => {
      vi.spyOn(useCreateSpending, "useCreateSpending").mockReturnValue(UseCreateSpendingFixture.createReturnValue());

      render(<SpendingCreatorForm defaultCurrency={Currency.USD} />);

      const amountInput = screen.getByPlaceholderText("Amount");
      const createButton = screen.getByRole("button", { name: "Save" });

      await userEvent.type(amountInput, text);
      await userEvent.click(createButton);

      const amountError = screen.getByText("Maximum precision is 2 decimal places.");

      expect(amountError).toBeInTheDocument();
    }
  );
});
