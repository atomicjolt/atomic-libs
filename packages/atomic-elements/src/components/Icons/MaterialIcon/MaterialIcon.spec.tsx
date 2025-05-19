import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MaterialIcon } from "./MaterialIcon.component";

describe("MaterialIcon", () => {
  it("renders correctly", () => {
    const { container } = render(<MaterialIcon icon="home" />);
    expect(container).toMatchSnapshot();
  });

  it("should not be focusable by default", () => {
    render(<MaterialIcon icon="home" />);
    const icon = screen.getByText("home");
    expect(icon.tabIndex).toBe(-1);
  });

  it("should be focusable when isFocusable is true", () => {
    render(<MaterialIcon icon="home" isFocusable />);
    const icon = screen.getByText("home");
    expect(icon.tabIndex).toBe(0);
  });
});
