import React from "react";
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RadioGroup, Radio } from ".";

const Wrapper = (value: string) => (
  <RadioGroup value={value} name="radiogroup" label="Label" onChange={() => {}}>
    <Radio value="opt1">Option 1</Radio>
    <Radio value="opt2">Option 2</Radio>
    <Radio value="opt3">Option 3</Radio>
  </RadioGroup>
);

test("matches snapshot", () => {
  const result = render(Wrapper("opt1"));
  expect(result.asFragment()).toMatchSnapshot();
});

test("swaps between options", () => {
  const { rerender } = render(Wrapper("opt1"));

  expect(screen.getByDisplayValue<HTMLInputElement>("opt1").checked).toBe(true);
  expect(screen.getByDisplayValue<HTMLInputElement>("opt2").checked).toBe(
    false
  );

  rerender(Wrapper("opt2"));
  expect(screen.getByDisplayValue<HTMLInputElement>("opt1").checked).toBe(
    false
  );
  expect(screen.getByDisplayValue<HTMLInputElement>("opt2").checked).toBe(true);
});

test("each radio is named by its label text", () => {
  render(Wrapper("opt1"));
  expect(screen.getByRole("radio", { name: "Option 2" })).toBeTruthy();
});

test("a radio is described by its message", () => {
  render(
    <RadioGroup label="Label">
      <Radio value="a" message="More info">
        A
      </Radio>
    </RadioGroup>
  );
  expect(screen.getByRole("radio", { name: "A", description: "More info" })).toBeTruthy();
});
