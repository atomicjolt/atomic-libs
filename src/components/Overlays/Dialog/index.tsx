import React, { useRef } from "react";
import type { AriaDialogProps } from "react-aria";
import { useDialog } from "react-aria";
import { HasChildren } from "../../../types";
import { DialogTitle, DialogTop, DialogWrapper } from "./Dialog.styles";
import IconButton from "../../Buttons/IconButton";

interface DialogProps extends AriaDialogProps, HasChildren {
  title?: React.ReactNode;
  top?: React.ReactNode;
}

/**Provides the behavior and accessibility implementation for a dialog component.
 * A dialog is an overlay shown above other content in an application.
 * This component is intended to be combined with either `<Popover/>` for
 * inline dialogs, or with `<Modal/>` for modal dialogs.
 * */
export function Dialog(props: DialogProps) {
  const { title, top, children, ...rest } = props;
  let ref = useRef(null);
  let { dialogProps, titleProps } = useDialog(rest, ref);

  return (
    <DialogWrapper {...dialogProps} ref={ref} className="aje-dialog">
      <DialogTop>
        {title && (
          <DialogTitle {...titleProps} className="aje-dialog__title">
            {title}
          </DialogTitle>
        )}
        {top}
      </DialogTop>
      {children}
    </DialogWrapper>
  );
}
