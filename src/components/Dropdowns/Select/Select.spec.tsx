import React from "react";
import { render } from "@testing-library/react";
import Select from ".";
import Option from "../Option";

it("matches snapshot", () => {
  const result = render(
    <Select value="none" label="Label" onChange={() => {}}>
      <Option value="none">- Select an option -</Option>
      <Option value="value1">Option 1</Option>
      <Option value="value2">Option 2</Option>
    </Select>
  );
  expect(result.asFragment()).toMatchSnapshot();
});
