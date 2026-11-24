import { DateFormatterOptions, useDateFormatter } from "@react-aria/i18n";
import { FormatterProps } from "../Format.types";
import { useRenderFormat } from "../../../hooks/useRenderFormat";

export interface FormatDateProps
  extends FormatterProps<Date, string>,
    DateFormatterOptions {}

/** Language-sensitive date and time formatting, using the current locale.
 * Accepts the `Intl.DateTimeFormat` options as props.
 *
 * [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
 */
export function FormatDate(props: FormatDateProps) {
  const formatter = useDateFormatter(props);
  return useRenderFormat<Date, string>(formatter.format.bind(formatter), props);
}
