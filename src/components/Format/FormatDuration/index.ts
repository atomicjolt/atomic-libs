import { FormatterProps } from "../Format.types";
import { useRenderFormat } from "../../../hooks/useRenderFormat";
import {
  FormatDurationOptions,
  formatDuration,
} from "../../../hooks/useDurationFormatter";

export interface FormatDurationProps
  extends FormatterProps<number, string>,
    FormatDurationOptions {}

/** Formats a given duration in seconds into a human-readable string.*/
export function FormatDuration(props: FormatDurationProps) {
  return useRenderFormat(formatDuration, props);
}
