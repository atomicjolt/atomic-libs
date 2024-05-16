import { useLayoutEffect } from "react";

export function useResizeObserver(
  elem: HTMLElement | null | undefined,
  onResize: () => void,
  options: ResizeObserverOptions = {}
) {
  useLayoutEffect(() => {
    if (!elem || !window.ResizeObserver) return;

    const observer = new ResizeObserver(onResize);
    observer.observe(elem, options);
    return () => observer.disconnect();
  }, [elem, onResize, options.box]);
}
