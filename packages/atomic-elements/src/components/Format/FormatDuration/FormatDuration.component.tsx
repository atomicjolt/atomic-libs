import { FormatterProps } from "../Format.types";
import { useRenderFormat } from "../../../hooks/useRenderFormat";
import {
  FormatDurationOptions,
  formatDuration,
} from "../../../hooks/useDurationFormatter";

export interface FormatDurationProps
  extends FormatterProps<number, string>,
    FormatDurationOptions {
  /** The duration to format, in seconds. When `null` or `undefined`, `fallback` is rendered instead. */
  value?: number | null;
}

/** Formats a given duration in seconds into a human-readable string.*/
export function FormatDuration(props: FormatDurationProps) {
  return useRenderFormat(formatDuration, props);
}
