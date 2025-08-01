import { useCallback, useLayoutEffect, useMemo, useState } from "react";
import { ScrollState } from "./useScrollState";

interface UseScrollAreaProps {
  viewportRef: React.RefObject<HTMLElement | null>;
  children: React.ReactNode;
}

export function useScrollArea(props: UseScrollAreaProps, state: ScrollState) {
  const { viewportRef, children } = props;

  const updateScrollState = useCallback(() => {
    if (viewportRef.current) {
      const element = viewportRef.current;
      state.setFromElement(element);
    }
  }, []);

  useLayoutEffect(() => {
    updateScrollState();

    const element = viewportRef.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver(() => {
      updateScrollState();
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [updateScrollState, children]);

  return {
    scrollAreaProps: {
      onScroll: updateScrollState,
    },
  };
}
