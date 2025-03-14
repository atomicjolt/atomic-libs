import { useCallback, useRef } from "react";
import { useResizeHandler } from "../hooks/useResizeHandler";
import { ResizeIframe as ResizeIframeClient } from "@atomicjolt/lti-client";

const resizer = new ResizeIframeClient();

export interface ResizeIframeProps {
  getHeight?: () => number;
  observeImages?: boolean;
  children?: React.ReactNode;
}

export function ResizeIframe(props: ResizeIframeProps) {
  const { getHeight, observeImages = false, children } = props;
  const ref = useRef<HTMLDivElement>(null);

  const onResize = useCallback(
    (height: number) => {
      if (ref.current) resizer.resize(height);
    },
    [ref]
  );

  const defaultGetHeight = useCallback(() => {
    if (ref.current) {
      return ref.current.offsetTop;
    }
    return 0;
  }, [ref]);

  useResizeHandler({
    onResize,
    getHeight: getHeight ?? defaultGetHeight,
    observeImages,
  });

  return (
    <>
      {children}
      <div id="content-measuring-stick" ref={ref} />
    </>
  );
}
