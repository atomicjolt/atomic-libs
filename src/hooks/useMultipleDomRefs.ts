import React, { useCallback, useRef } from "react";

export function useMultipleDomRefs<T extends HTMLElement>(
  ...refs: React.Ref<T>[]
): React.Ref<T> {
  return useCallback((el: T) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(el);
      } else if (ref) {
        (ref as React.MutableRefObject<T | null>).current = el;
      }
    });
  }, []);
}
