import React from "react";
import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import PopOver from ".";

describe("matches snapshot", () => {
  test("matches snapshot 1", () => {
    const result = render(<PopOver show={false}>Child</PopOver>);
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("matches snapshot 1", () => {
    const result = render(<PopOver show={true}>Child</PopOver>);
    expect(result.asFragment()).toMatchSnapshot();
  });
});
