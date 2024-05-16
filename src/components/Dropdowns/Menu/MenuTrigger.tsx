import React, { useRef } from "react";
import { useMenuTrigger } from "react-aria";
import {
  MenuTriggerProps as AriaMenuTriggerProps,
  useMenuTriggerState,
} from "react-stately";
import { PressResponder } from "@react-aria/interactions";
import { HasChildren } from "../../../types";
import { Provider } from "../../Internal/Provider";
import { PopoverContext } from "../../Overlays/Popover/context";
import { MenuContext } from "./context";
import { OverlayTriggerStateContext } from "../../Overlays/OverlayTrigger/context";

export interface MenuTriggerProps<T>
  extends AriaMenuTriggerProps,
    HasChildren {}

/**
 * MenuTrigger wraps a menu target element and a menu, and manages the open state of the menu.
 * When the target element is pressed, the menu will open.
 */
export function MenuTrigger<T>(props: MenuTriggerProps<T>) {
  const { children } = props;
  const state = useMenuTriggerState(props);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger<T>(
    { trigger: props.trigger },
    state,
    buttonRef
  );

  return (
    <Provider
      values={[
        [MenuContext.Provider, menuProps],
        [OverlayTriggerStateContext.Provider, state],
        [
          PopoverContext.Provider,
          { triggerRef: buttonRef, isOpen: state.isOpen },
        ],
      ]}
    >
      <PressResponder
        {...menuTriggerProps}
        ref={buttonRef}
        isPressed={state.isOpen}
      >
        {children}
      </PressResponder>
    </Provider>
  );
}
