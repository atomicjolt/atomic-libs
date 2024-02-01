import React, { useRef } from "react";
import type { AriaDialogProps } from "react-aria";
import { useDialog } from "react-aria";
import { HasChildren } from "../../../types";
import { DialogTitle, DialogWrapper } from "./Dialog.styles";

interface DialogProps extends AriaDialogProps, HasChildren {
  title?: React.ReactNode;
}

/**Provides the behavior and accessibility implementation for a dialog component.
 * A dialog is an overlay shown above other content in an application.
 * This component is intended to be combined with either `<Popover/>` for
 * inline dialogs, or with a trigger element and `useOverlay` for modal dialogs.
 * */
export function Dialog(props: DialogProps) {
  const { title, children, ...rest } = props;
  let ref = useRef(null);
  let { dialogProps, titleProps } = useDialog(rest, ref);

  return (
    <DialogWrapper {...dialogProps} ref={ref}>
      {title && <DialogTitle {...titleProps}>{title}</DialogTitle>}
      {children}
    </DialogWrapper>
  );
}
