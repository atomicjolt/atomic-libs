import React, { useRef } from "react";
import cn from "classnames";
import useRelativePosition from "../../../hooks/useRelativePosition";
import { StyledPopover } from "./Popover.styles";
import { PopoverPosition, PopoverProps } from "./Popover.types";
import { defaultPositionNegotiator } from "./positioning";

export { PopoverWrapper } from "./Popover.styles";

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

  const position = useRelativePosition<PopoverPosition>(ref, {
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
    <StyledPopover ref={ref} className={classNames}>
      {children}
    </StyledPopover>
  );
}
