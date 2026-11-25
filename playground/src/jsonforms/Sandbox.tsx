import React, { useMemo, useState } from "react";
import { JsonForms } from "@jsonforms/react";
import type { JsonFormsCore } from "@jsonforms/core";
import { Flex, Heading } from "@atomicjolt/atomic-elements";
import {
  atomicCells,
  atomicRenderers,
  atomicTranslateError,
  createAtomicAjv,
  devAtomicRenderers,
} from "@atomicjolt/jsonforms";

const ajv = createAtomicAjv();
const renderers = [...atomicRenderers, ...devAtomicRenderers];
const i18n = { translateError: atomicTranslateError };

const initialSchema = {
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "Title" },
    notes: { type: "string", title: "Notes" },
    tags: { type: "array", items: { type: "string" } },
  },
};

const initialUiSchema = {
  type: "VerticalLayout",
  elements: [
    { type: "Control", scope: "#/properties/title" },
    { type: "Control", scope: "#/properties/notes", options: { multi: true } },
    { type: "Control", scope: "#/properties/tags" },
  ],
};

const pretty = (value: unknown) => JSON.stringify(value, null, 2);

/** Parses JSON text, keeping the last good value while the text is invalid. */
function useJsonText(initial: unknown) {
  const [text, setText] = useState(() => pretty(initial));
  const [value, setValue] = useState(initial);
  const [error, setError] = useState<string>();

  const onChange = (next: string) => {
    setText(next);
    try {
      setValue(JSON.parse(next));
      setError(undefined);
    } catch (e) {
      setError((e as Error).message);
    }
  };

  return { text, value, error, onChange };
}

export function Sandbox() {
  const schema = useJsonText(initialSchema);
  const uischema = useJsonText(initialUiSchema);
  const [state, setState] = useState<Pick<JsonFormsCore, "data" | "errors">>({
    data: {},
    errors: [],
  });

  // Remount the form when either schema changes, so a bad schema can recover.
  const formKey = useMemo(() => `${pretty(schema.value)}|${pretty(uischema.value)}`, [
    schema.value,
    uischema.value,
  ]);

  return (
    <div className="pg-split">
      <section className="pg-panel">
        <Flex $direction="column" $gap="4">
          <Editor label="Schema" {...schema} />
          <Editor label="UI schema" {...uischema} />
        </Flex>
      </section>

      <section className="pg-panel">
        <Flex $direction="column" $gap="4">
          <Heading $size="5">Form</Heading>
          <FormBoundary key={formKey}>
            <JsonForms
              schema={schema.value as any}
              uischema={uischema.value as any}
              data={state.data}
              renderers={renderers}
              cells={atomicCells}
              ajv={ajv}
              i18n={i18n}
              onChange={({ data, errors }) => setState({ data, errors: errors ?? [] })}
            />
          </FormBoundary>
          <Heading $size="6">data</Heading>
          <pre className="pg-code">{pretty(state.data)}</pre>
          <Heading $size="6">errors</Heading>
          <pre className="pg-code">
            {pretty((state.errors ?? []).map(({ instancePath, message }) => ({ instancePath, message })))}
          </pre>
        </Flex>
      </section>
    </div>
  );
}

function Editor(props: {
  label: string;
  text: string;
  error?: string;
  onChange: (text: string) => void;
}) {
  const id = `pg-editor-${props.label.replace(/\s/g, "-").toLowerCase()}`;
  return (
    <div>
      <label htmlFor={id}>
        <Heading $size="6">{props.label}</Heading>
      </label>
      <textarea
        id={id}
        className="pg-editor"
        spellCheck={false}
        value={props.text}
        aria-invalid={!!props.error}
        onChange={(e) => props.onChange(e.target.value)}
      />
      {props.error && <div className="pg-error">{props.error}</div>}
    </div>
  );
}

/** Shows a schema that JSON Forms can't render instead of blanking the page. */
class FormBoundary extends React.Component<
  { children: React.ReactNode },
  { error?: Error }
> {
  state: { error?: Error } = {};

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return <div className="pg-error">Couldn't render: {this.state.error.message}</div>;
    }
    return this.props.children;
  }
}
