import { vi } from "vitest";
import { render, screen, userEvent } from "@utils/component.testing";
import { SpendingOrderOption } from "../spending.types";
import { SpendingOrderSelector } from "./SpendingOrderSelector";

describe("SpendingOrderSelector", () => {
  it.each<[SpendingOrderOption, string]>([
    [SpendingOrderOption.AmountAsc, "Sort by Amount ascending"],
    [SpendingOrderOption.AmountDesc, "Sort by Amount descending"],
    [SpendingOrderOption.SpentAtAsc, "Sort by Date ascending"],
    [SpendingOrderOption.SpentAtDesc, "Sort by Date descending"],
  ])("should select '%s' ordering when '%s' option is clicked", async (ordering, label) => {
    const onChangeMock = vi.fn();

    render(<SpendingOrderSelector value={SpendingOrderOption.SpentAtDesc} onChange={onChangeMock} />);

    const button = screen.getByRole("button", { name: "Sort by Date descending" });

    await userEvent.click(button);

    const item = await screen.findByRole("menuitem", { name: label });

    await userEvent.click(item);

    expect(onChangeMock).toHaveBeenCalledWith(ordering);
  });
});
