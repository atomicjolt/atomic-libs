import React from "react";
import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import IconButton from ".";

test("matches snapshot", () => {
  const result = render(
    <IconButton ariaLabel="More Button" icon="more_vert" />
  );
  expect(result.asFragment()).toMatchSnapshot();
});
