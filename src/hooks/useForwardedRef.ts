import React, { useImperativeHandle } from "react";

/** Forawrds an inner ref object to an external ref */
export default function useForwardedRef<T>(
  ref: React.ForwardedRef<T>,
  defaultValue: T | null = null
): React.RefObject<T> {
  const actualRef = React.useRef<T>(defaultValue);
  useImperativeHandle(ref, () => {
    return actualRef.current!;
  });

  return actualRef;
}
