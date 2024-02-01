import React, { useRef } from "react";
import { DismissButton, Overlay, usePopover } from "react-aria";
import type { AriaPopoverProps } from "react-aria";
import type { OverlayTriggerState } from "react-stately";
import { HasClassName } from "../../../types";
import cn from "classnames";
import { PopoverUnderlay, PopoverContent } from "./Popover.styles";

export { PopoverWrapper } from "./Popover.styles";

export interface PopoverProps
  extends Omit<AriaPopoverProps, "popoverRef">,
    HasClassName {
  children: React.ReactNode;
  state: OverlayTriggerState;
}

export default function Popover({
  children,
  state,
  offset = 8,
  ...props
}: PopoverProps) {
  let popoverRef = useRef(null);
  let { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      offset,
      popoverRef,
    },
    state
  );

  return (
    <Overlay>
      <PopoverUnderlay {...underlayProps} className="aje-popover-underlay" />
      <PopoverContent
        {...popoverProps}
        ref={popoverRef}
        className={cn("aje-popover", props.className)}
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </PopoverContent>
    </Overlay>
  );
}
