import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FileInput } from ".";

describe("FileInput aria props", () => {
  test("labels the button, not the wrapper", () => {
    const { container } = render(<FileInput aria-label="Upload avatar" />);
    expect(screen.getByRole("button", { name: "Upload avatar" })).toBeTruthy();
    expect(container.firstElementChild!.hasAttribute("aria-label")).toBe(false);
  });

  test("describes the button with its message and error", () => {
    render(
      <FileInput
        label="Avatar"
        message="PNG or JPG"
        error="File is too large"
        isInvalid
        aria-describedby="extra-help"
      />
    );
    const button = screen.getByRole("button", { name: /Avatar/ });
    const ids = button.getAttribute("aria-describedby")!.split(" ");
    const text = ids
      .map((id) => document.getElementById(id)?.textContent ?? id)
      .join(" | ");
    expect(text).toContain("PNG or JPG");
    expect(text).toContain("File is too large");
    expect(ids).toContain("extra-help");
  });
});
