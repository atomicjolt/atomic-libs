import React from "react";
import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { LoadingStatus } from ".";

describe("LoadingStatus", () => {
  test("matches loading snapshot", () => {
    const result = render(<LoadingStatus isLoading />);
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("matches error snapshot", () => {
    const result = render(<LoadingStatus error="An error occurred" />);
    expect(result.asFragment()).toMatchSnapshot();
  });
});
