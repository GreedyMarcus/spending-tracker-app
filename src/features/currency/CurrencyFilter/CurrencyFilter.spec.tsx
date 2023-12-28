import { vi } from "vitest";
import { render, screen, userEvent } from "@utils/component.testing";
import { CurrencyFilterOption } from "../currency.types";
import { CurrencyFilter } from "./CurrencyFilter";

describe("CurrencyFilter", () => {
  it.each<[CurrencyFilterOption, string]>([
    [CurrencyFilterOption.ALL, "ALL"],
    [CurrencyFilterOption.HUF, "HUF"],
    [CurrencyFilterOption.USD, "USD"],
  ])("should filter by '%s' currency when '%s' option is clicked", async (option, name) => {
    const onChangeMock = vi.fn();

    render(<CurrencyFilter value={CurrencyFilterOption.ALL} onChange={onChangeMock} />);

    const button = screen.getByRole("button", { name });

    await userEvent.click(button);

    expect(onChangeMock).toHaveBeenCalledWith(option);
  });
});
