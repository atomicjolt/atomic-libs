import React, { useCallback, useContext, useMemo, useState } from "react";
import {
  AriaPopoverProps,
  DismissButton,
  Overlay,
  usePopover,
} from "@react-aria/overlays";
import { OverlayTriggerProps, useOverlayTriggerState } from "react-stately";
import { mergeProps } from "@react-aria/utils";

import { HasClassName, HasVariant } from "../../../types";
import { useRenderProps } from "@hooks";
import { useContextProps } from "@hooks/useContextProps";
import { useResizeObserver } from "@hooks/useResizeObserver";
import { useForwardedRef } from "@hooks/useForwardedRef";
import { PopoverUnderlay, PopoverContent } from "./Popover.styles";
import { PopoverContext } from "./context";
import { OverlayTriggerStateContext } from "../OverlayTrigger/context";
import { invertPlacementAxis } from "@utils/placement";

export interface PopoverProps
  extends Omit<AriaPopoverProps, "popoverRef" | "triggerRef">,
    OverlayTriggerProps,
    HasClassName,
    HasVariant<"listbox" | "menu" | "datepicker"> {
  children: React.ReactNode;
  /** A ref to the element that triggers the popover to appear. Not necessary when used with trigger wrapper */
  triggerRef?: React.RefObject<HTMLElement>;
  id?: string;
}

/** A popover is an overlay element positioned relative to a target. */
export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  (props: PopoverProps, ref) => {
    const contextProps = useContextProps(PopoverContext, props);
    const {
      children,
      offset = 8,
      triggerRef,
      variant,
      placement = "bottom",
      ...rest
    } = contextProps;
    const contextState = useContext(OverlayTriggerStateContext);
    const localState = useOverlayTriggerState(props);
    const state = contextState ?? localState;

    const internalRef = useForwardedRef(ref);

    const { popoverProps, underlayProps } = usePopover(
      {
        ...rest,
        placement,
        offset,
        triggerRef: triggerRef!,
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

    const transformOrigin = invertPlacementAxis(placement);

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
          $transformOrigin={transformOrigin}
        >
          <DismissButton onDismiss={state.close} />
          {children}
          <DismissButton onDismiss={state.close} />
        </PopoverContent>
      </Overlay>
    );
  }
);
