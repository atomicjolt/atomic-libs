export interface FormatSecondsOptions {
  precision?: "seconds" | "minutes" | "hours";
}

export type FormatterChildren = (formatted: React.ReactNode) => React.ReactNode;

export interface FormatterProps<Type> {
  value?: Type | null;
  children?: FormatterChildren;
  fallback?: React.ReactNode;
}
