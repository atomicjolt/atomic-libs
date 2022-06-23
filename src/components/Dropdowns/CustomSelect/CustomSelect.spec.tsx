import React from "react";
import { render } from "@testing-library/react";
import CustomSelect from ".";

it("matches snapshot", () => {
  const result = render(
    <CustomSelect
      label="Custom dropdown label"
      value="opt1"
      onChange={() => {}}
    >
      <CustomSelect.Item value="opt1">Option 1</CustomSelect.Item>
      <CustomSelect.Item value="opt2">Option 2</CustomSelect.Item>
    </CustomSelect>
  );

  expect(result.asFragment()).toMatchSnapshot();
});
