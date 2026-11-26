/** Form data → input text. */
export function toText(data: unknown): string {
  return data === undefined || data === null ? "" : String(data);
}

/** Input text → form data. A cleared field stores `undefined`. */
export function fromText(value: string): string | undefined {
  return value === "" ? undefined : value;
}
