import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import { Button, ListBox, Popover } from "@atomicjolt/atomic-elements";
import { Form } from "../Form";
import { renderForm } from "../../testing/renderForm";

function Toppings(props: { isRequired?: string }) {
  return (
    <Form.MultiSelectField name="toppings" isRequired={props.isRequired}>
      <Form.Label>Toppings</Form.Label>
      <Button variant="dropdown">Choose toppings</Button>
      <Popover>
        <ListBox>
          <Form.Item id="cheese">Cheese</Form.Item>
          <Form.Item id="olives">Olives</Form.Item>
          <Form.Item id="peppers">Peppers</Form.Item>
        </ListBox>
      </Popover>
      <Form.ErrorMessage>Pick a topping</Form.ErrorMessage>
    </Form.MultiSelectField>
  );
}

describe("Form.MultiSelectField", () => {
  test("submits the selected keys as an array", async () => {
    const { user, submitAndGetValues } = renderForm(<Toppings />);

    await user.click(screen.getByRole("button", { name: /Toppings/ }));
    await user.click(await screen.findByRole("option", { name: "Cheese" }));
    await user.click(screen.getByRole("option", { name: "Peppers" }));
    await user.keyboard("{Escape}");

    expect(await submitAndGetValues()).toEqual({
      toppings: ["cheese", "peppers"],
    });
  });

  test("uses the default value", async () => {
    const { submitAndGetValues } = renderForm(<Toppings />, {
      toppings: ["olives"],
    });

    expect(await submitAndGetValues()).toEqual({ toppings: ["olives"] });
  });

  test("marks the field invalid when required and empty", async () => {
    const { submit, onSubmit } = renderForm(
      <Toppings isRequired="Pick a topping" />
    );

    await submit();

    expect(await screen.findByText("Pick a topping")).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
