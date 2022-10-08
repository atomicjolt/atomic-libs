import { RefObject, useEffect, useState } from "react";

export default function useIntersectionObserver(
  elementRef: RefObject<Element>,
  args: IntersectionObserverInit = {}
) {
  const { threshold = 0, root = null, rootMargin = "0%" } = args;
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  useEffect(() => {
    const node = elementRef?.current;
    const supported = !!window.IntersectionObserver;

    if (!supported || !node) return;

    const observer = new IntersectionObserver((e) => setEntry(e[0]), {
      threshold,
      root,
      rootMargin,
    });
    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, JSON.stringify(threshold), root, rootMargin]);

  return entry;
}
