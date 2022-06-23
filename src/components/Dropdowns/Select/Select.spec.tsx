import React from "react";
import { render } from "@testing-library/react";
import Select from ".";

it("matches snapshot", () => {
  const result = render(
    <Select value="none" label="Label" onSelect={() => {}}>
      <option value="none">- Select an option -</option>
      <option value="value1">Option 1</option>
      <option value="value2">Option 2</option>
    </Select>
  );
  expect(result.asFragment()).toMatchSnapshot();
});
