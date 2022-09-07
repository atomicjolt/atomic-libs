import React from "react";
import { EventHandler, SharedInputProps } from "./types";

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

interface Event<T = Element> extends React.SyntheticEvent<T> {
  target: EventTarget & T & { value: any };
}

export function makeEventHandler<T, E extends Event>(
  handler: EventHandler<T, E>
) {
  return (event: E) => handler(event.target.value, event);
}

export function makeOptionaCallback<T = unknown>(
  callback?: (...rest: T[]) => any
) {
  return (...rest: T[]) => callback && callback(...rest);
}

export const DefaultInputProperties: SharedInputProps = {
  label: "",
  hideLabel: false,
  error: "",
  message: "",
  disabled: false,
  required: false,
  readonly: false,
  placeholder: "",
  size: "medium",
};
