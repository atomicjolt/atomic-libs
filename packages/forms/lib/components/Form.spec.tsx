import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import { Form } from "./Form";
import { renderForm } from "../testing/renderForm";

describe("Form", () => {
  test("renders the existing wrappers and submits their default values", async () => {
    const { submitAndGetValues } = renderForm(
      <>
        <Form.TextInput name="text" label="Text" />
        <Form.TextField name="textField">
          <Form.Label>Text field</Form.Label>
          <Form.Input />
        </Form.TextField>
        <Form.NumberInput name="number" label="Number" />
        <Form.NumberField name="numberField">
          <Form.Label>Number field</Form.Label>
          <Form.Input />
        </Form.NumberField>
        <Form.CheckBox name="check">Check</Form.CheckBox>
        <Form.TextAreaInput name="area" label="Area" />
        <Form.ToggleSwitch name="toggle">Toggle</Form.ToggleSwitch>
        <Form.Select name="select" label="Select">
          <option value="a">A</option>
          <option value="b">B</option>
        </Form.Select>
        <Form.CustomSelect name="custom" label="Custom select">
          <Form.Item id="x">X</Form.Item>
          <Form.Item id="y">Y</Form.Item>
        </Form.CustomSelect>
        <Form.RadioGroup name="radio" label="Radio">
          <Form.Radio value="r1">R1</Form.Radio>
          <Form.Radio value="r2">R2</Form.Radio>
        </Form.RadioGroup>
        <Form.ComboBox name="combo" label="Combo">
          <Form.Item id="c1">C1</Form.Item>
        </Form.ComboBox>
        <Form.MultiSelect name="multi" label="Multi">
          <Form.Item id="m1">M1</Form.Item>
          <Form.Item id="m2">M2</Form.Item>
        </Form.MultiSelect>
      </>,
      {
        text: "hello",
        textField: "world",
        number: 1,
        numberField: 2,
        check: true,
        area: "long",
        toggle: true,
        select: "b",
        custom: "y",
        radio: "r2",
        combo: "c1",
        multi: ["m1"],
      }
    );

    expect(screen.getByRole("textbox", { name: "Text" })).toHaveValue("hello");
    expect(screen.getByRole("textbox", { name: "Text field" })).toHaveValue(
      "world"
    );
    // atomic-elements' CheckBox and Radio inputs have no accessible name
    // (their text is a plain <span>), so they can't be found by name.
    expect(screen.getAllByRole("checkbox")[0]).toBeChecked();
    expect(screen.getAllByRole("radio")[1]).toBeChecked();

    expect(await submitAndGetValues()).toEqual({
      text: "hello",
      textField: "world",
      number: 1,
      numberField: 2,
      check: true,
      area: "long",
      toggle: true,
      select: "b",
      custom: "y",
      radio: "r2",
      combo: "c1",
      multi: ["m1"],
    });
  });
});
