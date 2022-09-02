import React from "react";
import { render } from "@testing-library/react";
import CustomDropdownFloating from ".";

it("matches snapshot", () => {
  const result = render(
    <CustomDropdownFloating />
  );
  expect(result.asFragment()).toMatchSnapshot();
});
