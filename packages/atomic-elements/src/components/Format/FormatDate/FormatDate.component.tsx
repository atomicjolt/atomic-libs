import { DateFormatterOptions, useDateFormatter } from "@react-aria/i18n";
import { FormatterProps } from "../Format.types";
import { useRenderFormat } from "../../../hooks/useRenderFormat";

export interface FormatDateProps
  extends FormatterProps<Date, string>,
    DateFormatterOptions {}

export function FormatDate(props: FormatDateProps) {
  const formatter = useDateFormatter(props);
  return useRenderFormat<Date, string>(formatter.format.bind(formatter), props);
}
