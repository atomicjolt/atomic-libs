import React from "react";
import Popover from "../Popover";
import { BasePopoverProps } from "../Popover/Popover.types";
import { ToolTipWrapper } from "./ToolTip.styles";

export interface ToolTipProps extends BasePopoverProps {
  children: React.ReactNode;
  tip: React.ReactNode;
}

/** Provide a tooltip when you hover over an element */
export default function ToolTip(props: ToolTipProps) {
  const { children, tip, position = "top", ...rest } = props;

  return (
    <ToolTipWrapper className="aje-tip">
      {children}
      <Popover position={position} {...rest}>
        {tip}
      </Popover>
    </ToolTipWrapper>
  );
}
