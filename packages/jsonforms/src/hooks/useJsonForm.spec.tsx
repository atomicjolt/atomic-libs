import { describe, expect, it, vi } from "vitest";
import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { JsonForms } from "@jsonforms/react";
import type { JsonSchema, UISchemaElement } from "@jsonforms/core";
import type { ErrorObject } from "ajv";
import { useJsonForm, UseJsonFormOptions, UseJsonFormResult } from "./useJsonForm";
import { fieldError } from "../validation/fieldError";

interface Data {
  name?: string;
  email?: string;
}

const schema: JsonSchema = {
  type: "object",
  required: ["name"],
  properties: {
    name: { type: "string", title: "Name" },
    email: { type: "string", title: "Email" },
  },
};

const uischema = {
  type: "VerticalLayout",
  elements: [
    { type: "Control", scope: "#/properties/name" },
    { type: "Control", scope: "#/properties/email" },
  ],
} as UISchemaElement;

function setup(options: Partial<UseJsonFormOptions<Data>> = {}) {
  const onSubmit = vi.fn();
  let form!: UseJsonFormResult<Data>;

  function Harness(props: Partial<UseJsonFormOptions<Data>>) {
    form = useJsonForm<Data>({ schema, uischema, data: {}, onSubmit, ...options, ...props });
    return <JsonForms {...form.props} />;
  }

  const result = render(<Harness />);
  return {
    onSubmit,
    form: () => form,
    rerender: (props: Partial<UseJsonFormOptions<Data>>) =>
      result.rerender(<Harness {...props} />),
  };
}

const nameInput = () => screen.getByRole("textbox", { name: /Name/ });

describe("useJsonForm", () => {
  it("hides errors until a submit is attempted", async () => {
    const { form, onSubmit } = setup();

    expect(form().isValid).toBe(false);
    expect(screen.queryByText("Required")).not.toBeInTheDocument();

    act(() => form().submit());

    expect(onSubmit).not.toHaveBeenCalled();
    expect(await screen.findByText("Required")).toBeInTheDocument();
  });

  it("submits the data when valid", async () => {
    const { form, onSubmit } = setup();

    await userEvent.type(nameInput(), "Ada");
    await waitFor(() => expect(form().isValid).toBe(true));

    act(() => form().submit());

    expect(onSubmit).toHaveBeenCalledWith({ name: "Ada" });
  });

  it("tracks dirty state and resets to the initial data", async () => {
    const { form } = setup({ data: { name: "Ada" } });

    expect(form().isDirty).toBe(false);
    await userEvent.type(nameInput(), "!");
    await waitFor(() => expect(form().isDirty).toBe(true));

    act(() => form().reset());

    expect(nameInput()).toHaveValue("Ada");
    await waitFor(() => expect(form().isDirty).toBe(false));
  });

  it("hides errors again after reset", async () => {
    const { form } = setup();

    act(() => form().submit());
    expect(await screen.findByText("Required")).toBeInTheDocument();

    act(() => form().reset());

    expect(screen.queryByText("Required")).not.toBeInTheDocument();
  });

  it("includes errors from validate", async () => {
    const validate = (data: Data) =>
      data.email && !data.email.includes("@") ? [fieldError("email", "Not an email")] : [];
    const { form, onSubmit } = setup({ data: { name: "Ada" }, validate });

    await userEvent.type(screen.getByRole("textbox", { name: "Email" }), "nope");
    await waitFor(() => expect(form().isValid).toBe(false));
    act(() => form().submit());

    expect(onSubmit).not.toHaveBeenCalled();
    expect(await screen.findByText("Not an email")).toBeInTheDocument();
  });

  it("shows server errors until the field changes", async () => {
    const { form, rerender } = setup({ data: { name: "Ada" } });
    const serverErrors: ErrorObject[] = [fieldError("name", "Already taken")];

    rerender({ serverErrors });
    act(() => form().submit());

    expect(await screen.findByText("Already taken")).toBeInTheDocument();
    expect(form().isValid).toBe(false);

    await userEvent.type(nameInput(), "2");

    await waitFor(() => expect(form().isValid).toBe(true));
    expect(screen.queryByText("Already taken")).not.toBeInTheDocument();
  });
});
