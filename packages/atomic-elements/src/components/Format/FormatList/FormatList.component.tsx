import { useListFormatter } from "@react-aria/i18n";
import { FormatterProps } from "../Format.types";
import { useRenderFormat } from "../../../hooks/useRenderFormat";

export interface FormatListProps
  extends FormatterProps<Iterable<string>>,
    Intl.ListFormatOptions {}

/** Language-sensitive list formatting
 *
 *
 * [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat)
 */
export function FormatList(props: FormatListProps) {
  const formatter = useListFormatter(props);
  return useRenderFormat<Iterable<string>, string>(
    formatter.format.bind(formatter),
    props
  );
}
