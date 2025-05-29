import { useCallback, useRef } from "react";
import { ScrollState } from "./useScrollState";

interface UseScrollBarButtonProps {
  orientation: "horizontal" | "vertical";
  direction: "advance" | "retreat";
  scrollAreaRef: React.RefObject<HTMLElement | null>;
}

const baseScrollAmount = 20; // Base pixels to scroll per step
const maxSpeedMultiplier = 5; // Maximum speed multiplier
const accelerationDelay = 150; // ms before starting acceleration
const accelerationRate = 0.5; // How much to increase speed per acceleration step

export function useScrollBarButton(
  props: UseScrollBarButtonProps,
  state: ScrollState
) {
  const { orientation, direction, scrollAreaRef } = props;

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
    if (scrollAreaRef.current) {
      const element = scrollAreaRef.current;
      state.setFromElement(element);
    }
  }, [scrollAreaRef, state]);

  const startScrolling = useCallback(() => {
    if (!scrollAreaRef.current) return;

    stopScrolling(); // Clear any existing intervals

    const scroll = () => {
      if (!scrollAreaRef.current) return;

      const scrollAmount = baseScrollAmount * speedMultiplierRef.current;
      const scrollDelta = isAdvance ? scrollAmount : -scrollAmount;

      if (isHorizontal) {
        scrollAreaRef.current.scrollLeft += scrollDelta;
      } else {
        scrollAreaRef.current.scrollTop += scrollDelta;
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
    scrollAreaRef,
    isHorizontal,
    isAdvance,
    updateScrollState,
    stopScrolling,
  ]);

  const handlePressStart = useCallback(() => {
    startScrolling();
  }, [startScrolling]);

  const handlePressEnd = useCallback(() => {
    stopScrolling();
  }, [stopScrolling]);

  const handlePress = useCallback(() => {
    // Single click behavior - just scroll once
    if (!scrollAreaRef.current) return;

    const scrollAmount = 20;
    const scrollDelta = isAdvance ? scrollAmount : -scrollAmount;

    if (isHorizontal) {
      scrollAreaRef.current.scrollLeft += scrollDelta;
    } else {
      scrollAreaRef.current.scrollTop += scrollDelta;
    }

    updateScrollState();
  }, [scrollAreaRef, isHorizontal, isAdvance, updateScrollState]);

  return {
    buttonProps: {
      onPress: handlePress,
      onPressStart: handlePressStart,
      onPressEnd: handlePressEnd,
      "aria-label": `Scroll ${direction} ${orientation}ly`,
    },
  } as const;
}
