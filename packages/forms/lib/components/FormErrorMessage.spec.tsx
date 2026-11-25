import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import { Form } from "./Form";
import { renderForm } from "../testing/renderForm";

describe("Form.ErrorMessage", () => {
  test("shows the field's validation message in a composed TextField", async () => {
    const { submit } = renderForm(
      <Form.TextField name="title" isRequired="Title is required">
        <Form.Label>Title</Form.Label>
        <Form.Input />
        <Form.ErrorMessage />
      </Form.TextField>
    );

    expect(screen.queryByText("Title is required")).not.toBeInTheDocument();
    await submit();

    const error = await screen.findByText("Title is required");
    // Still wired to the field: the input is described by it.
    expect(screen.getByRole("textbox", { name: "Title" })).toHaveAccessibleDescription(
      "Title is required"
    );
    expect(error).toBeInTheDocument();
  });

  test("shows the field's validation message in a composed NumberField", async () => {
    const { submit } = renderForm(
      <Form.NumberField name="age" isRequired="Age is required">
        <Form.Label>Age</Form.Label>
        <Form.Input />
        <Form.ErrorMessage />
      </Form.NumberField>
    );

    await submit();

    expect(await screen.findByText("Age is required")).toBeInTheDocument();
  });

  test("explicit children win over the validation message", async () => {
    const { submit } = renderForm(
      <Form.TextField name="title" isRequired="Title is required">
        <Form.Label>Title</Form.Label>
        <Form.Input />
        <Form.ErrorMessage>Custom text</Form.ErrorMessage>
      </Form.TextField>
    );

    await submit();

    expect(await screen.findByText("Custom text")).toBeInTheDocument();
    expect(screen.queryByText("Title is required")).not.toBeInTheDocument();
  });

  test("outside a form field it renders like atomic-elements' ErrorMessage", () => {
    renderForm(<Form.ErrorMessage isInvalid>Standalone</Form.ErrorMessage>);
    expect(screen.getByText("Standalone")).toBeInTheDocument();
  });
});

describe("field names", () => {
  test("inputs get the react-hook-form field name", () => {
    renderForm(
      <>
        <Form.TextInput name="email" label="Email" />
        <Form.CheckBox name="terms">Terms</Form.CheckBox>
        <Form.TextField name="title">
          <Form.Label>Title</Form.Label>
          <Form.Input />
        </Form.TextField>
      </>
    );

    expect(screen.getByRole("textbox", { name: "Email" })).toHaveAttribute("name", "email");
    expect(screen.getByRole("checkbox", { name: "Terms" })).toHaveAttribute("name", "terms");
    expect(screen.getByRole("textbox", { name: "Title" })).toHaveAttribute("name", "title");
  });
});
