import React from "react";
import { render } from "@testing-library/react";
import TextInputFloating from ".";

it("matches snapshot", () => {
  const result = render(
    <TextInputFloating />
  );
  expect(result.asFragment()).toMatchSnapshot();
});
