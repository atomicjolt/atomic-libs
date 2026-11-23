import type {
  JsonFormsCellRendererRegistryEntry,
  JsonFormsRendererRegistryEntry,
  JsonSchema,
  UISchemaElement,
} from "@jsonforms/core";
import { JsonFormsDispatch } from "@jsonforms/react";
import { Flex } from "@atomicjolt/atomic-elements";

export interface AtomicLayoutRendererProps {
  elements: UISchemaElement[];
  schema: JsonSchema;
  path: string;
  enabled: boolean;
  visible: boolean;
  direction: "row" | "column";
  renderers?: JsonFormsRendererRegistryEntry[];
  cells?: JsonFormsCellRendererRegistryEntry[];
}

/** Dispatches each child element inside a `Flex` row or column. */
export function AtomicLayoutRenderer(props: AtomicLayoutRendererProps) {
  const { elements, schema, path, enabled, visible, direction, renderers, cells } =
    props;

  if (!visible || elements.length === 0) return null;

  return (
    <Flex $direction={direction} $gap="4">
      {elements.map((child, index) => (
        <div
          key={`${path}-${index}`}
          style={direction === "row" ? { flex: "1 1 0", minWidth: 0 } : undefined}
        >
          <JsonFormsDispatch
            uischema={child}
            schema={schema}
            path={path}
            enabled={enabled}
            renderers={renderers}
            cells={cells}
          />
        </div>
      ))}
    </Flex>
  );
}
