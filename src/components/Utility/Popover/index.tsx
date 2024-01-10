import React, { useRef } from "react";
import { DismissButton, Overlay, usePopover } from "react-aria";
import type { AriaPopoverProps } from "react-aria";
import type { OverlayTriggerState } from "react-stately";
import { HasClassName } from "../../../types";
import classNames from "classnames";

export function PopoverWrapper({ children }) {
  return <div style={{ position: "relative" }}>{children}</div>;
}

export interface PopoverProps
  extends Omit<AriaPopoverProps, "popoverRef">,
    HasClassName {
  children: React.ReactNode;
  state: OverlayTriggerState;
}

export default function Popover({
  children,
  state,
  offset = 8,
  ...props
}: PopoverProps) {
  let popoverRef = useRef(null);
  let { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      offset,
      popoverRef,
    },
    state
  );

  return (
    <Overlay>
      <div {...underlayProps} className="aje-popover-underlay" />
      <div
        {...popoverProps}
        ref={popoverRef}
        className={classNames("aje-popover", props.className)}
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}
