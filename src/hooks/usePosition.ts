import { RefObject, useEffect, useMemo, useState } from "react";
import { getScrollParent } from "../utils";
import useIntersectionObserver from "./useIntersectionObserver";

export type PositionNegotiationFunction<P> = (side: Side, position: P) => P;

interface UsePositionOptions<P> {
  initialPosition: P;
  positionaNegotiator: PositionNegotiationFunction<P>;
}

export enum Side {
  Top = "top",
  Bottom = "bottom",
  Left = "left",
  Right = "right",
}

export default function useRelativePosition<P>(
  ref: RefObject<HTMLElement>,
  options: UsePositionOptions<P>
): P {
  const { initialPosition, positionaNegotiator } = options;
  const parent = useMemo(() => getScrollParent(ref.current), [ref.current]);
  const [position, setPosition] = useState<P>(initialPosition);

  const entry = useIntersectionObserver(ref, {
    root: parent,
    threshold: 0.5,
  });
  console.log(entry);

  useEffect(() => {
    if (entry && !entry.isIntersecting) {
      const parentPos = parent.getBoundingClientRect();
      const top = entry.boundingClientRect.top - parentPos.top;
      const bottom = parentPos.bottom - entry.boundingClientRect.bottom;
      const left = entry.boundingClientRect.left - parentPos.left;
      const right = parentPos.right - entry.boundingClientRect.right;

      let side: Side | null = null;

      if (top < 0) {
        side = Side.Top;
      } else if (bottom < 0) {
        side = Side.Bottom;
      } else if (left < 0) {
        side = Side.Left;
      } else if (right < 0) {
        side = Side.Right;
      }

      if (side) {
        setPosition(positionaNegotiator(side!, position));
      }
    } /* else if (initialPosition !== position) {
      setPosition(initialPosition);
    }
 */
  }, [entry, initialPosition]);

  return position;
}
