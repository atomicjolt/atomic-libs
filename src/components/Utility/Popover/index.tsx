import React from "react";
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

export default function Popover(props: PopoverProps) {
  const { children, show, size, position = "bottom-left", className } = props;

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
    >
      {children}
    </div>
  );
}

interface PopoverWrapperProps {
  children: React.ReactNode;
}

export function PopoverWrapper(props: PopoverWrapperProps) {
  const { children } = props;

  return <div className={cn("aje-popover__wrapper")}>{children}</div>;
}
