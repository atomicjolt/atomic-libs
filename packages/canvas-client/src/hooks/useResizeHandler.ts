import { useEffect } from "react";
import { watchForResize, WatchForResizeOptions } from "../lib/resize";

export function useResizeHandler(options: WatchForResizeOptions) {
  const { getHeight, onResize, observeImages } = options;

  useEffect(() => {
    const cleanup = watchForResize(options);
    return cleanup;
  }, [getHeight, onResize, observeImages]);
}
