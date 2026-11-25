import type { Key, Selection } from "@atomicjolt/atomic-elements";

/** Normalizes a react-aria selection (a `Set`, any iterable, or `"all"`)
 * into the value stored in the form: an array of keys, or `"all"`. */
export function selectionToValue(
  selection: Selection | Iterable<Key> | undefined
): Key[] | "all" | undefined {
  if (selection === undefined) return undefined;
  if (selection === "all") return "all";
  return [...selection];
}
