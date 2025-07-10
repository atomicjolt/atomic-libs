import React from "react";
import { TooltipTriggerState } from "react-stately";
import { ToolTipProps } from "./ToolTip.component";
import { createComponentContext } from "@utils/index";

export const TooltipContext = createComponentContext<ToolTipProps>();

export const TooltipStateContext = React.createContext<TooltipTriggerState>(
  null as any
);
