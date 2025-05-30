import { useCallback, useRef } from "react";
import { ScrollState } from "./useScrollState";

interface UseScrollBarButtonProps {
  orientation: "horizontal" | "vertical";
  direction: "advance" | "retreat";
  viewportRef: React.RefObject<HTMLElement | null>;
  /** Base pixels to scroll per step @default 20 */
  baseScrollAmount?: number;
  /** Maximum speed multiplier for acceleration @default 5 */
  maxSpeedMultiplier?: number;
  /** Milliseconds before starting acceleration @default 150 */
  accelerationDelay?: number;
  /** How much to increase speed per acceleration step @default 0.5 */
  accelerationRate?: number;
}

export function useScrollBarButton(
  props: UseScrollBarButtonProps,
  state: ScrollState
) {
  const {
    orientation,
    direction,
    viewportRef,
    baseScrollAmount = 20,
    maxSpeedMultiplier = 5,
    accelerationDelay = 150,
    accelerationRate = 0.5,
  } = props;

  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const speedMultiplierRef = useRef<number>(1);
  const accelerationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const isHorizontal = orientation === "horizontal";
  const isAdvance = direction === "advance";

  const stopScrolling = useCallback(() => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
    if (accelerationIntervalRef.current) {
      clearInterval(accelerationIntervalRef.current);
      accelerationIntervalRef.current = null;
    }
    speedMultiplierRef.current = 1;
  }, []);

  const updateScrollState = useCallback(() => {
    if (viewportRef.current) {
      const element = viewportRef.current;
      state.setFromElement(element);
    }
  }, [viewportRef, state]);

  const startScrolling = useCallback(() => {
    if (!viewportRef.current) return;

    stopScrolling(); // Clear any existing intervals

    const scroll = () => {
      if (!viewportRef.current) return;

      const scrollAmount = baseScrollAmount * speedMultiplierRef.current;
      const scrollDelta = isAdvance ? scrollAmount : -scrollAmount;

      if (isHorizontal) {
        viewportRef.current.scrollLeft += scrollDelta;
      } else {
        viewportRef.current.scrollTop += scrollDelta;
      }

      updateScrollState();
    };

    // Start scrolling immediately
    scroll();

    // Set up continuous scrolling
    scrollIntervalRef.current = setInterval(scroll, 50); // ~20fps

    // Set up acceleration after initial delay
    setTimeout(() => {
      accelerationIntervalRef.current = setInterval(() => {
        if (speedMultiplierRef.current < maxSpeedMultiplier) {
          speedMultiplierRef.current += accelerationRate;
        }
      }, 100); // Increase speed every 100ms
    }, accelerationDelay);
  }, [
    viewportRef,
    isHorizontal,
    isAdvance,
    updateScrollState,
    stopScrolling,
    baseScrollAmount,
    maxSpeedMultiplier,
    accelerationDelay,
    accelerationRate,
  ]);

  const handlePressStart = useCallback(() => {
    startScrolling();
  }, [startScrolling]);

  const handlePressEnd = useCallback(() => {
    stopScrolling();
  }, [stopScrolling]);

  const handlePress = useCallback(() => {
    // Single click behavior - just scroll once
    if (!viewportRef.current) return;

    const scrollAmount = baseScrollAmount;
    const scrollDelta = isAdvance ? scrollAmount : -scrollAmount;

    if (isHorizontal) {
      viewportRef.current.scrollLeft += scrollDelta;
    } else {
      viewportRef.current.scrollTop += scrollDelta;
    }

    updateScrollState();
  }, [
    viewportRef,
    isHorizontal,
    isAdvance,
    updateScrollState,
    baseScrollAmount,
  ]);

  return {
    buttonProps: {
      onPress: handlePress,
      onPressStart: handlePressStart,
      onPressEnd: handlePressEnd,
      "aria-label": `Scroll ${direction} ${orientation}ly`,
    },
  } as const;
}
