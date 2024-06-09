import { DateFormatterOptions, useDateFormatter } from "@react-aria/i18n";
import { FormatterProps } from "../Format.types";
import { renderFormat } from "../render";

export interface FormatDateProps
  extends FormatterProps<Date>,
    DateFormatterOptions {}

export function FormatDate(props: FormatDateProps) {
  const formatter = useDateFormatter(props);
  return renderFormat(formatter.format.bind(formatter), props);
}
