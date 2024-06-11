import { FormatterProps } from "../Format.types";
import { useRenderFormat } from "../../../hooks/useRenderFormat";

export interface FormatOptionalProps<T> extends FormatterProps<T> {}

/** Optionally render a potentially null value.
 * If the value is null / undefined, the `fallback` is rendered,
 * otherwise the given `value` is rendered  */
export function FormatOptional<T>(props: FormatOptionalProps<T>) {
  return useRenderFormat((v: T) => v, props);
}
