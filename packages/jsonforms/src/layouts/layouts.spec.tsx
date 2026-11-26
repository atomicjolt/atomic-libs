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

  it("Group renders its label as an h2 heading by default", () => {
    renderForm(schema, { uischema: layout("Group", { label: "Person" }) });

    expect(screen.getByRole("heading", { name: "Person", level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "First" })).toBeInTheDocument();
  });

  it("Group uses options.headingLevel", () => {
    renderForm(schema, {
      uischema: layout("Group", { label: "Person", options: { headingLevel: "h4" } }),
    });

    expect(screen.getByRole("heading", { name: "Person", level: 4 })).toBeInTheDocument();
  });

  it("Group ignores an invalid options.headingLevel", () => {
    renderForm(schema, {
      uischema: layout("Group", { label: "Person", options: { headingLevel: "h9" } }),
    });

    expect(screen.getByRole("heading", { name: "Person", level: 2 })).toBeInTheDocument();
  });

  it("Group uses options.headingSize", () => {
    const { unmount } = renderForm(schema, { uischema: layout("Group", { label: "Default" }) });
    const defaultClass = screen.getByRole("heading", { name: "Default" }).className;
    unmount();

    renderForm(schema, {
      uischema: layout("Group", { label: "Big", options: { headingSize: "8" } }),
    });

    expect(screen.getByRole("heading", { name: "Big" }).className).not.toBe(defaultClass);
  });

  it("Label renders its text", () => {
    renderForm(schema, {
      uischema: { type: "Label", text: "Hello" } as UISchemaElement,
    });

    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  describe("Label options", () => {
    const label = (options?: object) =>
      ({ type: "Label", text: "Hello", ...(options && { options }) }) as UISchemaElement;

    /** Class of a Label rendered with `options`, to compare styles. */
    const classFor = (options?: object) => {
      const { unmount } = renderForm(schema, { uischema: label(options) });
      const className = screen.getByText("Hello").className;
      unmount();
      return className;
    };

    it.each([
      ["size", { size: "6" }],
      ["weight", { weight: "bold" }],
      ["color", { color: "red" }],
      ["align", { align: "center" }],
      ["wrap", { wrap: "balanced" }],
    ])("applies %s", (_, options) => {
      expect(classFor(options)).not.toBe(classFor());
    });

    it("renders as a paragraph with as: p", () => {
      renderForm(schema, { uischema: label({ as: "p" }) });
      expect(screen.getByText("Hello").tagName).toBe("P");
    });

    it("renders a block element by default, and for an unsupported as", () => {
      renderForm(schema, { uischema: label({ as: "label" }) });
      expect(screen.getByText("Hello").tagName).toBe("DIV");
    });

    it("passes options.props through to Text", () => {
      renderForm(schema, { uischema: label({ props: { id: "intro", $truncate: true } }) });
      expect(screen.getByText("Hello")).toHaveAttribute("id", "intro");
    });
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
