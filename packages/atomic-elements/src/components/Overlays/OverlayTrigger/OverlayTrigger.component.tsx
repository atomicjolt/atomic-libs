import { useRef } from "react";
import { useOverlayTrigger } from "@react-aria/overlays";
import { PressResponder } from "@react-aria/interactions";
import {
  OverlayTriggerProps as RSOverlayTriggerProps,
  useOverlayTriggerState,
} from "react-stately";

import { PopoverContext } from "../Popover/Popover.context";
import { Provider } from "../../Internal/Provider";
import { HasChildren } from "../../../types";
import { OverlayTriggerStateContext } from "./context";
import { ModalContext } from "../Modal/Modal.context";

export interface OverlayTriggerProps
  extends RSOverlayTriggerProps,
    HasChildren {
  type?: "dialog" | "menu" | "listbox" | "tree" | "grid";
}

/**
 * OverlayTrigger wraps a trigger target & a overlay element.
 * When the target is clicked, the overlay will be opened.
 * */
export function OverlayTrigger(props: OverlayTriggerProps) {
  const state = useOverlayTriggerState(props);
  const ref = useRef<HTMLElement>(null);
  const { type = "dialog" } = props;
  const { overlayProps, triggerProps } = useOverlayTrigger(
    { type },
    state,
    ref
  );

  return (
    <Provider
      values={[
        [OverlayTriggerStateContext.Provider, state],
        [
          PopoverContext.Provider,
          { triggerRef: ref, isOpen: state.isOpen, ...overlayProps },
        ],
        [
          ModalContext.Provider,
          {
            triggerRef: ref,
            ...overlayProps,
          },
        ],
      ]}
    >
      <PressResponder {...triggerProps} ref={ref} isPressed={state.isOpen}>
        {props.children}
      </PressResponder>
    </Provider>
  );
}
