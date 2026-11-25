import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { Label } from ".";

describe("Label $paddingBottom", () => {
  test("defaults to 5px", () => {
    const { getByText } = render(<Label>Name</Label>);
    expect(getComputedStyle(getByText("Name")).paddingBottom).toBe("5px");
  });

  test("applies a custom value", () => {
    const { getByText } = render(<Label $paddingBottom="12px">Name</Label>);
    expect(getComputedStyle(getByText("Name")).paddingBottom).toBe("12px");
  });
});
