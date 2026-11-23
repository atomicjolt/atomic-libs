import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import type { UISchemaElement } from "@jsonforms/core";
import { controlFor, renderForm } from "../testing/renderForm";

const schema = {
  type: "object",
  properties: {
    first: { type: "string", title: "First" },
    last: { type: "string", title: "Last" },
  },
} as const;

const layout = (type: string, extra: Record<string, unknown> = {}) =>
  ({ type, elements: [controlFor("first"), controlFor("last")], ...extra }) as UISchemaElement;

describe("layouts", () => {
  it.each(["VerticalLayout", "HorizontalLayout"])("%s renders its children", (type) => {
    renderForm(schema, { uischema: layout(type) });

    expect(screen.getByRole("textbox", { name: "First" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Last" })).toBeInTheDocument();
  });

  it("Group renders its label as a heading", () => {
    renderForm(schema, { uischema: layout("Group", { label: "Person" }) });

    expect(screen.getByRole("heading", { name: "Person" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "First" })).toBeInTheDocument();
  });

  it("Label renders its text", () => {
    renderForm(schema, {
      uischema: { type: "Label", text: "Hello" } as UISchemaElement,
    });

    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("hides a layout when a rule hides it", () => {
    renderForm(schema, {
      uischema: layout("VerticalLayout", {
        rule: {
          effect: "HIDE",
          condition: { scope: "#/properties/first", schema: { const: "hide" } },
        },
      }),
      data: { first: "hide" },
    });

    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
  });
});
