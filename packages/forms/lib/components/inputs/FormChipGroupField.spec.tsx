import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import { ChipGroupField } from "@atomicjolt/atomic-elements";
import { Form } from "../Form";
import { renderForm } from "../../testing/renderForm";

function Tags(props: { isRequired?: string }) {
  return (
    <Form.ChipGroupField name="tags" isRequired={props.isRequired}>
      <Form.Label>Tags</Form.Label>
      <ChipGroupField.List>
        <Form.Item id="a">Alpha</Form.Item>
        <Form.Item id="b">Beta</Form.Item>
      </ChipGroupField.List>
      <Form.ErrorMessage />
    </Form.ChipGroupField>
  );
}

describe("Form.ChipGroupField", () => {
  test("submits the selected chips as an array", async () => {
    const { user, submitAndGetValues } = renderForm(<Tags />);

    await user.click(screen.getByRole("row", { name: "Beta" }));

    expect(await submitAndGetValues()).toEqual({ tags: ["b"] });
  });

  test("marks the field invalid when required and empty", async () => {
    const { submit, onSubmit } = renderForm(<Tags isRequired="Pick a tag" />);

    await submit();

    expect(await screen.findByText("Pick a tag")).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
