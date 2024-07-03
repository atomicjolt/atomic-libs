import { useContext, useRef } from "react";
import classNames from "classnames";
import {
  Overlay,
  useOverlayPosition,
  AriaPositionProps,
  PositionProps,
} from "@react-aria/overlays";
import { useTooltip } from "@react-aria/tooltip";
import { OverlayTriggerProps } from "react-stately";

import { ToolTipArrow, ToolTipOverlay } from "./ToolTip.styles";
import { HasChildren, HasClassName } from "../../../types";
import { TooltipContext, TooltipStateContext } from "./contexts";
import { useContextProps } from "../../../hooks/useContextProps";

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
  triggerRef?: React.RefObject<Element>;
  /* Placement of the tooltip relative to the target element */
  placement?: "right" | "left" | "top" | "bottom";
}

/** A ToolTip component displays a popup with additional information when a user hovers over or focuses on an element. */
export function ToolTip(props: ToolTipProps) {
  const { triggerRef, ...rest } = useContextProps(TooltipContext, props);
  const state = useContext(TooltipStateContext);
  const ref = useRef(null);

  const { tooltipProps } = useTooltip({ ...rest }, state);

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
        className={classNames("aje-tooltip", props.className)}
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
