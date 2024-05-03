import React, { useContext, useRef } from "react";
import { Overlay, useOverlayPosition, useTooltip } from "react-aria";
import { ToolTipArrow, ToolTipOverlay } from "./ToolTip.styles";
import { RefObject } from "react";
import { AriaPositionProps, PositionProps } from "react-aria";
import { OverlayTriggerProps } from "react-stately";
import { HasChildren, HasClassName } from "../../../types";
import { TooltipContext, TooltipStateContext } from "./contexts";
import classNames from "classnames";

export interface ToolTipProps
  extends PositionProps,
    Pick<AriaPositionProps, "arrowBoundaryOffset">,
    OverlayTriggerProps,
    HasChildren,
    HasClassName {
  /**
   * The ref for the element which the tooltip positions itself with respect to.
   *
   * When used within a TooltipTrigger this is set automatically. It is only required when used standalone.
   */
  triggerRef?: RefObject<Element>;
}

/** A ToolTip component displays a popup with additional information when a user hovers over or focuses on an element. */
export function ToolTip(props: ToolTipProps) {
  const { triggerRef = props.triggerRef, ...passedProps } =
    useContext(TooltipContext);
  const state = useContext(TooltipStateContext);
  const ref = useRef(null);

  const { tooltipProps } = useTooltip({ ...props, ...passedProps }, state);

  const { overlayProps, arrowProps, placement } = useOverlayPosition({
    targetRef: triggerRef!,
    overlayRef: ref,
    isOpen: state.isOpen,
    placement: props.placement || "top",
    offset: props.offset ?? 2,
    crossOffset: props.crossOffset,
    arrowBoundaryOffset: props.arrowBoundaryOffset,
    shouldFlip: props.shouldFlip,
  });

  return (
    <Overlay>
      <ToolTipOverlay
        ref={ref}
        className={classNames(props.className)}
        data-placement={placement}
        data-entering={state.isOpen || undefined}
        data-exiting={!state.isOpen || undefined}
        {...tooltipProps}
        {...overlayProps}
      >
        {props.children}

        <ToolTipArrow {...arrowProps} />
      </ToolTipOverlay>
    </Overlay>
  );
}
