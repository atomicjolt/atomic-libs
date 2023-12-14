import React from "react";
import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import LoadingStatus from ".";

test("matches snapshot", () => {
  const result = render(<LoadingStatus />);
  expect(result.asFragment()).toMatchSnapshot();
});
