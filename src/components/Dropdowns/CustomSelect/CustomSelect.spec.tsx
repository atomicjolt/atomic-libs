import React from "react";
import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import CustomSelect from ".";
import Option from "../Option";

describe("matches snapshots", () => {
  const shared = {
    label: "Custom dropdown label",
    value: "opt1",
    onChange: () => {},
  };

  test("matches default variant", () => {
    const result = render(
      <CustomSelect {...shared}>
        <Option value="opt1">Option 1</Option>
        <Option value="opt2">Option 2</Option>
      </CustomSelect>
    );

    expect(result.asFragment()).toMatchSnapshot();
  });

  test("matches multi-select enabled", () => {
    const result = render(
      <CustomSelect {...shared} value={["opt1", "opt2"]}>
        <Option value="opt1">Option 1</Option>
        <Option value="opt2">Option 2</Option>
      </CustomSelect>
    );

    expect(result.asFragment()).toMatchSnapshot();
  });

  test("matches search enabled", () => {
    const result = render(
      <CustomSelect {...shared} searchable>
        <Option value="opt1">Option 1</Option>
        <Option value="opt2">Option 2</Option>
      </CustomSelect>
    );

    expect(result.asFragment()).toMatchSnapshot();
  });

  test("matches floating variant", () => {
    const result = render(
      <CustomSelect variant="floating" {...shared}>
        <Option value="opt1">Option 1</Option>
        <Option value="opt2">Option 2</Option>
      </CustomSelect>
    );

    expect(result.asFragment()).toMatchSnapshot();
  });
});
