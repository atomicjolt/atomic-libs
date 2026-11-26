import { describe, expect, it } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { controlFor, renderForm } from "../../testing/renderForm";

const schema = {
  type: "object",
  properties: { name: { type: "string", title: "Name", description: "Your name" } },
} as const;

describe("AtomicTextControl", () => {
  it("renders a labelled text input with its value and description", () => {
    renderForm(schema, { uischema: controlFor("name"), data: { name: "Ada" } });

    const input = screen.getByRole("textbox", { name: "Name" });
    expect(input).toHaveValue("Ada");
    expect(input.tagName).toBe("INPUT");
    expect(screen.getByText("Your name")).toBeInTheDocument();
  });

  it("stores what the user types", async () => {
    const form = renderForm(schema, { uischema: controlFor("name") });

    await userEvent.type(screen.getByRole("textbox", { name: "Name" }), "Ada");

    await waitFor(() => expect(form.latestData()).toEqual({ name: "Ada" }));
  });

  it("stores undefined when the field is cleared", async () => {
    const form = renderForm(schema, { uischema: controlFor("name"), data: { name: "Ada" } });

    await userEvent.clear(screen.getByRole("textbox", { name: "Name" }));

    await waitFor(() => expect(form.latestData()).toEqual({ name: undefined }));
  });

  it("renders a textarea for options.multi", () => {
    renderForm(schema, { uischema: controlFor("name", { multi: true }) });

    expect(screen.getByRole("textbox", { name: "Name" }).tagName).toBe("TEXTAREA");
  });

  it("is read-only, not disabled, in a readonly form", () => {
    renderForm(schema, { uischema: controlFor("name"), data: { name: "Ada" }, readonly: true });

    const input = screen.getByRole("textbox", { name: "Name" });
    expect(input).toHaveAttribute("readonly");
    expect(input).not.toBeDisabled();
  });

  it("shows a translated error when invalid", () => {
    renderForm(
      { ...schema, required: ["name"] },
      { uischema: controlFor("name") },
    );

    expect(screen.getByRole("textbox", { name: "Name" })).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByText("Required")).toBeInTheDocument();
  });

  it("hides errors in ValidateAndHide mode", () => {
    renderForm(
      { ...schema, required: ["name"] },
      { uischema: controlFor("name"), validationMode: "ValidateAndHide" },
    );

    expect(screen.queryByText("Required")).not.toBeInTheDocument();
  });

  it("passes uischema options.props through to the field", () => {
    renderForm(schema, {
      uischema: controlFor("name", { props: { placeholder: "e.g. Ada" } }),
    });

    expect(screen.getByRole("textbox", { name: "Name" })).toHaveAttribute(
      "placeholder",
      "e.g. Ada",
    );
  });
});
