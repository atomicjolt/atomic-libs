export interface FormatSecondsOptions {
  precision?: "seconds" | "minutes" | "hours";
}

export type FormatterChildren<T> = (formatted: T) => React.ReactNode;

export interface FormatterProps<Type, FormattedType = Type> {
  /** The value to format. When `null` or `undefined`, `fallback` is rendered instead. */
  value?: Type | null;
  /** Render function that receives the formatted value. By default the formatted value is rendered as text. */
  children?: FormatterChildren<FormattedType>;
  /** Rendered when `value` is `null` or `undefined`. */
  fallback?: React.ReactNode;
}
