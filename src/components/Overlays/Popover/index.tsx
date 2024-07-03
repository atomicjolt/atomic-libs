import React, { useCallback, useContext, useState } from "react";
import {
  AriaPopoverProps,
  DismissButton,
  Overlay,
  usePopover,
} from "@react-aria/overlays";
import { OverlayTriggerProps, useOverlayTriggerState } from "react-stately";
import cn from "classnames";

import { HasClassName } from "../../../types";
import { PopoverUnderlay, PopoverContent } from "./Popover.styles";
import { useForwardedRef } from "../../../hooks/useForwardedRef";
import { PopoverContext } from "./context";
import { useContextProps } from "../../../hooks/useContextProps";
import { useResizeObserver } from "../../../hooks/useResizeObserver";
import { OverlayTriggerStateContext } from "../OverlayTrigger/context";

export interface PopoverProps
  extends Omit<AriaPopoverProps, "popoverRef" | "triggerRef">,
    OverlayTriggerProps,
    HasClassName {
  children: React.ReactNode;
  /** A ref to the element that triggers the popover to appear. Not necessary when used with trigger wrapper */
  triggerRef?: React.RefObject<HTMLElement>;
  id?: string;
}

/** A popover is an overlay element positioned relative to a target. */
export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  (props: PopoverProps, ref) => {
    const contextProps = useContextProps(PopoverContext, props);
    const { children, offset = 4, triggerRef, ...rest } = contextProps;
    const contextState = useContext(OverlayTriggerStateContext);
    const localState = useOverlayTriggerState(props);
    const state = contextState ?? localState;

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
          id={rest.id}
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
