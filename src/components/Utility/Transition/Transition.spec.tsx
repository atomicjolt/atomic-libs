import React from "react";
import { render, screen } from "@testing-library/react";
import Transition, { TransitionRef } from ".";

it("matches snapshot", () => {
  const result = render(<Transition from="1" to="2" render={(v) => v} />);
  expect(result.asFragment()).toMatchSnapshot();
});
