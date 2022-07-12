import React from "react";
import { render } from "@testing-library/react";
import CustomDropdown from ".";

it("matches snapshot", () => {
  const result = render(
    <CustomDropdown
      label="Custom dropdown label"
      value="opt1"
      onChange={() => {}}
    >
      <CustomDropdown.Option value="opt1">Option 1</CustomDropdown.Option>
      <CustomDropdown.Option value="opt2">Option 2</CustomDropdown.Option>
    </CustomDropdown>
  );

  expect(result.asFragment()).toMatchSnapshot();
});
