import { describe, expect, it } from "vitest";
import type {
  JsonFormsRendererRegistryEntry,
  JsonSchema,
  UISchemaElement,
} from "@jsonforms/core";
import { atomicRenderers, devAtomicRenderers } from "./registry";
import * as C from "./controls";
import { AtomicTextControl } from "./controls";
import {
  AtomicCardLayout,
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
    ["number", control({ type: "number" }), C.AtomicNumberControl],
    ["integer", control({ type: "integer" }), C.AtomicNumberControl],
    ["boolean", control({ type: "boolean" }), C.AtomicCheckBoxControl],
    ["boolean + toggle", control({ type: "boolean" }, { toggle: true }), C.AtomicToggleControl],
    ["enum", control({ type: "string", enum: ["a"] }), C.AtomicEnumSelectControl],
    ["enum + radio", control({ type: "string", enum: ["a"] }, { format: "radio" }), C.AtomicEnumRadioControl],
    ["enum + autocomplete", control({ type: "string", enum: ["a"] }, { autocomplete: true }), C.AtomicEnumComboBoxControl],
    ["oneOf", control({ oneOf: [{ const: "a" }] }), C.AtomicOneOfSelectControl],
    ["oneOf + radio", control({ oneOf: [{ const: "a" }] }, { format: "radio" }), C.AtomicOneOfRadioControl],
    ["oneOf + autocomplete", control({ oneOf: [{ const: "a" }] }, { autocomplete: true }), C.AtomicOneOfComboBoxControl],
    [
      "unique array of enum",
      control({ type: "array", uniqueItems: true, items: { type: "string", enum: ["a"] } }),
      C.AtomicMultiSelectControl,
    ],
    [
      "unique array of oneOf",
      control({ type: "array", uniqueItems: true, items: { oneOf: [{ const: 1 }] } }),
      C.AtomicMultiSelectControl,
    ],
    ["date", control({ type: "string", format: "date" }), C.AtomicDateControl],
    ["time", control({ type: "string", format: "time" }), C.AtomicTimeControl],
    ["date-time", control({ type: "string", format: "date-time" }), C.AtomicDateTimeControl],
  ])("%s → expected control", (_, { uischema, schema }, expected) => {
    expect(winner(atomicRenderers, uischema, schema)).toBe(expected);
  });

  it.each([
    ["VerticalLayout", AtomicVerticalLayout],
    ["HorizontalLayout", AtomicHorizontalLayout],
    ["Group", AtomicGroupLayout],
    ["Card", AtomicCardLayout],
    ["Label", AtomicLabelRenderer],
  ])("%s → expected layout", (type, expected) => {
    const uischema = { type, elements: [] } as UISchemaElement;
    expect(winner(atomicRenderers, uischema, {})).toBe(expected);
  });

  it("doesn't claim arrays that aren't unique enums", () => {
    const { uischema, schema } = control({ type: "array", items: { type: "string", enum: ["a"] } });
    expect(winner(atomicRenderers, uischema, schema)).toBeUndefined();
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
