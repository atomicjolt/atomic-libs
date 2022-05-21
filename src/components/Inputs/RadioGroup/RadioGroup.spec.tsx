import { render, screen } from "@testing-library/react";
import RadioGroup, { Radio } from ".";

const Wrapper = (value: string) => (
  <RadioGroup value={value} name="radiogroup" label="Label" onChange={() => {}}>
    <Radio value="opt1">Option 1</Radio>
    <Radio value="opt2">Option 2</Radio>
    <Radio value="opt3">Option 3</Radio>
  </RadioGroup>
);

it("matches snapshot", () => {
  const result = render(Wrapper("opt1"));
  expect(result.asFragment()).toMatchSnapshot();
});

it("swaps between options", () => {
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
