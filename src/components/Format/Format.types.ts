export interface FormatSecondsOptions {
  precision?: "seconds" | "minutes" | "hours";
}

export type FormatterChildren<T> = (formatted: T) => React.ReactNode;

export interface FormatterProps<Type, FormattedType = Type> {
  value?: Type | null;
  children?: FormatterChildren<FormattedType>;
  fallback?: React.ReactNode;
}
