import { useNumberFormatter } from "@react-aria/i18n";
import { FormatterProps } from "../Format.types";
import { useRenderFormat } from "../../../hooks/useRenderFormat";

export interface FormatNumberProps
  extends FormatterProps<number | bigint, string>,
    Intl.NumberFormatOptions {}

/** Language-sensitive number formatting, using the current locale.
 * Accepts the `Intl.NumberFormat` options as props.
 *
 * [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
 */
export function FormatNumber(props: FormatNumberProps) {
  const formatter = useNumberFormatter(props);
  return useRenderFormat<number | bigint, string>(
    formatter.format.bind(formatter),
    props
  );
}
