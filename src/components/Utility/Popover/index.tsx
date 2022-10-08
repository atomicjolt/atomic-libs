import React, { useRef } from "react";
import cn from "classnames";
import { HasClassName, Sizes } from "../../../types";
import usePosition, {
  PositionNegotiationFunction,
  Side,
} from "../../../hooks/usePosition";

export type PopoverPosition =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "bottom-right"
  | "bottom-left"
  | "top-right"
  | "top-left";

export interface PopoverProps extends HasClassName {
  children: React.ReactNode;
  size?: Sizes;
  show?: boolean;
  position?: PopoverPosition;
  negotioatePosition?: PositionNegotiationFunction<PopoverPosition>;
}

const PositionNegotiationLookup: Record<
  Side,
  Record<Partial<PopoverPosition>, Partial<PopoverPosition>>
> = {
  [Side.Top]: {
    "bottom-right": "bottom-right",
    "bottom-left": "bottom-left",
    "top-right": "bottom-right",
    "top-left": "bottom-left",
    top: "bottom",
    bottom: "bottom",
    left: "bottom-left",
    right: "bottom-right",
  },
  [Side.Bottom]: {
    "bottom-right": "top-right",
    "bottom-left": "top-left",
    "top-right": "top-right",
    "top-left": "top-left",
    top: "top",
    bottom: "top",
    left: "top-left",
    right: "top-right",
  },
  [Side.Left]: {
    "bottom-right": "right",
    "bottom-left": "bottom-right",
    "top-right": "right",
    "top-left": "top-right",
    top: "right",
    bottom: "right",
    left: "right",
    right: "right",
  },
  [Side.Right]: {
    "bottom-right": "bottom-left",
    "bottom-left": "left",
    "top-right": "top-left",
    "top-left": "bottom-left",
    top: "left",
    bottom: "left",
    left: "left",
    right: "left",
  },
};

function defaultPositionNegotiator(side: Side, position: PopoverPosition) {
  return PositionNegotiationLookup[side][position];
}

export default function Popover(props: PopoverProps) {
  const {
    children,
    show,
    size = "auto",
    position: initialPosition = "bottom-left",
    negotioatePosition = defaultPositionNegotiator,
    className,
  } = props;
  const ref = useRef<HTMLDivElement>(null);

  const position = usePosition<PopoverPosition>(ref, {
    initialPosition: initialPosition,
    positionaNegotiator: negotioatePosition,
  });

  const classNames = cn(
    "aje-popover",
    className,
    `is-${size}`,
    `aje-popover-${position}`,
    { "is-visible": show }
  );

  return (
    <div className={classNames} ref={ref}>
      {children}
    </div>
  );
}

interface PopoverWrapperProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "className">,
    HasClassName {
  children: React.ReactNode;
}

/** Optional wrapper for the Popover that simple is a div with `postion: relatve` */
export function PopoverWrapper(props: PopoverWrapperProps) {
  const { children, className, ...rest } = props;

  return (
    <div className={cn("aje-popover__wrapper", className)} {...rest}>
      {children}
    </div>
  );
}
