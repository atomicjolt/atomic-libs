import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import type { UISchemaElement } from "@jsonforms/core";
import { controlFor, renderForm } from "../testing/renderForm";

const schema = {
  type: "object",
  properties: {
    first: { type: "string", title: "First" },
    last: { type: "string", title: "Last" },
    hide: { type: "boolean", title: "Hide" },
  },
} as const;

const card = (extra: Record<string, unknown> = {}) =>
  ({
    type: "Card",
    elements: [controlFor("first"), controlFor("last")],
    ...extra,
  }) as UISchemaElement;

const panels = (container: HTMLElement) => container.querySelectorAll(".aje-card-panel");

describe("AtomicCardLayout", () => {
  it("renders its elements inside a card", () => {
    const { container } = renderForm(schema, { uischema: card() });

    expect(container.querySelector(".aje-card")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "First" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Last" })).toBeInTheDocument();
  });

  it("puts all elements in one panel by default", () => {
    const { container } = renderForm(schema, { uischema: card() });
    expect(panels(container)).toHaveLength(1);
  });

  it.each(["stack", "columns"])("gives each element its own panel for panels: %s", (mode) => {
    const { container } = renderForm(schema, { uischema: card({ options: { panels: mode } }) });
    expect(panels(container)).toHaveLength(2);
  });

  it("renders the label as an h2 heading by default", () => {
    renderForm(schema, { uischema: card({ label: "Name" }) });
    expect(screen.getByRole("heading", { name: "Name", level: 2 })).toBeInTheDocument();
  });

  it("uses options.headingLevel", () => {
    renderForm(schema, { uischema: card({ label: "Name", options: { headingLevel: "h4" } }) });
    expect(screen.getByRole("heading", { name: "Name", level: 4 })).toBeInTheDocument();
  });

  it("has no header without a label", () => {
    renderForm(schema, { uischema: card() });
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });

  it("is hidden by a rule", () => {
    const { container } = renderForm(schema, {
      uischema: card({
        rule: { effect: "HIDE", condition: { scope: "#/properties/hide", schema: { const: true } } },
      }),
      data: { hide: true },
    });
    expect(container.querySelector(".aje-card")).not.toBeInTheDocument();
  });
});
