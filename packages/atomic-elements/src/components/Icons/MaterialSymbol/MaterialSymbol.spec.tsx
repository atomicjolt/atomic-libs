import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MaterialSymbol } from "./MaterialSymbol.component";

describe("MaterialSymbol", () => {
  it("renders correctly", () => {
    const { container } = render(<MaterialSymbol symbol="home" />);
    expect(container).toMatchSnapshot();
  });

  it("should not be focusable by default", () => {
    render(<MaterialSymbol symbol="home" />);
    const icon = screen.getByText("home");
    expect(icon.tabIndex).toBe(-1);
  });

  it("should be focusable when isFocusable is true", () => {
    render(<MaterialSymbol symbol="home" isFocusable />);
    const icon = screen.getByText("home");
    expect(icon.tabIndex).toBe(0);
  });
});
