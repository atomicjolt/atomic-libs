import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import { ListBox, Popover } from "@atomicjolt/atomic-elements";
import { Form } from "../Form";
import { renderForm } from "../../testing/renderForm";

function Fruit(props: { isRequired?: string; allowsCustomValue?: boolean }) {
  return (
    <Form.ComboBoxField
      name="fruit"
      isRequired={props.isRequired}
      allowsCustomValue={props.allowsCustomValue}
    >
      <Form.Label>Fruit</Form.Label>
      <Form.Input />
      <Popover>
        <ListBox>
          <Form.Item id="apple">Apple</Form.Item>
          <Form.Item id="banana">Banana</Form.Item>
          <Form.Item id="cherry">Cherry</Form.Item>
        </ListBox>
      </Popover>
      <Form.ErrorMessage>Pick a fruit</Form.ErrorMessage>
    </Form.ComboBoxField>
  );
}

describe("Form.ComboBoxField", () => {
  test("submits the selected key", async () => {
    const { user, submitAndGetValues } = renderForm(<Fruit />);

    await user.type(screen.getByRole("combobox", { name: "Fruit" }), "ban");
    await user.click(await screen.findByRole("option", { name: "Banana" }));

    expect(await submitAndGetValues()).toEqual({ fruit: "banana" });
  });

  test("submits the typed text when custom values are allowed", async () => {
    const { user, submitAndGetValues } = renderForm(<Fruit allowsCustomValue />);

    await user.type(screen.getByRole("combobox", { name: "Fruit" }), "Kiwi");

    expect(await submitAndGetValues()).toEqual({ fruit: "Kiwi" });
  });

  test("marks the field invalid when required and empty", async () => {
    const { submit, onSubmit } = renderForm(
      <Fruit isRequired="Pick a fruit" />
    );

    await submit();

    expect(await screen.findByText("Pick a fruit")).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
