import { RefObject, useEffect, useId, useMemo, useRef, useState } from "react";

export function useIds(base: string, args: string[], deps: any[] = []) {
  const id = useId();
  return useMemo(() => args.map((arg) => `${base}-${id}-${arg}`), deps);
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
    return () => {
      isInitialrender.current = false;
    };
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

/** Tracks whether or not a state change has
 * occured since the component mounted. The intial time
 * this hook will return false, afterwards it will return
 * true. */
export function useFirstStateChange<T>(current: T) {
  const initial = useRef(current).current;
  const hasChangedRef = useRef(false);

  useEffect(
    () => () => {
      hasChangedRef.current = false;
    },
    []
  );

  if (current !== initial) {
    hasChangedRef.current = true;
  }

  return hasChangedRef.current;
}
