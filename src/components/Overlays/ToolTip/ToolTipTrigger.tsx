import React, { useRef } from "react";
import type { DOMAttributes } from "@react-types/shared";
import { useTooltipTriggerState } from "react-stately";
import {
  TooltipTriggerProps as AriaTooltipTriggerProps,
  useTooltipTrigger,
} from "react-aria";
import { FocusableProvider } from "@react-aria/focus";
import { HasClassName } from "../../../types";
import { Provider } from "../../Internal/Provider";
import { TooltipContext, TooltipStateContext } from "./contexts";
import { ToolTipProps } from "./ToolTip";

export interface ToolTipTriggerProps<P extends DOMAttributes = DOMAttributes>
  extends AriaTooltipTriggerProps,
    HasClassName {
  children: [React.ReactElement<P>, React.ReactElement<ToolTipProps>];
}

export function ToolTipTrigger<P extends DOMAttributes>(
  props: ToolTipTriggerProps<P>
) {
  const state = useTooltipTriggerState(props);
  const ref = useRef<HTMLElement>(null);
  const { triggerProps, tooltipProps } = useTooltipTrigger(props, state, ref);

  return (
    <Provider
      values={[
        [TooltipStateContext.Provider, state],
        [TooltipContext.Provider, { ...tooltipProps, triggerRef: ref }],
      ]}
    >
      {/* This provides props to any component that uses the useFocusable() hook
          to make it focusable and interactive. This includes components like
          Button and TextInput.
      */}
      <FocusableProvider {...triggerProps} ref={ref}>
        {props.children}
      </FocusableProvider>
    </Provider>
  );
}
