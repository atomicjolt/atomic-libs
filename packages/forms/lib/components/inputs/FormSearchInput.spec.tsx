import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import { Form } from "../Form";
import { renderForm } from "../../testing/renderForm";

describe("Form.SearchInput", () => {
  test("submits the typed query", async () => {
    const { user, submitAndGetValues } = renderForm(
      <Form.SearchInput name="query" label="Search" />
    );

    await user.type(screen.getByRole("searchbox", { name: "Search" }), "cats");

    expect(await submitAndGetValues()).toEqual({ query: "cats" });
  });

  test("uses the default value", async () => {
    const { submitAndGetValues } = renderForm(
      <Form.SearchInput name="query" label="Search" />,
      { query: "dogs" }
    );

    expect(screen.getByRole("searchbox", { name: "Search" })).toHaveValue(
      "dogs"
    );
    expect(await submitAndGetValues()).toEqual({ query: "dogs" });
  });

  test("shows the required error", async () => {
    const { submit, onSubmit } = renderForm(
      <Form.SearchInput name="query" label="Search" isRequired="Enter a query" />
    );

    await submit();

    expect(await screen.findByText("Enter a query")).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
