import React from "react";
import { render } from "@testing-library/react";
import Label from ".";

it("matches snapshot", () => {
  const result = render(<Label htmlFor="id">Label Content</Label>);
  expect(result.asFragment()).toMatchSnapshot();
});
