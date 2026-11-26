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
    count: { type: "integer", title: "Count", minimum: 0 },
    price: { type: "number", title: "Price" },
    active: { type: "boolean", title: "Active" },
    published: { type: "boolean", title: "Published" },
    color: { type: "string", title: "Color", enum: ["red", "green", "blue"] },
    size: {
      title: "Size",
      oneOf: [
        { const: "s", title: "Small" },
        { const: "m", title: "Medium" },
        { const: "l", title: "Large" },
      ],
    },
    country: { type: "string", title: "Country", enum: ["Canada", "Mexico", "United States"] },
    tags: {
      type: "array",
      title: "Tags",
      uniqueItems: true,
      items: { type: "string", enum: ["news", "travel", "gaming"] },
    },
    due: { type: "string", format: "date", title: "Due date" },
    at: { type: "string", format: "time", title: "Time" },
    when: { type: "string", format: "date-time", title: "Date and time" },
    attachments: { type: "array", items: { type: "string" } },
  },
};

const control = (property: string, options?: object) => ({
  type: "Control",
  scope: `#/properties/${property}`,
  ...(options && { options }),
});

const initialUiSchema = {
  type: "VerticalLayout",
  elements: [
    control("title"),
    control("notes", { multi: true }),
    { type: "HorizontalLayout", elements: [control("count"), control("price")] },
    { type: "HorizontalLayout", elements: [control("active"), control("published", { toggle: true })] },
    control("color"),
    control("size", { format: "radio" }),
    control("country", { autocomplete: true }),
    control("tags"),
    { type: "HorizontalLayout", elements: [control("due"), control("at")] },
    control("when"),
    control("attachments"),
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
