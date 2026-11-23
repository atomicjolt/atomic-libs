import { describe, expect, it } from "vitest";
import type {
  JsonFormsRendererRegistryEntry,
  JsonSchema,
  UISchemaElement,
} from "@jsonforms/core";
import { atomicRenderers, devAtomicRenderers } from "./registry";
import { AtomicTextControl } from "./controls";
import {
  AtomicGroupLayout,
  AtomicHorizontalLayout,
  AtomicLabelRenderer,
  AtomicVerticalLayout,
} from "./layouts";
import { AtomicFallbackRenderer } from "./dev/AtomicFallbackRenderer";

/** The renderer JSON Forms would pick: the highest-ranked applicable entry. */
function winner(
  renderers: JsonFormsRendererRegistryEntry[],
  uischema: UISchemaElement,
  schema: JsonSchema,
) {
  const context = { rootSchema: schema, config: {} };
  const ranked = renderers
    .map((entry) => ({ entry, rank: entry.tester(uischema, schema, context) }))
    .filter(({ rank }) => rank >= 0)
    .sort((a, b) => b.rank - a.rank);
  return ranked[0]?.entry.renderer;
}

const control = (schema: JsonSchema, options?: object) => ({
  uischema: { type: "Control", scope: "#/properties/field", options } as UISchemaElement,
  schema: { type: "object", properties: { field: schema } } as JsonSchema,
});

describe("renderer selection", () => {
  it.each([
    ["string", control({ type: "string" }), AtomicTextControl],
    ["string + multi", control({ type: "string" }, { multi: true }), AtomicTextControl],
  ])("%s → expected control", (_, { uischema, schema }, expected) => {
    expect(winner(atomicRenderers, uischema, schema)).toBe(expected);
  });

  it.each([
    ["VerticalLayout", AtomicVerticalLayout],
    ["HorizontalLayout", AtomicHorizontalLayout],
    ["Group", AtomicGroupLayout],
    ["Label", AtomicLabelRenderer],
  ])("%s → expected layout", (type, expected) => {
    const uischema = { type, elements: [] } as UISchemaElement;
    expect(winner(atomicRenderers, uischema, {})).toBe(expected);
  });

  it("falls back only when nothing else matches", () => {
    const all = [...atomicRenderers, ...devAtomicRenderers];
    const { uischema, schema } = control({ type: "string" });

    expect(winner(all, uischema, schema)).toBe(AtomicTextControl);
    expect(
      winner(all, { type: "Categorization" } as UISchemaElement, {}),
    ).toBe(AtomicFallbackRenderer);
  });
});
