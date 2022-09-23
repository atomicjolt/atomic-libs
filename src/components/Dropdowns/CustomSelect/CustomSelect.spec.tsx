import React from "react";
import { render } from "@testing-library/react";
import CustomSelect from ".";
import { Option } from "../Option";

describe("matches snapshots", () => {
  const shared = {
    label: "Custom dropdown label",
    value: "opt1",
    onChange: () => {},
  };

  it("matches default variant", () => {
    const result = render(
      <CustomSelect {...shared}>
        <Option value="opt1">Option 1</Option>
        <Option value="opt2">Option 2</Option>
      </CustomSelect>
    );

    expect(result.asFragment()).toMatchSnapshot();
  });

  it("matches floating variant", () => {
    const result = render(
      <CustomSelect variant="floating" {...shared}>
        <Option value="opt1">Option 1</Option>
        <Option value="opt2">Option 2</Option>
      </CustomSelect>
    );

    expect(result.asFragment()).toMatchSnapshot();
  });
});
