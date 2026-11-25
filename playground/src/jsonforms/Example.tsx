import React, { useState } from "react";
import { JsonForms } from "@jsonforms/react";
import type { JsonSchema, UISchemaElement, ValidationMode } from "@jsonforms/core";
import type { ErrorObject } from "ajv";
import { Heading } from "@atomicjolt/atomic-elements";
import {
  atomicCells,
  atomicRenderers,
  atomicTranslateError,
  createAtomicAjv,
  devAtomicRenderers,
} from "@atomicjolt/jsonforms";
import { Json } from "../components/Demo";

const ajv = createAtomicAjv();
const renderers = [...atomicRenderers, ...devAtomicRenderers];
const i18n = { translateError: atomicTranslateError };

export interface ExampleProps {
  schema: JsonSchema;
  uischema: object;
  data?: object;
  validationMode?: ValidationMode;
  /** Show the schema next to the UI schema (when the schema matters, e.g. if/then). */
  showSchema?: boolean;
  /** Show the live data and errors under the form. */
  showState?: boolean;
}

/** A live form beside the JSON that produces it. */
export function Example(props: ExampleProps) {
  const { schema, uischema, validationMode = "NoValidation", showSchema, showState } = props;
  const [data, setData] = useState(props.data ?? {});
  const [errors, setErrors] = useState<ErrorObject[]>([]);

  return (
    <div className="pg-split pg-stretch">
      <div className="pg-example__form">
        <JsonForms
          schema={schema}
          uischema={uischema as UISchemaElement}
          data={data}
          renderers={renderers}
          cells={atomicCells}
          ajv={ajv}
          i18n={i18n}
          validationMode={validationMode}
          onChange={({ data, errors }) => {
            setData(data);
            setErrors(errors ?? []);
          }}
        />
        {showState && (
          <div className="pg-example__state">
            <Heading as="h3" $size="3">
              data
            </Heading>
            <Json value={data} />
            {validationMode !== "NoValidation" && (
              <>
                <Heading as="h3" $size="3">
                  errors
                </Heading>
                <Json value={errors.map(({ instancePath, message }) => ({ instancePath, message }))} />
              </>
            )}
          </div>
        )}
      </div>
      <div>
        {showSchema && (
          <>
            <Heading as="h3" $size="3">
              schema
            </Heading>
            <Json value={schema} />
            <Heading as="h3" $size="3">
              uischema
            </Heading>
          </>
        )}
        <Json value={uischema} />
      </div>
    </div>
  );
}
