import { useEffect, useMemo, useRef, useState, RefObject } from "react";
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

export function useBool(initialState: boolean = false): [boolean, () => void] {
  const [bool, setBool] = useState(initialState);

  return [bool, () => setBool(!bool)];
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
