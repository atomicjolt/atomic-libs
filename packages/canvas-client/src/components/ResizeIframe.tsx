import { useCallback, useRef } from "react";
import { useResizeHandler } from "../hooks/useResizeHandler";
import { ResizeIframe as ResizeIframeClient } from "@atomicjolt/lti-client";

const resizer = new ResizeIframeClient();

export interface ResizeIframeProps {
  /** A function to retrieve the height of the content. If not provided, the height is calcualted as the full height of the children  */
  getHeight?: () => number;
  /** A callback function to be called when the iframe is resized. If not provided it will send a postMessage to the parent frame to request a resize */
  onResize?: (height: number) => void;
  /** Whether to observe images loading */
  observeImages?: boolean;
  children?: React.ReactNode;
}

/**
 * A React component to resize an iframe embedded in Canvas content.
 *
 * @example
 * ```tsx
 * import { ResizeIframe } from "@atomicjolt/canvas-client";
 *
 * function App() {
 *   return (
 *     <ResizeIframe>
 *      <div>Your content here</div>
 *     </ResizeIframe>
 *   );
 * }
 * ```
 */
export function ResizeIframe(props: ResizeIframeProps) {
  const { observeImages, children } = props;
  const ref = useRef<HTMLDivElement>(null);

  const onResize = props.onResize ?? resizer.resize;
  const handleResize = useCallback(
    (height: number) => {
      if (ref.current) {
        onResize(height);
      }
    },
    [ref]
  );

  const defaultGetHeight = useCallback(() => {
    if (ref.current) {
      return ref.current.offsetTop;
    }
    return 0;
  }, [ref]);

  const getHeight = props.getHeight ?? defaultGetHeight;

  useResizeHandler({
    onResize: handleResize,
    getHeight,
    observeImages,
  });

  return (
    <>
      {children}
      <div id="content-measuring-stick" ref={ref} />
    </>
  );
}
