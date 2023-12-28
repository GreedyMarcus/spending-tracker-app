import { Mock, vi } from "vitest";
import { MenuItem } from "@components/MenuItem";
import { render, screen, userEvent } from "@utils/component.testing";
import { Menu } from "./Menu";

describe("Menu", () => {
  describe("Open State", () => {
    let onCloseMock: Mock;

    beforeEach(() => {
      onCloseMock = vi.fn();

      render(
        <Menu open anchorElement={null} onClose={onCloseMock}>
          <MenuItem>content</MenuItem>
        </Menu>
      );
    });

    it("should display menu item", () => {
      const item = screen.queryByRole("menuitem", { name: "content" });

      expect(item).toBeInTheDocument();
    });

    it("should call onClose when menu item is clicked", async () => {
      const item = await screen.findByRole("menuitem", { name: "content" });

      await userEvent.click(item);

      expect(onCloseMock).toHaveBeenCalled();
    });

    it("should call onClose when overlay is clicked", async () => {
      const overlay = await screen.findByTestId("overlay");

      await userEvent.click(overlay);

      expect(onCloseMock).toHaveBeenCalled();
    });

    it("should call onClose when escape key is pressed", async () => {
      await userEvent.type(document.body, "{esc}");

      expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
  });

  describe("Closed State", () => {
    let onCloseMock: Mock;

    beforeEach(() => {
      onCloseMock = vi.fn();

      render(
        <Menu open={false} anchorElement={null} onClose={onCloseMock}>
          <MenuItem>content</MenuItem>
        </Menu>
      );
    });

    it("should not display menu item", () => {
      const item = screen.queryByRole("menuitem", { name: "content" });

      expect(item).not.toBeInTheDocument();
    });

    it("should not call onClose when escape key is pressed", async () => {
      await userEvent.type(document.body, "{esc}");

      expect(onCloseMock).not.toHaveBeenCalled();
    });
  });
});
