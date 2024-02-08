import React, { useRef } from "react";
import Popover from "../Popover";
import { BasePopoverProps } from "../Popover/Popover.types";
import { ToolTipWrapper } from "./ToolTip.styles";
import { HasChildren, HasClassName } from "../../../types";
import classNames from "classnames";
import {
  mergeProps,
  useTooltip,
  useTooltipTrigger,
  TooltipTriggerProps,
} from "react-aria";
import { useTooltipTriggerState } from "react-stately";
import Button from "../../Buttons/Button";

function ToolTipContent({ state, ...props }) {
  let { tooltipProps } = useTooltip(props, state);

  return (
    <span
      style={{
        position: "absolute",
        left: "5px",
        top: "100%",
        maxWidth: 150,
        marginTop: "10px",
        backgroundColor: "white",
        color: "black",
        padding: "5px",
        border: "1px solid gray",
      }}
      {...mergeProps(props, tooltipProps)}
    >
      {props.children}
    </span>
  );
}

export interface ToolTipProps extends TooltipTriggerProps, HasChildren {
  tip: React.ReactNode;
}

/** Provide a tooltip when you hover over an element */
export default function ToolTip(props: ToolTipProps) {
  let state = useTooltipTriggerState(props);
  let ref = useRef(null);

  let { triggerProps, tooltipProps } = useTooltipTrigger(props, state, ref);

  return (
    <span style={{ position: "relative" }}>
      {/* TODO: for some reason I can't use the button component for somewhat unclear reasons */}
      <Button {...triggerProps} ref={ref}>
        Press Me
      </Button>
      {state.isOpen && (
        <ToolTipContent state={state} {...tooltipProps}>
          {props.tip}
        </ToolTipContent>
      )}
    </span>
  );
}
