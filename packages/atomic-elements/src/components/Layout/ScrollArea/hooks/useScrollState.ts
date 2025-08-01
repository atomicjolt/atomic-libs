import { useCallback, useMemo, useState } from "react";

export interface ScrollState {
  scrollLeft: number;
  scrollTop: number;
  scrollWidth: number;
  scrollHeight: number;
  clientWidth: number;
  clientHeight: number;
  setFromElement: (element: HTMLElement) => void;
  set: (props: Omit<ScrollState, "set" | "setFromElement">) => void;
}

export function useScrollState(): ScrollState {
  const [scrollState, setScrollState] = useState({
    scrollLeft: 0,
    scrollTop: 0,
    scrollWidth: 0,
    scrollHeight: 0,
    clientWidth: 0,
    clientHeight: 0,
  });

  const setFromElement = useCallback((element: HTMLElement) => {
    setScrollState({
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop,
      scrollWidth: element.scrollWidth,
      scrollHeight: element.scrollHeight,
      clientWidth: element.clientWidth,
      clientHeight: element.clientHeight,
    });
  }, []);

  return useMemo(
    () => ({
      ...scrollState,
      setFromElement,
      set: setScrollState,
    }),
    [scrollState, setFromElement]
  );
}
