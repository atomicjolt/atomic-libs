import { useCallback, useRef } from "react";
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

  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const targetPositionRef = useRef<number | null>(null);

  const stopScrolling = useCallback(() => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
    targetPositionRef.current = null;
  }, []);

  const handleTrackMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!scrollAreaRef.current || !trackRef.current) return;

      // Clear any existing interval first
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }

      const trackRect = trackRef.current.getBoundingClientRect();
      let targetPosition: number;

      if (isHorizontal) {
        const clickX = e.clientX - trackRect.left;
        const trackWidth = trackRect.width;
        const thumbWidth = (thumbSizePercent / 100) * trackWidth;
        const adjustedClickX = clickX - thumbWidth / 2;
        const scrollRatio = Math.max(
          0,
          Math.min(1, adjustedClickX / (trackWidth - thumbWidth))
        );
        targetPosition = scrollRatio * maxScroll;
      } else {
        const clickY = e.clientY - trackRect.top;
        const trackHeight = trackRect.height;
        const thumbHeight = (thumbSizePercent / 100) * trackHeight;
        const adjustedClickY = clickY - thumbHeight / 2;
        const scrollRatio = Math.max(
          0,
          Math.min(1, adjustedClickY / (trackHeight - thumbHeight))
        );
        targetPosition = scrollRatio * maxScroll;
      }

      targetPositionRef.current = targetPosition;

      // Start continuous scrolling
      const scrollStep = () => {
        if (!scrollAreaRef.current || targetPositionRef.current === null) {
          return;
        }

        const current = isHorizontal
          ? scrollAreaRef.current.scrollLeft
          : scrollAreaRef.current.scrollTop;
        const target = targetPositionRef.current;
        const distance = target - current;

        // Stop if we're close enough to the target
        if (Math.abs(distance) < 1) {
          if (scrollIntervalRef.current) {
            clearInterval(scrollIntervalRef.current);
            scrollIntervalRef.current = null;
          }
          targetPositionRef.current = null;
          return;
        }

        // Scroll by a portion of the remaining distance for smooth animation
        const step = distance * 0.15;

        if (isHorizontal) {
          scrollAreaRef.current.scrollLeft += step;
        } else {
          scrollAreaRef.current.scrollTop += step;
        }

        updateScrollState();
      };

      // Start the scrolling interval
      scrollIntervalRef.current = setInterval(scrollStep, 16); // ~60fps
    },
    [
      isHorizontal,
      thumbSizePercent,
      maxScroll,
      scrollAreaRef,
      trackRef,
      updateScrollState,
    ]
  );

  const handleTrackMouseUp = useCallback(() => {
    stopScrolling();
  }, [stopScrolling]);

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
    trackProps: {
      onMouseDown: handleTrackMouseDown,
      onMouseUp: handleTrackMouseUp,
      // onTouchStart: handleTrackMouseDown,
      // onTouchEnd: handleTrackMouseUp,
    },
  } as const;
}
