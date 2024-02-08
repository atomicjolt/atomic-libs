import React from "react";
import { EventHandler } from "./types";

interface Event<T = Element> extends React.SyntheticEvent<T> {}

const defaultCallback = (e: Event) =>
  (e.target as HTMLInputElement).value as any;

export function makeEventHandler<T, E extends Event>(
  handler?: EventHandler<T, E>,
  callback: (event: E) => T = defaultCallback
) {
  return (event: E) => handler && handler(callback(event), event);
}

export function makeOptionalCallback<T = unknown>(
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

export function handleUndefined<T>(value: T | null | undefined): T | null {
  if (value === undefined) {
    return null;
  }

  return value;
}

export function fallbackValue<T>(value: T | null | undefined, fallback: T): T {
  if (value === null || value === undefined) {
    return fallback;
  }

  return value;
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
