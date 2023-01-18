import React, { useRef } from "react";
import cn from "classnames";
import useRelativePosition from "../../../hooks/useRelativePosition";
import { StyledPopover } from "./Popover.styles";
import { PopoverPosition, PopoverProps } from "./Popover.types";
import { defaultPositionNegotiator } from "./positioning";

export { PopoverWrapper } from "./Popover.styles";

// TODO: figure out a way to get the popover to
// reset back to it's original position when it can

/**
 * The Popover component is intended as a simple primitive to
 * place one component relative to another. It is used to implement the
 * dropdowns for the `<CustomSelect />` among other things.
 *
 * The Popover is positioned absolutley, so you need to add a position relative
 * ancestor for it to be placed around. atomic-elements provides `<PopoverWrapper />` as
 * a convenience component to do that for you.
 */
export default function Popover(props: PopoverProps) {
  const {
    children,
    show,
    size = "auto",
    position: initialPosition = "bottom-left",
    negotiatePosition = defaultPositionNegotiator,
    className,
  } = props;
  const ref = useRef<HTMLDivElement>(null);

  const position = useRelativePosition<PopoverPosition>(ref, {
    initialPosition: initialPosition,
    positionaNegotiator: negotiatePosition,
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
