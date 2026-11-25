import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import {
  Button,
  ListBox,
  Popover,
  SelectField,
} from "@atomicjolt/atomic-elements";
import { Form } from "../Form";
import { renderForm } from "../../testing/renderForm";

function Color(props: { isRequired?: string }) {
  return (
    <Form.SelectField name="color" isRequired={props.isRequired}>
      <Form.Label>Color</Form.Label>
      <Button variant="dropdown">
        <SelectField.Value placeholder="Pick a color" />
      </Button>
      <Popover>
        <ListBox>
          <Form.Item id="red">Red</Form.Item>
          <Form.Item id="green">Green</Form.Item>
          <Form.Item id="blue">Blue</Form.Item>
        </ListBox>
      </Popover>
      <Form.ErrorMessage>Color is required</Form.ErrorMessage>
    </Form.SelectField>
  );
}

describe("Form.SelectField", () => {
  test("submits the selected key", async () => {
    const { user, submitAndGetValues } = renderForm(<Color />);

    await user.click(screen.getByRole("button", { name: /Color/ }));
    await user.click(await screen.findByRole("option", { name: "Green" }));

    expect(await submitAndGetValues()).toEqual({ color: "green" });
  });

  test("uses the default value", async () => {
    const { submitAndGetValues } = renderForm(<Color />, { color: "blue" });

    expect(screen.getByRole("button", { name: /Blue/ })).toBeInTheDocument();
    expect(await submitAndGetValues()).toEqual({ color: "blue" });
  });

  test("marks the field invalid when required and empty", async () => {
    const { submit, onSubmit } = renderForm(
      <Color isRequired="Color is required" />
    );

    await submit();

    expect(await screen.findByText("Color is required")).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
