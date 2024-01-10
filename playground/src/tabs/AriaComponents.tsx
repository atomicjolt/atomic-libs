import React, { useRef } from "react";
import { useOverlayTrigger } from "react-aria";
import { useOverlayTriggerState } from "react-stately";
import { Button, Popover, ToolTip } from "../elements";

function PopoverTrigger({ label, children, ...props }) {
  let ref = useRef(null);
  let state = useOverlayTriggerState(props);
  let { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    state,
    ref
  );

  return (
    <>
      <Button {...triggerProps} ref={ref}>
        {label}
      </Button>
      {state.isOpen && (
        <Popover {...props} triggerRef={ref} state={state}>
          {React.cloneElement(children, overlayProps)}
        </Popover>
      )}
    </>
  );
}

export default function AriaComponents() {
  return (
    <div>
      <ToolTip tip="Test" delay={0} closeDelay={0}>
        <Button>Test</Button>
      </ToolTip>
    </div>
  );
}
