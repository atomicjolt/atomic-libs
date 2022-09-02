import React from "react";
import { render, screen } from "@testing-library/react";
import Textarea from ".";

it("matches snapshot", () => {
  const result = render(
    <Textarea value="" onChange={() => {}} label="label" />
  );
  expect(result.asFragment()).toMatchSnapshot();
});
