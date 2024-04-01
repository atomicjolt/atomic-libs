import React from "react";
import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { Select } from ".";

test("matches snapshot", () => {
  const result = render(
    <Select value="none" label="Label" onChange={() => {}}>
      <option value="none">- Select an option -</option>
      <option value="value1">option 1</option>
      <option value="value2">option 2</option>
    </Select>
  );
  expect(result.asFragment()).toMatchSnapshot();
});
