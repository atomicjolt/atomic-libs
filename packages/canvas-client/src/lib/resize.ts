export interface WatchForResizeOptions {
  /** Calculate the height that the iframe should be */
  getHeight: () => number;
  /** Callback to perform the iframe resize */
  onResize: (height: number) => void;
  /** Whether to observe images loading */
  observeImages?: boolean;
}

/** A global store of the current height of the page */
let currentHeight = 0;

/**
 * Watches for resize events and triggers a callback when a resize is detected.
 * This function observes changes in the DOM and optionally monitors image loading
 * to ensure the height is recalculated when images are loaded or DOM mutations occur.
 *
 * @param options - Configuration options for the resize watcher.
 * @param options.getHeight - A function that returns the current height of the element being observed.
 * @param options.observeImages - A boolean indicating whether to observe image loading events. Defaults to `true`.
 * @param options.onResize - A callback function that is invoked whenever a resize is detected. Receives the new height as an argument.
 *
 * @returns A cleanup function that stops observing resize events and disconnects all listeners.
 */
export function watchForResize(options: WatchForResizeOptions) {
  const { getHeight, observeImages = true, onResize } = options;

  function resizeIframe() {
    const height = getHeight();
    if (height === currentHeight) return;
    currentHeight = height;
    onResize(height);
  }

  const observedImages = new Map<string, HTMLImageElement>();

  function observeImageLoading(child: HTMLElement) {
    if (child instanceof HTMLImageElement && !observedImages.has(child.src)) {
      child.addEventListener("load", resizeIframe);
      observedImages.set(child.src, child);
      return;
    }

    if (!child?.children || child.children.length === 0) {
      return;
    }

    Array.prototype.forEach.call(child.children, (child) => {
      observeImageLoading(child);
    });
  }

  const observer = new MutationObserver((mutations) => {
    if (observeImages) {
      for (let mutation of mutations) {
        if (mutation.target instanceof HTMLImageElement) {
          observeImageLoading(mutation.target);
        }
      }
    }

    resizeIframe();
  });

  window.addEventListener("resize", resizeIframe);

  observer.observe(document.documentElement, {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true,
  });

  return () => {
    window.removeEventListener("resize", resizeIframe);
    observer.disconnect();

    for (let img of observedImages.values()) {
      img.removeEventListener("load", resizeIframe);
    }

    observedImages.clear();
  };
}
