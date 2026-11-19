import { useEffect, useLayoutEffect } from "react";

/** `useLayoutEffect` in the browser, `useEffect` during server rendering. */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
