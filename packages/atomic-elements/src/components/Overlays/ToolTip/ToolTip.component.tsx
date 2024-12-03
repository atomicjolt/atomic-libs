import { useContext, useRef } from "react";
import {
  Overlay,
  useOverlayPosition,
  AriaPositionProps,
  PositionProps,
} from "@react-aria/overlays";
import { useTooltip } from "@react-aria/tooltip";
import { OverlayTriggerProps } from "react-stately";
import { Transition } from "react-transition-group";
import { ToolTipArrow, ToolTipOverlay } from "./ToolTip.styles";
import { RenderBaseProps } from "../../../types";
import { TooltipContext, TooltipStateContext } from "./ToolTip.context";
import { useContextPropsV2 } from "../../../hooks/useContextProps";
import { mergeProps } from "@react-aria/utils";
import { useRenderProps } from "@hooks";

export interface ToolTipProps
  extends PositionProps,
    Pick<AriaPositionProps, "arrowBoundaryOffset">,
    OverlayTriggerProps,
    RenderBaseProps<never> {
  /**
   * The ref for the element which the tooltip positions itself with respect to.
   *
   * When used within a TooltipTrigger this is set automatically. It is only required when used standalone.
   */
  triggerRef?: React.RefObject<Element>;

  /* Placement of the tooltip relative to the target element */
  placement?: "right" | "left" | "top" | "bottom";

  /* Time in milliseconds for the tooltip to fade in and out */
  transitionDuration?: number;
}

/** A ToolTip component displays a popup with additional information when a user hovers over or focuses on an element. */
export function ToolTip(props: ToolTipProps) {
  let ref = useRef(null);
  [props, ref] = useContextPropsV2(TooltipContext, props, ref);
  const { triggerRef, transitionDuration = 300, ...rest } = props;

  const state = useContext(TooltipStateContext);

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

  const renderProps = useRenderProps({
    componentClassName: "aje-tooltip",
    ...props,
  });

  const mergedProps = mergeProps(overlayProps, tooltipProps, renderProps);

  return (
    <Overlay>
      <Transition
        nodeRef={ref}
        in={state.isOpen}
        timeout={transitionDuration}
        unmountOnExit
      >
        {(state) => (
          <ToolTipOverlay
            $transitionDuration={transitionDuration}
            ref={ref}
            data-placement={placement}
            {...mergedProps}
            {...{ [`data-${state}`]: true }}
            style={{
              ...mergedProps.style,
              // Override Z-index to be one higher than popovers
              // so tooltips can be used inside of popovers without issue
              zIndex: 100_001,
            }}
          >
            {renderProps.children}
            <ToolTipArrow {...arrowProps} />
          </ToolTipOverlay>
        )}
      </Transition>
    </Overlay>
  );
}
