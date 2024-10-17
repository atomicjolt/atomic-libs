import React, { useCallback, useContext, useMemo, useState } from "react";
import {
  AriaPopoverProps,
  DismissButton,
  Overlay,
  usePopover,
} from "@react-aria/overlays";
import {
  OverlayTriggerProps,
  OverlayTriggerState,
  useOverlayTriggerState,
} from "react-stately";
import { mergeProps } from "@react-aria/utils";

import { RenderBaseProps, HasVariant } from "../../../types";
import { useRenderProps } from "@hooks";
import { useContextProps } from "@hooks/useContextProps";
import { useResizeObserver } from "@hooks/useResizeObserver";
import { useForwardedRef } from "@hooks/useForwardedRef";
import { PopoverUnderlay, PopoverContent } from "./Popover.styles";
import { PopoverContext } from "./context";
import { OverlayTriggerStateContext } from "../OverlayTrigger/context";
import { invertPlacementAxis } from "@utils/placement";
import { useIsHidden } from "@react-aria/collections";

export interface PopoverRenderProps {
  /** Width in pixels of the triggering element that opened this popover  */
  triggerWidth: number;
}

export interface PopoverProps
  extends Omit<AriaPopoverProps, "popoverRef" | "triggerRef">,
    OverlayTriggerProps,
    RenderBaseProps<PopoverRenderProps>,
    HasVariant<"listbox" | "menu" | "datepicker"> {
  /** A ref to the element that triggers the popover to appear. Not necessary when used with trigger wrapper */
  triggerRef?: React.RefObject<HTMLElement>;
  id?: string;
}

/** A popover is an overlay element positioned relative to a target. */
export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  (props: PopoverProps, ref) => {
    const contextProps = useContextProps(PopoverContext, props);
    const { triggerRef, ...rest } = contextProps;

    const contextState = useContext(OverlayTriggerStateContext);
    const localState = useOverlayTriggerState(props);
    const state = contextState ?? localState;

    const isHidden = useIsHidden();

    if (isHidden) {
      return typeof props.children === "function"
        ? props.children({ triggerWidth: 0 })
        : props.children;
    }

    if (!state.isOpen) {
      return null;
    }

    return (
      <PopoverInternal
        {...rest}
        popoverRef={ref}
        triggerRef={triggerRef!}
        state={state}
      />
    );
  }
);

interface PopoverInternalProps extends PopoverProps {
  popoverRef: React.ForwardedRef<HTMLDivElement>;
  triggerRef: React.RefObject<HTMLElement>;
  state: OverlayTriggerState;
}

const PopoverInternal = (props: PopoverInternalProps) => {
  const {
    children,
    offset = 8,
    placement = "bottom",
    triggerRef,
    popoverRef,
    state,
    ...rest
  } = props;

  const internalRef = useForwardedRef(popoverRef);

  const {
    popoverProps,
    underlayProps,
    placement: placementAxis,
  } = usePopover(
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
    triggerRef?.current?.offsetWidth || 0
  );

  useResizeObserver(
    triggerRef?.current,
    useCallback(
      () => setTriggerWidth(triggerRef?.current?.offsetWidth || 0),
      []
    )
  );

  const renderProps = useRenderProps({
    componentClassName: "aje-popover",
    values: { triggerWidth },
    ...props,
  });

  const transformOrigin = invertPlacementAxis(placementAxis);

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
          "--trigger-width": `${triggerWidth}px`,
        }}
        $transformOrigin={transformOrigin}
      >
        <DismissButton onDismiss={state.close} />
        {renderProps.children}
        <DismissButton onDismiss={state.close} />
      </PopoverContent>
    </Overlay>
  );
};
