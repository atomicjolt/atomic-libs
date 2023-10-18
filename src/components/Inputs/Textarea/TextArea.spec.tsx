import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Textarea from ".";

test("matches snapshot", () => {
  const result = render(
    <Textarea value="" onChange={() => {}} label="label" />
  );
  expect(result.asFragment()).toMatchSnapshot();
});
