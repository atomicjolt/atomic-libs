import React, { useEffect, useState } from "react";
import { JsonForms } from "@jsonforms/react";
import type { JsonSchema, UISchemaElement, ValidationMode } from "@jsonforms/core";
import type { ErrorObject } from "ajv";
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs/blocks";
import { atomicCells, atomicRenderers, devAtomicRenderers } from "../registry";
import { createAtomicAjv } from "../validation/createAtomicAjv";
import { atomicTranslateError } from "../validation/translateError";

const ajv = createAtomicAjv();
const renderers = [...atomicRenderers, ...devAtomicRenderers];
const i18n = { translateError: atomicTranslateError };

export interface JsonFormsStoryProps {
  /** JSON Schema for the data. */
  schema: JsonSchema;
  /** UI schema: which controls and layouts to render. */
  uischema?: UISchemaElement;
  /** Initial data. */
  data?: unknown;
  /** Render every control read-only. */
  readonly?: boolean;
  /** When validation errors are shown. */
  validationMode?: ValidationMode;
  /** Show the live data (and errors) under the form. */
  showData?: boolean;
}

/** A `<JsonForms>` wired up with the atomic renderers, for stories. */
export function JsonFormsStory(props: JsonFormsStoryProps) {
  const { schema, uischema, readonly, validationMode = "ValidateAndShow", showData = true } = props;
  const [data, setData] = useState(props.data ?? {});
  const [errors, setErrors] = useState<ErrorObject[]>([]);

  // Editing the `data` arg in the Controls panel resets the form.
  useEffect(() => setData(props.data ?? {}), [props.data]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2.4rem", maxWidth: "72rem" }}>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={renderers}
        cells={atomicCells}
        ajv={ajv}
        i18n={i18n}
        readonly={readonly}
        validationMode={validationMode}
        onChange={({ data, errors }) => {
          setData(data);
          setErrors(errors ?? []);
        }}
      />
      {showData && (
        <pre
          style={{
            margin: 0,
            padding: "1.2rem",
            fontSize: "1.2rem",
            borderRadius: "6px",
            background: "var(--background-clr-subtle)",
            color: "var(--text-clr)",
          }}
        >
          {JSON.stringify(
            {
              data,
              ...(validationMode !== "NoValidation" && errors.length > 0
                ? { errors: errors.map(({ instancePath, message }) => ({ instancePath, message })) }
                : {}),
            },
            null,
            2,
          )}
        </pre>
      )}
    </div>
  );
}

/** argTypes for the JsonFormsStory args, editable as JSON in Controls. */
export const jsonFormsArgTypes = {
  schema: { control: "object", description: "JSON Schema for the data." },
  uischema: { control: "object", description: "UI schema: which controls and layouts render, and their options." },
  data: { control: "object", description: "Initial data. Editing it resets the form." },
  readonly: { control: "boolean", description: "Render every control read-only." },
  validationMode: {
    control: "select",
    options: ["ValidateAndShow", "ValidateAndHide", "NoValidation"],
    description: "When validation errors are shown.",
  },
  showData: { control: "boolean", description: "Show the live data (and errors) under the form." },
} as const;

/** Docs page for JSON Forms stories: the Elements-specific blocks don't apply. */
export function JsonFormsDocsPage() {
  return (
    <>
      <Title />
      <Subtitle />
      <Description />
      <Primary />
      <Controls />
      <Stories />
    </>
  );
}

/** Shorthand for a Control element. */
export const control = (property: string, extra: Record<string, unknown> = {}) =>
  ({ type: "Control", scope: `#/properties/${property}`, ...extra }) as UISchemaElement;

/** Shorthand for a rule whose condition is "the field at `property` matches `schema`". */
export const when = (
  effect: "SHOW" | "HIDE" | "ENABLE" | "DISABLE",
  property: string,
  schema: JsonSchema,
  extra: Record<string, unknown> = {},
) => ({
  rule: { effect, condition: { scope: `#/properties/${property}`, schema, ...extra } },
});
