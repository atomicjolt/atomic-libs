import { useEffect, useMemo, useRef, useState, RefObject } from "react";
import { VariantRecord } from "./types";
import { makeIds } from "./utils";

export function useIds(base: string, args: string[], deps: any[] = []) {
  return useMemo(() => makeIds(base, args), deps);
}

export function useClick(callback: (e: MouseEvent) => void, deps: any[]) {
  useEffect(() => {
    window.addEventListener("click", callback);

    return () => window.removeEventListener("click", callback);
  }, deps);
}

export function useBool(
  initialState: boolean = false
): [boolean, () => void, () => void, () => void] {
  const [bool, setBool] = useState(initialState);

  return [
    bool,
    () => setBool(!bool),
    () => setBool(true),
    () => setBool(false),
  ];
}

export function useIsoDateString(date?: string | Date | number): string {
  return useMemo(() => {
    if (!date) return "";

    if (typeof date == "string" || typeof date == "number") {
      date = new Date(date);
    }

    return date.toISOString().slice(0, 16);
  }, [date]);
}

export function useInitialRender() {
  const isInitialrender = useRef(true);

  useEffect(() => {
    isInitialrender.current = false;
  }, []);

  return isInitialrender.current;
}

interface UseClickOutsideOptions {
  enabled: boolean;
}

const defaultOptions: UseClickOutsideOptions = {
  enabled: true,
};

// https://www.30secondsofcode.org/react/s/use-click-outside
export function useClickOutside(
  ref: RefObject<HTMLElement>,
  callback: () => void,
  options: Partial<UseClickOutsideOptions> = {}
) {
  const onClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    const opts: UseClickOutsideOptions = { ...defaultOptions, ...options };
    if (opts.enabled) {
      window.addEventListener("click", onClick);
      return () => window.removeEventListener("click", onClick);
    } else {
      window.removeEventListener("click", onClick);
    }
  }, [options, ref.current]);
}

export function useWrapperComponent<
  ElementProps extends Record<string, any>,
  WrappedProps extends Record<string, any>
>(
  properties: Partial<ElementProps & WrappedProps>,
  names: (keyof WrappedProps)[]
): [ElementProps, WrappedProps] {
  const entries = Object.entries(properties);

  const elementProperties = Object.fromEntries(
    entries.filter(([k, v]) => !names.includes(k))
  ) as ElementProps;

  const wrappedProperties = Object.fromEntries(
    entries.filter(([k, v]) => names.includes(k))
  ) as WrappedProps;

  return [elementProperties, wrappedProperties];
}

export function useInput<
  A extends Record<string, any>,
  B extends Record<string, any>
>(properties: A & B, keys: string[] = []) {
  return useWrapperComponent<A, B>(properties, [
    ...keys,
    "label",
    "size",
    "hideLabel",
    "error",
    "message",
    "value",
    "onChange",
  ]);
}

export function useVariantComponent<V extends string, T>(
  variants: VariantRecord<V, T>,
  variant: V
): React.ComponentType<T> {
  return useMemo(() => {
    if (!variants.hasOwnProperty(variant)) {
      throw new Error(`${variant} is not a valid variant for this Component`);
    }
    return variants[variant];
  }, [variant]);
}

export function useVariantClass<V extends string>(
  className: string,
  variant: V
) {
  return useMemo(() => {
    if (variant === "default") {
      return className;
    } else {
      return `${className}--${variant}`;
    }
  }, [variant]);
}

export function useVariant<V extends string, T>(
  variants: VariantRecord<V, T>,
  className: string,
  variant: V
): [React.ComponentType<T>, string] {
  return [
    useVariantComponent(variants, variant),
    useVariantClass(className, variant),
  ];
}
