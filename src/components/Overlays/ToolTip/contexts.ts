import React from "react";
import { TooltipTriggerState } from "react-stately";
import { ToolTipProps } from "./ToolTip";

export const TooltipContext = React.createContext<ToolTipProps>(null as any);

export const TooltipStateContext = React.createContext<TooltipTriggerState>(
  null as any
);
