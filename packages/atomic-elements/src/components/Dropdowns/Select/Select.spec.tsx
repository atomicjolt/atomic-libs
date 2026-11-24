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

describe("native select state", () => {
  const renderSelect = (props: Partial<React.ComponentProps<typeof Select>>) =>
    render(
      <Select label="Label" {...props}>
        <option value="1">One</option>
      </Select>
    ).container.querySelector("select")!;

  test("disables the native select", () => {
    expect(renderSelect({ isDisabled: true }).disabled).toBe(true);
  });

  test("marks the native select as required", () => {
    expect(renderSelect({ isRequired: true }).required).toBe(true);
  });

  test("marks the native select as invalid", () => {
    expect(renderSelect({ isInvalid: true }).getAttribute("aria-invalid")).toBe(
      "true"
    );
  });

  test("doesn't put loading props on the native select", () => {
    const select = renderSelect({ isLoading: false, loadingLabel: "Loading" });
    expect(select.hasAttribute("isloading")).toBe(false);
    expect(select.hasAttribute("loadinglabel")).toBe(false);
  });
});

describe("Select error message", () => {
  test("shows the error when invalid", () => {
    const { getByText } = render(
      <Select label="Label" isInvalid error="Pick an option">
        <option value="1">One</option>
      </Select>
    );
    expect(getByText("Pick an option")).toBeTruthy();
  });
});
