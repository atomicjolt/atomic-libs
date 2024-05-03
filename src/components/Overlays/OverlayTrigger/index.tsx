import React, { useRef } from "react";
import {
  useOverlayTrigger,
  OverlayTriggerProps as RAOverlayTriggerProps,
} from "react-aria";
import {
  OverlayTriggerProps as RSOverlayTriggerProps,
  useOverlayTriggerState,
} from "react-stately";
import { PressResponder } from "@react-aria/interactions";
import { PopoverContext } from "../Popover/context";
import { Provider } from "../../Internal/Provider";
import { HasChildren } from "../../../types";
import { OverlayTriggerStateContext } from "./context";

export interface OverlayTriggerProps
  extends RSOverlayTriggerProps,
    RAOverlayTriggerProps,
    HasChildren {}

/**
 * Overlay trigger wraps a trigger target & a popover element.
 * When the target is clicked, the overlay will be opened
 * */
export function OverlayTrigger(props: OverlayTriggerProps) {
  const state = useOverlayTriggerState(props);
  const ref = useRef<HTMLElement>(null);
  const { overlayProps, triggerProps } = useOverlayTrigger(props, state, ref);

  return (
    <Provider
      values={[
        [OverlayTriggerStateContext.Provider, state],
        [
          PopoverContext.Provider,
          { triggerRef: ref, isOpen: state.isOpen, ...overlayProps },
        ],
      ]}
    >
      <PressResponder {...triggerProps} ref={ref} isPressed={state.isOpen}>
        {props.children}
      </PressResponder>
    </Provider>
  );
}
