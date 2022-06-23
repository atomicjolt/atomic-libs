import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import cn from "classnames";

export interface Props<T> {
  from: T;
  to: T;
  after?: number;
  render: (data: T) => React.ReactNode;
  onTransition?: (from: T, to: T) => void;
}

export interface TransitionRef {
  /** Triggers the transition `from` => `to` */
  trigger: () => void;
  /** Resets back to `from` state */
  reset: () => void;
}

function TransitionInner<T>(
  { from, to, after, render, onTransition }: Props<T>,
  ref?: React.ForwardedRef<TransitionRef>
) {
  const [data, setData] = useState(from);
  const manuallyTriggered = useRef(false);

  useImperativeHandle(
    ref,
    () => ({
      trigger: () => {
        setData(to);
        onTransition && onTransition(data, to);
        manuallyTriggered.current = true;
      },
      reset: () => {
        setData(from);
        onTransition && onTransition(data, from);
        manuallyTriggered.current = true;
      },
    }),
    [to, from]
  );

  useEffect(() => {
    if (typeof after === "number") {
      const timeout = setTimeout(() => {
        if (!manuallyTriggered.current) {
          onTransition && onTransition(data, to);
          setData(to);
        }
      }, after);
      return () => clearTimeout(timeout);
    }
  }, [to, after]);

  return <>{render(data)}</>;
}

const Transition = React.forwardRef(TransitionInner) as <T>(
  props: Props<T> & { ref?: React.ForwardedRef<TransitionRef> }
) => ReturnType<typeof TransitionInner>;

export default Transition;
