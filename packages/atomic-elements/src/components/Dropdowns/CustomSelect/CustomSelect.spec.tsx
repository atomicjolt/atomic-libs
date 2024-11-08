import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { CustomSelect } from ".";
import { Item } from "../../Collection";

describe("matches snapshots", () => {
  const shared = {
    label: "Custom dropdown label",
    value: "opt1",
    onChange: () => {},
  };

  test("matches default variant", () => {
    const result = render(
      <CustomSelect {...shared}>
        <Item key="opt1">Item 1</Item>
        <Item key="opt2">Item 2</Item>
      </CustomSelect>
    );

    expect(result.asFragment()).toMatchSnapshot();
  });

  // test("matches multi-select enabled", () => {
  //   const result = render(
  //     <CustomSelect {...shared} value={["opt1", "opt2"]}>
  //       <Item key="opt1">Item 1</Item>
  //       <Item key="opt2">Item 2</Item>
  //     </CustomSelect>
  //   );

  //   expect(result.asFragment()).toMatchSnapshot();
  // });

  // TODO: Searching has not been reimplemented
  // test("matches search enabled", () => {
  //   const result = render(
  //     <CustomSelect {...shared} searchable>
  //       <Item key="opt1">Item 1</Item>
  //       <Item key="opt2">Item 2</Item>
  //     </CustomSelect>
  //   );

  //   expect(result.asFragment()).toMatchSnapshot();
  // });

  test("matches floating variant", () => {
    const result = render(
      <CustomSelect variant="floating" {...shared}>
        <Item key="opt1">Item 1</Item>
        <Item key="opt2">Item 2</Item>
      </CustomSelect>
    );

    expect(result.asFragment()).toMatchSnapshot();
  });
});
