import React, { RefObject, useEffect, useMemo, useRef, useState } from "react";
import cn from "classnames";
import { HasClassName, Sizes } from "../../../types";

export type PopoverPosition =
  | "bottom-right"
  | "bottom-left"
  | "top-right"
  | "top-left"
  | "left"
  | "right";

export interface PopoverProps extends HasClassName {
  children: React.ReactNode;
  size?: Sizes;
  show?: boolean;
  position?: PopoverPosition;
}

interface RelativeBoundingRect {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

enum Side {
  Top = "top",
  Bottom = "bottom",
  Left = "left",
  Right = "right",
}

function getScrollParent(node: HTMLElement | null): HTMLElement {
  while (node !== null) {
    if (node.scrollHeight > node.clientHeight) {
      return node;
    } else {
      node = node.parentElement;
    }
  }

  return node || document.body;
}

function useIntersectionObserver(
  ref: RefObject<HTMLElement>,
  callback: (entry: IntersectionObserverEntry, parent: HTMLElement) => void
) {
  console.log(ref);

  useEffect(() => {
    if (ref.current) {
      const parent = getScrollParent(ref.current);
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];

          callback(entry, parent);
        },
        { threshold: [0, 1], root: parent }
      );
      observer.observe(ref.current);
      // return () => observer.disconnect();
    }
    return () => {};
  }, [ref.current]);
}

function useOverflow(
  ref: RefObject<HTMLElement>,
  callback: (overflowSide: Side) => void
) {
  useIntersectionObserver(ref, (entry, parent) => {
    if (entry.isIntersecting) {
      console.log("We're visible!");
    } else {
      const parentPos = parent.getBoundingClientRect();
      const relativeBounds: RelativeBoundingRect = {
        top: entry.boundingClientRect.top - parentPos.top,
        bottom: parentPos.bottom - entry.boundingClientRect.bottom,
        left: entry.boundingClientRect.left - parentPos.left,
        right: parentPos.right - entry.boundingClientRect.right,
      };
      console.log(relativeBounds);
    }

    // const { top, bottom, left, right } = entry.boundingClientRect;
    // let side: Side;

    // if (top < 0) {
    //   side = Side.Top;
    // } else if (bottom < 0) {
    //   side = Side.Bottom;
    // } else if (left < 0) {
    //   side = Side.Left;
    // } else {
    //   side = Side.Right;
    // }

    // callback(side);
  });
}

const PositionNegotiationLookup: Record<
  Side,
  Record<Partial<PopoverPosition>, Partial<PopoverPosition>>
> = {
  [Side.Top]: {
    "bottom-right": "top-right",
    "bottom-left": "top-left",
    "top-right": "bottom-right",
    "top-left": "bottom-left",
    left: "bottom-left",
    right: "bottom-right",
  },
  [Side.Bottom]: {
    "bottom-right": "top-right",
    "bottom-left": "top-left",
    "top-right": "top-right",
    "top-left": "top-left",
    left: "top-left",
    right: "top-right",
  },
  [Side.Left]: {
    "bottom-right": "top-right",
    "bottom-left": "top-left",
    "top-right": "bottom-right",
    "top-left": "bottom-left",
    left: "right",
    right: "left",
  },
  [Side.Right]: {
    "bottom-right": "bottom-left",
    "bottom-left": "left",
    "top-right": "top-left",
    "top-left": "bottom-left",
    left: "right",
    right: "left",
  },
};

function defaultPositionNegotiator(side: Side, postion: PopoverPosition) {
  return PositionNegotiationLookup[side][postion];
}

export default function Popover(props: PopoverProps) {
  const {
    children,
    show,
    size = "auto",
    position: initialPosition = "bottom-left",
    className,
  } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<PopoverPosition>(initialPosition);

  // useEffect(() => {
  //   if (ref.current) {
  //     const parent = getScrollParent(ref.current);
  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         const entry = entries[0];
  //         console.log(entry);
  //       },
  //       { threshold: [0, 1], root: parent }
  //     );
  //     observer.observe(ref.current);
  //     // console.log(parent.clientHeight);
  //     // console.log(parent.clientLeft);
  //   }
  // }, []);

  useOverflow(ref, (side) => {
    console.log(side);
    // console.log();
    setPosition(defaultPositionNegotiator(side, position));
  });

  return (
    <div
      className={cn(
        "aje-popover",
        className,
        `is-${size}`,
        `aje-popover-${position}`,
        {
          "is-visible": show,
        }
      )}
      ref={ref}
    >
      {children}
    </div>
  );
}

interface PopoverWrapperProps {
  children: React.ReactNode;
}

/** Optional wrapper for the Popover that simple is a div with `postion: relatve` */
export function PopoverWrapper(props: PopoverWrapperProps) {
  const { children } = props;

  return <div className={cn("aje-popover__wrapper")}>{children}</div>;
}
