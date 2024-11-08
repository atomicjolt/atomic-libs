import React from "react";
import { FormatterProps } from "../components/Format/Format.types";

export function useRenderFormat<
  Value,
  FormattedValue = Value,
  Options = {},
  Props extends FormatterProps<Value, FormattedValue> = FormatterProps<
    Value,
    FormattedValue
  >,
>(
  formatter: (value: Value, options: Options) => FormattedValue,
  props: Props,
  condition: boolean = true
): React.ReactNode {
  const { value, children, fallback, ...options } = props;

  if (!condition || value === null || value === undefined) return fallback;

  const formatted = formatter(value, options as Options);

  if (children) return children(formatted);

  return formatted as React.ReactNode;
}
