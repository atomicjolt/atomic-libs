import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import { TextAreaInput } from ".";

test("matches snapshot", () => {
  const result = render(
    <TextAreaInput value="" onChange={() => {}} label="label" />
  );
  expect(result.asFragment()).toMatchSnapshot();
});
