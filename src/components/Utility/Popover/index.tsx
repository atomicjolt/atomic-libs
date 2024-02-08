import React from "react";
import { DismissButton, Overlay, usePopover } from "react-aria";
import type { AriaPopoverProps } from "react-aria";
import type { OverlayTriggerState } from "react-stately";
import { HasClassName } from "../../../types";
import cn from "classnames";
import { PopoverUnderlay, PopoverContent } from "./Popover.styles";
import useForwardedRef from "../../../hooks/useForwardedRef";

export { PopoverWrapper } from "./Popover.styles";

export interface PopoverProps
  extends Omit<AriaPopoverProps, "popoverRef">,
    HasClassName {
  children: React.ReactNode;
  state: OverlayTriggerState;
}

export default React.forwardRef<HTMLDivElement, PopoverProps>(function Popover(
  props: PopoverProps,
  ref
) {
  const { children, state, offset = 4, ...rest } = props;
  const internalRef = useForwardedRef(ref);
  const { popoverProps, underlayProps } = usePopover(
    {
      ...rest,
      offset,
      popoverRef: internalRef,
    },
    state
  );

  return (
    <Overlay>
      <PopoverUnderlay {...underlayProps} className="aje-popover-underlay" />
      <PopoverContent
        {...popoverProps}
        ref={internalRef}
        className={cn("aje-popover", props.className)}
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </PopoverContent>
    </Overlay>
  );
});
