import { useMove } from "@react-aria/interactions";
import { useCallback, useLayoutEffect, useMemo, useState } from "react";
import { ScrollState } from "./useScrollState";

interface UseScrollAreaProps {
  scrollAreaRef: React.RefObject<HTMLElement | null>;
  children: React.ReactNode;
}

export function useScrollArea(props: UseScrollAreaProps, state: ScrollState) {
  const { scrollAreaRef, children } = props;

  const updateScrollState = useCallback(() => {
    if (scrollAreaRef.current) {
      const element = scrollAreaRef.current;
      state.setFromElement(element);
    }
  }, []);

  useLayoutEffect(() => {
    updateScrollState();

    const element = scrollAreaRef.current;
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
