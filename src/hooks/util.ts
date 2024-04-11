import { useEffect, useId, useMemo, useRef } from "react";

export function useIds(base: string, args: string[], deps: any[] = []) {
  const id = useId();
  return useMemo(() => args.map((arg) => `${base}-${id}-${arg}`), deps);
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
