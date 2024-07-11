import React, { useCallback, useContext, useState } from "react";
import {
  AriaPopoverProps,
  DismissButton,
  Overlay,
  usePopover,
} from "@react-aria/overlays";
import { OverlayTriggerProps, useOverlayTriggerState } from "react-stately";
import cn from "classnames";

import { HasClassName, HasVariant } from "../../../types";
import { PopoverUnderlay, PopoverContent } from "./Popover.styles";
import { useForwardedRef } from "../../../hooks/useForwardedRef";
import { PopoverContext } from "./context";
import { useContextProps } from "../../../hooks/useContextProps";
import { useResizeObserver } from "../../../hooks/useResizeObserver";
import { OverlayTriggerStateContext } from "../OverlayTrigger/context";
import { useRenderProps } from "../../..";
import { mergeProps } from "@react-aria/utils";

export interface PopoverProps
  extends Omit<AriaPopoverProps, "popoverRef" | "triggerRef">,
    OverlayTriggerProps,
    HasClassName,
    HasVariant<"listbox" | "menu"> {
  children: React.ReactNode;
  /** A ref to the element that triggers the popover to appear. Not necessary when used with trigger wrapper */
  triggerRef?: React.RefObject<HTMLElement>;
  id?: string;
}

/** A popover is an overlay element positioned relative to a target. */
export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  (props: PopoverProps, ref) => {
    const contextProps = useContextProps(PopoverContext, props);
    const { children, offset = 8, triggerRef, variant, ...rest } = contextProps;
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

    const renderProps = useRenderProps({
      componentClassName: "aje-popover",
      ...contextProps,
    });

    if (!state.isOpen) {
      return null;
    }

    return (
      <Overlay>
        <PopoverUnderlay {...underlayProps} className="aje-popover-underlay" />
        <PopoverContent
          ref={internalRef}
          id={rest.id}
          {...mergeProps(popoverProps, renderProps)}
          style={{
            ...popoverProps.style,
            ...renderProps.style,
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
