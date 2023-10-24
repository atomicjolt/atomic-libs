import React from "react";
import Popover from "../Popover";
import { BasePopoverProps } from "../Popover/Popover.types";
import { ToolTipWrapper } from "./ToolTip.styles";
import { HasClassName } from "../../../types";
import classNames from "classnames";

export interface ToolTipProps extends BasePopoverProps, HasClassName {
  children: React.ReactNode;
  tip: React.ReactNode;
}

/** Provide a tooltip when you hover over an element */
export default function ToolTip(props: ToolTipProps) {
  const { children, tip, position = "top", className, ...rest } = props;

  return (
    <ToolTipWrapper className={classNames("aje-tip", className)}>
      {children}
      <Popover position={position} {...rest}>
        {tip}
      </Popover>
    </ToolTipWrapper>
  );
}
