import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import type { UISchemaElement } from "@jsonforms/core";
import { renderForm } from "../testing/renderForm";
import { atomicRenderers, devAtomicRenderers } from "../registry";

describe("AtomicFallbackRenderer", () => {
  it("describes the element no renderer matched", () => {
    renderForm(
      { type: "object", properties: { tags: { type: "array" } } },
      {
        uischema: { type: "Control", scope: "#/properties/tags" } as UISchemaElement,
        renderers: [...atomicRenderers, ...devAtomicRenderers],
      },
    );

    const note = screen.getByRole("note");
    expect(note).toHaveTextContent("No renderer for Control at #/properties/tags");
    expect(note).toHaveTextContent("schema type: array");
  });
});
