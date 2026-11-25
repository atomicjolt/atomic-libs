import type { EnumOption } from "@jsonforms/core";
import equal from "fast-deep-equal";

/**
 * Collection components need string keys, but enum values can be anything
 * (null, numbers, booleans, objects). Options are keyed by their index.
 */
export function keyOf(options: EnumOption[], value: unknown): string | null {
  if (value === undefined) return null;
  const index = options.findIndex((option) => equal(option.value, value));
  return index === -1 ? null : String(index);
}

export function valueOf(options: EnumOption[], key: unknown): unknown {
  if (key === null || key === undefined) return undefined;
  return options[Number(key)]?.value;
}

export function keysOf(options: EnumOption[], values: unknown): string[] {
  if (!Array.isArray(values)) return [];
  return values
    .map((value) => keyOf(options, value))
    .filter((key): key is string => key !== null);
}
