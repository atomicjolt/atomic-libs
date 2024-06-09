import { useNumberFormatter } from "@react-aria/i18n";
import { FormatterProps } from "../Format.types";
import { renderFormat } from "../render";

export interface FormatNumberProps
  extends FormatterProps<number>,
    Intl.NumberFormatOptions {}

export function FormatNumber(props: FormatNumberProps) {
  const formatter = useNumberFormatter(props);
  return renderFormat(formatter.format.bind(formatter), props);
}
