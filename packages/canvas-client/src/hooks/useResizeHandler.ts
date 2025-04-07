import { useEffect } from "react";
import { watchForResize, WatchForResizeOptions } from "../lib/resize";

/**
 * A custom hook that wraps the `watchForResize` function to observe resize events
 */
export function useResizeHandler(options: WatchForResizeOptions) {
  const { getHeight, onResize, observeImages } = options;

  useEffect(() => {
    const cleanup = watchForResize(options);
    return cleanup;
  }, [getHeight, onResize, observeImages]);
}
