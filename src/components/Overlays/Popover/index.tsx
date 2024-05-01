import React, { useCallback, useContext, useState } from "react";
import { DismissButton, Overlay, mergeProps, usePopover } from "react-aria";
import type { AriaPopoverProps } from "react-aria";
import { type OverlayTriggerState } from "react-stately";
import { HasClassName } from "../../../types";
import cn from "classnames";
import { PopoverUnderlay, PopoverContent } from "./Popover.styles";
import useForwardedRef from "../../../hooks/useForwardedRef";
import { OverlayTriggerStateContext, PopoverContext } from "./context";
import { useContextProps } from "../../../hooks/useContextProps";
import { useResizeObserver } from "../../../hooks/useResizeObserver";

export interface PopoverProps
  extends Omit<AriaPopoverProps, "popoverRef" | "triggerRef">,
    HasClassName {
  children: React.ReactNode;
  /** A ref to the element that triggers the popover to appear. Not necessary when used with `<MenuTrigger>` */
  triggerRef?: React.RefObject<HTMLElement>;
  /** State that handles overlays. Not necessary when used with `<MenuTrigger>` */
  state?: OverlayTriggerState;
}

/** A popover is an overlay element positioned relative to a target. */
export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  (props: PopoverProps, ref) => {
    const contextState = useContext(OverlayTriggerStateContext);
    const contextProps = useContextProps(PopoverContext, props);
    const { children, offset = 4, triggerRef, ...rest } = contextProps;
    const state = (contextProps.state || contextState) as OverlayTriggerState;

    const internalRef = useForwardedRef(ref);

    const { popoverProps, underlayProps } = usePopover(
      {
        ...rest,
        triggerRef: triggerRef!,
        offset,
        popoverRef: internalRef,
      },
      state
    );

    const [triggerWidth, setTriggerWidth] = useState(
      `${triggerRef?.current?.offsetWidth || 0}px`
    );

    useResizeObserver(
      triggerRef?.current,
      useCallback(
        () => setTriggerWidth(`${triggerRef?.current?.offsetWidth || 0}px`),
        []
      )
    );

    if (!state.isOpen) {
      return null;
    }

    return (
      <Overlay>
        <PopoverUnderlay {...underlayProps} className="aje-popover-underlay" />
        <PopoverContent
          ref={internalRef}
          className={cn("aje-popover", props.className)}
          {...popoverProps}
          style={{
            ...popoverProps.style,
            // @ts-ignore
            "--trigger-width": triggerWidth,
          }}
        >
          <DismissButton onDismiss={state.close} />
          {children}
          <DismissButton onDismiss={state.close} />
        </PopoverContent>
      </Overlay>
    );
  }
);
