import { RefObject, useEffect, useMemo, useRef, useState } from "react";
import { makeIds } from "../utils";

export function useIds(base: string, args: string[], deps: any[] = []) {
  return useMemo(() => makeIds(base, args), deps);
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
export function useClickOutside<E extends HTMLElement>(
  ref: RefObject<E>,
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
