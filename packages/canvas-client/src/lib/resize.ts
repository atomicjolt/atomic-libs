export interface WatchForResizeOptions {
  /** Calculate the height that the iframe should be */
  getHeight: () => number;
  /** Callback to perform the iframe resize */
  onResize: (height: number) => void;
  /** Whether to observe images loading */
  observeImages?: boolean;
}

let currentHeight = 0;

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
