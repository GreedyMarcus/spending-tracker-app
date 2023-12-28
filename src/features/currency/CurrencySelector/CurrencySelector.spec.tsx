import { vi } from "vitest";
import { render, screen, userEvent } from "@utils/component.testing";
import { Currency } from "../currency.types";
import { CurrencySelector } from "./CurrencySelector";

describe("CurrencySelector", () => {
  it.each<[Currency, string]>([
    [Currency.HUF, "HUF"],
    [Currency.USD, "USD"],
  ])("should select '%s' currency when '%s' option is clicked", async (currency, name) => {
    const onChangeMock = vi.fn();

    render(<CurrencySelector value={Currency.HUF} onChange={onChangeMock} />);

    const button = screen.getByRole("button", { name: Currency.HUF });

    await userEvent.click(button);

    const item = await screen.findByRole("menuitem", { name });

    await userEvent.click(item);

    expect(onChangeMock).toHaveBeenCalledWith(currency);
  });
});
