import { useCallback } from "react";
import { ScrollState } from "./useScrollState";
import { useMove } from "@react-aria/interactions";

interface UseScrollBarProps {
  orientation: "horizontal" | "vertical";
  scrollAreaRef: React.RefObject<HTMLElement | null>;
  trackRef: React.RefObject<HTMLElement | null>;
}

export function useScrollBar(props: UseScrollBarProps, state: ScrollState) {
  const { scrollAreaRef, trackRef, orientation } = props;

  const updateScrollState = useCallback(() => {
    if (scrollAreaRef.current) {
      const element = scrollAreaRef.current;
      state.setFromElement(element);
    }
  }, []);

  const isHorizontal = orientation === "horizontal";

  // The width of the thumb is relative to the width of the scroll area
  // smaller scroll area -> larger thumb size
  // larger scroll area -> smaller thumb size
  const thumbSizePercent = isHorizontal
    ? state.clientWidth > 0
      ? Math.max((state.clientWidth / state.scrollWidth) * 100, 10)
      : 100
    : state.clientHeight > 0
    ? Math.max((state.clientHeight / state.scrollHeight) * 100, 10)
    : 100;

  const maxScroll = isHorizontal
    ? state.scrollWidth - state.clientWidth
    : state.scrollHeight - state.clientHeight;

  const currentScroll = isHorizontal ? state.scrollLeft : state.scrollTop;

  // The thumb can't move if maxScroll is 0 since that means the content is not scrollable
  const thumbPositionPercent =
    maxScroll > 0 ? (currentScroll / maxScroll) * (100 - thumbSizePercent) : 0;

  const { moveProps } = useMove({
    onMove: (e) => {
      const delta = isHorizontal ? e.deltaX : e.deltaY;
      if (scrollAreaRef.current && trackRef.current) {
        if (isHorizontal) {
          const trackSize = trackRef.current.offsetWidth;
          const scrollSize = state.scrollWidth;
          const scaledDelta = (delta / trackSize) * scrollSize;
          scrollAreaRef.current.scrollLeft += scaledDelta;
        } else {
          const trackSize = trackRef.current.offsetHeight;
          const scrollSize = state.scrollHeight;
          const scaledDelta = (delta / trackSize) * scrollSize;
          scrollAreaRef.current.scrollTop += scaledDelta;
        }

        updateScrollState();
      }
    },
  });

  const style = isHorizontal
    ? {
        width: `${thumbSizePercent}%`,
        left: `${thumbPositionPercent}%`,
      }
    : {
        height: `${thumbSizePercent}%`,
        top: `${thumbPositionPercent}%`,
      };

  return {
    thumbProps: {
      role: "scrollbar",
      tabIndex: 0,
      "aria-valuenow": currentScroll,
      "aria-valuemin": 0,
      "aria-valuemax": maxScroll,
      "aria-orientation": orientation,
      style,
      ...moveProps,
    },
  } as const;
}
