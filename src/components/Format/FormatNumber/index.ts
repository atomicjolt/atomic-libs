import { useNumberFormatter } from "@react-aria/i18n";
import { FormatterProps } from "../Format.types";
import { useRenderFormat } from "../../../hooks/useRenderFormat";

export interface FormatNumberProps
  extends FormatterProps<number | bigint, string>,
    Intl.NumberFormatOptions {}

export function FormatNumber(props: FormatNumberProps) {
  const formatter = useNumberFormatter(props);
  return useRenderFormat<number | bigint, string>(
    formatter.format.bind(formatter),
    props
  );
}
