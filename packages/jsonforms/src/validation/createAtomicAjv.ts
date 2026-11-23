import { createAjv } from "@jsonforms/core";
import equal from "fast-deep-equal";
import type Ajv from "ajv";
import type { Format, KeywordDefinition, Options } from "ajv";

/** Above this many options, `oneOf` is not validated. */
export const LARGE_ONEOF_THRESHOLD = 50;

export interface CreateAtomicAjvOptions {
  /** Extra AJV options, merged over the defaults. */
  options?: Options;
  /** Custom string formats, e.g. `{ javascript: (s) => isValidJs(s) }`. */
  formats?: Record<string, Format>;
  /** Custom keywords. */
  keywords?: KeywordDefinition[];
}

/**
 * Creates the AJV instance used by atomic JSON forms. It is built on JSON Forms'
 * own `createAjv` (so there is one AJV copy) and works around two problems:
 *
 * - AJV overflows the stack validating a `oneOf` with very many options
 *   (https://github.com/eclipsesource/jsonforms/issues/2271). Above
 *   `LARGE_ONEOF_THRESHOLD` options, `oneOf` is not validated. The UI only lets
 *   the user pick a listed option anyway.
 * - AJV rejects `enum: []` when compiling the schema. An empty enum is treated
 *   as "no constraint" so a schema whose options haven't loaded yet still renders.
 *   The rejection comes from AJV's meta-schema check, so that check is turned
 *   off (`validateSchema: false`): malformed schemas are not reported by AJV.
 *
 * Create it once (module level or `useMemo`). A new instance recompiles every schema.
 */
export function createAtomicAjv(config: CreateAtomicAjvOptions = {}): Ajv {
  const { options, formats = {}, keywords = [] } = config;
  const ajv = createAjv({ useDefaults: true, validateSchema: false, ...options });

  ajv.removeKeyword("oneOf");
  ajv.addKeyword({
    keyword: "oneOf",
    schemaType: "array",
    validate: (schema: any[], data: unknown) => {
      if (schema.length > LARGE_ONEOF_THRESHOLD) return true;
      return schema.some((option) => equal(option?.const, data));
    },
  });

  ajv.removeKeyword("enum");
  ajv.addKeyword({
    keyword: "enum",
    schemaType: "array",
    validate: (schema: unknown[], data: unknown) => {
      if (schema.length === 0) return true;
      return schema.some((option) => equal(option, data));
    },
  });

  for (const [name, format] of Object.entries(formats)) {
    ajv.addFormat(name, format);
  }
  for (const keyword of keywords) {
    ajv.addKeyword(keyword);
  }

  return ajv;
}
