import { FormatterProps } from "../Format.types";
import { renderFormat } from "../render";
import { FormatDurationOptions, formatDuration } from "./useDurationFormatter";

export interface FormatDurationProps
  extends FormatterProps<number>,
    FormatDurationOptions {}

/** Formats a given duration in seconds into a human-readable string.*/
export function FormatDuration(props: FormatDurationProps) {
  return renderFormat(formatDuration, props);
}
