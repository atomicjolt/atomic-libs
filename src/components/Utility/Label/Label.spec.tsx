import React from "react";
import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import Label from ".";

test("matches snapshot", () => {
  const result = render(<Label htmlFor="id">Label Content</Label>);
  expect(result.asFragment()).toMatchSnapshot();
});
