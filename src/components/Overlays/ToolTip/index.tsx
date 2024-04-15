import React, { useRef } from "react";
import type { DOMAttributes } from "@react-types/shared";
import { TooltipTriggerState, useTooltipTriggerState } from "react-stately";
import {
  TooltipTriggerProps,
  mergeProps,
  useTooltip,
  useTooltipTrigger,
} from "react-aria";
import { StyledToolTipBox, TooltipWrapper } from "./ToolTip.styles";
import { HasClassName } from "../../../types";
import classNames from "classnames";

interface ToolTipBoxProps
  extends Omit<DOMAttributes<HTMLElement>, "className">,
    HasClassName {
  state: TooltipTriggerState;
}

function ToolTipBox(props: ToolTipBoxProps) {
  const { state, className, ...rest } = props;
  const { tooltipProps } = useTooltip(rest, state);

  return (
    <StyledToolTipBox
      className={classNames("aje-tooltip", className)}
      {...mergeProps(rest, tooltipProps)}
    >
      {props.children}
    </StyledToolTipBox>
  );
}

export interface ToolTipProps<P extends DOMAttributes>
  extends TooltipTriggerProps,
    HasClassName {
  /** The trigger for the tooltip. Must be focusable & accept a `ref` */
  children: React.ReactElement<P>;
  /** The content of the tooltip */
  tooltip: React.ReactNode;
}

export function ToolTip<P extends DOMAttributes>(props: ToolTipProps<P>) {
  const { className, children, tooltip, ...rest } = props;
  const state = useTooltipTriggerState(rest);
  const ref = useRef(null);

  const { triggerProps, tooltipProps } = useTooltipTrigger(props, state, ref);

  const child = React.cloneElement(React.Children.only(children), {
    ...triggerProps,
    // TODO: Fix this
    // @ts-ignore
    ref,
  });

  return (
    <TooltipWrapper>
      {child}
      {state.isOpen && (
        <ToolTipBox state={state} className={className} {...tooltipProps}>
          {tooltip}
        </ToolTipBox>
      )}
    </TooltipWrapper>
  );
}
