import React from "react";
import { EventHandler } from "./types";

function hash(str: string, seed: number = 0) {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 =
    Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
    Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 =
    Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
    Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}

export function makeIds<T extends string>(
  base: T,
  args: readonly string[]
): string[] {
  const seed = Math.random() * 10 ** 10;
  return args.map((a) => `${base}-${hash(base + a, seed)}`);
}

interface Event<T = Element> extends React.SyntheticEvent<T> {}

const defaultCallback = (e: Event) =>
  (e.target as HTMLInputElement).value as any;

export function makeEventHandler<T, E extends Event>(
  handler?: EventHandler<T, E>,
  callback: (event: E) => T = defaultCallback
) {
  return (event: E) => handler && handler(callback(event), event);
}

export function makeOptionaCallback<T = unknown>(
  callback?: (...rest: T[]) => any
) {
  return (...rest: T[]) => callback && callback(...rest);
}

// https://gist.github.com/WimJongeneel/44e8c426ecaf7ca76824b95c8ef36c65#file-levenshtein-ts
export function levenshtein(a: string, b: string): number {
  const matrix = Array.from({ length: a.length }).map(() =>
    Array.from({ length: b.length }).map(() => 0)
  );

  for (let i = 0; i < a.length; i++) matrix[i][0] = i;

  for (let i = 0; i < b.length; i++) matrix[0][i] = i;

  for (let j = 0; j < b.length; j++)
    for (let i = 0; i < a.length; i++)
      matrix[i][j] = Math.min(
        (i == 0 ? 0 : matrix[i - 1][j]) + 1,
        (j == 0 ? 0 : matrix[i][j - 1]) + 1,
        (i == 0 || j == 0 ? 0 : matrix[i - 1][j - 1]) + (a[i] == b[j] ? 0 : 1)
      );

  return matrix[a.length - 1][b.length - 1];
}

export function searchFilter<T>(
  value: string,
  options: T[],
  unwrap: (v: T) => string
): T[] {
  const compValue = String(value);

  return options.filter((o) => {
    if (!value) return true;
    const unwrapped = unwrap(o);
    return unwrapped.startsWith(value) || levenshtein(unwrapped, value) <= 2;
  });
}

export function getScrollParent(node: HTMLElement | null): HTMLElement {
  while (node !== null) {
    const overflowY = window.getComputedStyle(node).overflowY;
    const isScrollable = overflowY !== "visible" && overflowY !== "hidden";
    if (node.scrollHeight > node.clientHeight && isScrollable) {
      return node;
    } else {
      node = node.parentElement;
    }
  }

  return node || document.body;
}
