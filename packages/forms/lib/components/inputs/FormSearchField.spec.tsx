import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import { Form } from "../Form";
import { renderForm } from "../../testing/renderForm";

describe("Form.SearchField", () => {
  test("submits the typed query", async () => {
    const { user, submitAndGetValues } = renderForm(
      <Form.SearchField name="query">
        <Form.Label>Search</Form.Label>
        <Form.Input />
      </Form.SearchField>
    );

    await user.type(screen.getByRole("searchbox", { name: "Search" }), "cats");

    expect(await submitAndGetValues()).toEqual({ query: "cats" });
  });

  test("marks the field invalid when required and empty", async () => {
    const { submit, onSubmit } = renderForm(
      <Form.SearchField name="query" isRequired="Enter a query">
        <Form.Label>Search</Form.Label>
        <Form.Input />
        <Form.ErrorMessage>Enter a query</Form.ErrorMessage>
      </Form.SearchField>
    );

    expect(screen.queryByText("Enter a query")).not.toBeInTheDocument();
    await submit();

    expect(await screen.findByText("Enter a query")).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
