import type { ControlElement, JsonSchema, RankedTester } from "@jsonforms/core";
import { rankWith, uiTypeIs } from "@jsonforms/core";
import { DispatchCell, useJsonForms, withJsonFormsControlProps } from "@jsonforms/react";
import type { ControlProps } from "@jsonforms/core";
import { atomicRenderers } from "../registry";
import { controlFor, renderForm, RenderFormOptions } from "./renderForm";

/** Renders the cell JSON Forms picks for a control, the way a table would. */
function CellHarness(props: ControlProps) {
  // Like a table row: cells take the field's resolved schema and full path.
  const { uischema, schema, path, enabled } = props;
  const { cells } = useJsonForms();
  return <DispatchCell uischema={uischema} schema={schema} path={path} enabled={enabled} cells={cells} />;
}

const harnessTester: RankedTester = rankWith(100, uiTypeIs("Control"));
const harness = { tester: harnessTester, renderer: withJsonFormsControlProps(CellHarness) };

export function renderCell(
  schema: JsonSchema,
  property: string,
  options: RenderFormOptions & { uiOptions?: Record<string, any> } = {},
) {
  const { uiOptions, ...rest } = options;
  return renderForm(schema, {
    uischema: controlFor(property, uiOptions) as ControlElement,
    renderers: [...atomicRenderers, harness],
    ...rest,
  });
}
