import { render } from "@testing-library/react";
import { JsonForms } from "@jsonforms/react";
import type { JsonFormsInitStateProps } from "@jsonforms/react";
import type { JsonSchema, UISchemaElement } from "@jsonforms/core";
import { vi, type Mock } from "vitest";
import { atomicCells, atomicRenderers } from "../registry";
import { createAtomicAjv } from "../validation/createAtomicAjv";
import { atomicTranslateError } from "../validation/translateError";

const ajv = createAtomicAjv();

export interface RenderFormOptions
  extends Partial<Omit<JsonFormsInitStateProps, "schema" | "uischema">> {
  uischema?: UISchemaElement;
}

/**
 * Renders a real `<JsonForms>` with the atomic renderers. Errors are shown by
 * default. `latestData()` returns the data from the most recent change.
 */
export function renderForm(
  schema: JsonSchema,
  { uischema, data = {}, ...props }: RenderFormOptions = {},
) {
  const onChange: Mock = vi.fn();

  const result = render(
    <JsonForms
      schema={schema}
      uischema={uischema}
      data={data}
      renderers={atomicRenderers}
      cells={atomicCells}
      ajv={ajv}
      i18n={{ translateError: atomicTranslateError }}
      validationMode="ValidateAndShow"
      onChange={onChange}
      {...props}
    />,
  );

  return {
    ...result,
    onChange,
    latestData: () => onChange.mock.lastCall?.[0].data,
    latestErrors: () => onChange.mock.lastCall?.[0].errors ?? [],
  };
}

/** A one-control uischema for `property`. */
export function controlFor(property: string, options?: Record<string, any>) {
  return {
    type: "Control",
    scope: `#/properties/${property}`,
    ...(options && { options }),
  } as UISchemaElement;
}
