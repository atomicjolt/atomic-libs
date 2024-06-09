import React from "react";
import { FormatterProps } from "./Format.types";

export function renderFormat<
  T,
  O,
  Props extends FormatterProps<T> = FormatterProps<T>,
>(
  formatter: (value: T, options: O) => string,
  props: Props,
  condition: boolean = true
): React.ReactNode {
  const { value, children, fallback, ...options } = props;

  if (!condition || value === null || value === undefined) return fallback;

  const formatted = formatter(value, options as O);

  if (children) return children(formatted);

  return formatted;
}
