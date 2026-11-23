import type { OwnPropsOfRenderer, RankedTester } from "@jsonforms/core";
import { rankWith, Resolve } from "@jsonforms/core";

/**
 * Shown when no other renderer matches, so gaps in a schema are obvious during
 * development. Rank 0: any real renderer wins. Registered unwrapped, so it
 * receives the raw dispatch props.
 */
export function AtomicFallbackRenderer(props: OwnPropsOfRenderer) {
  const { uischema, schema, path } = props;
  if (!uischema) return null;

  const scope = "scope" in uischema ? String(uischema.scope) : undefined;
  const target = scope && schema ? Resolve.schema(schema, scope, schema) : schema;

  return (
    <div
      role="note"
      style={{
        border: "1px dashed currentColor",
        padding: "0.8rem",
        fontFamily: "monospace",
        fontSize: "1.2rem",
      }}
    >
      No renderer for <strong>{uischema.type}</strong>
      {scope && <> at {scope}</>}
      {path && <> (path: {path})</>}
      {target?.type && <> — schema type: {String(target.type)}</>}
    </div>
  );
}

export const atomicFallbackTester: RankedTester = rankWith(0, () => true);
