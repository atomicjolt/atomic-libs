import React from "react";
import { render } from "@testing-library/react";
import IconButton from ".";

it("matches snapshot", () => {
  const result = render(
    <IconButton ariaLabel="More Button" icon="more_vert" />
  );
  expect(result.asFragment()).toMatchSnapshot();
});
