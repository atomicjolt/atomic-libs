import React from "react";
import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import BlankModal from ".";

describe("matches snapshots", () => {
  test("is not visible", () => {
    const result = render(<BlankModal open={false}>Click Me</BlankModal>);
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("is visible", () => {
    const result = render(<BlankModal open={false}>Click Me</BlankModal>);
    expect(result.asFragment()).toMatchSnapshot();
  });
});
