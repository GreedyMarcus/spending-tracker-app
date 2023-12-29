import { vi } from "vitest";
import { render, screen } from "@utils/component.testing";
import { LoadingContainer } from "./LoadingContainer";

vi.mock("@components/Spinner", () => ({
  Spinner: vi.fn().mockImplementation(() => <div data-testid="spinner" />),
}));

describe("LoadingContainer", () => {
  it("should display spinner when loading", async () => {
    render(<LoadingContainer loading>content</LoadingContainer>);

    const spinner = screen.getByTestId("spinner");
    const content = screen.queryByText("content");

    expect(spinner).toBeInTheDocument();
    expect(content).not.toBeInTheDocument();
  });

  it("should display content when not loading", async () => {
    render(<LoadingContainer loading={false}>content</LoadingContainer>);

    const content = screen.getByText("content");
    const spinner = screen.queryByTestId("spinner");

    expect(content).toBeInTheDocument();
    expect(spinner).not.toBeInTheDocument();
  });
});
