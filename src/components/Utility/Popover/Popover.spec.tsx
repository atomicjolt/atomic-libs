import React from "react";
import { render } from "@testing-library/react";
import PopOver from ".";

describe("matches snapshot", () => {
  it("matches snapshot 1", () => {
    const result = render(<PopOver show={false}>Child</PopOver>);
    expect(result.asFragment()).toMatchSnapshot();
  });

  it("matches snapshot 1", () => {
    const result = render(<PopOver show={true}>Child</PopOver>);
    expect(result.asFragment()).toMatchSnapshot();
  });
});
