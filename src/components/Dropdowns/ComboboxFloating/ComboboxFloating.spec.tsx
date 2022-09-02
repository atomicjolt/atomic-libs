import React from "react";
import { render } from "@testing-library/react";
import ComboboxFloating from ".";

it("matches snapshot", () => {
  const result = render(
    <ComboboxFloating />
  );
  expect(result.asFragment()).toMatchSnapshot();
});
