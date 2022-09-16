import React from "react";
import Button from "../../Buttons/Button";
import PopupModal from "../PopupModal";
import { makeOptionaCallback } from "../../../utils";

export interface ConfirmationModalProps {
  open?: boolean;
  /** Must include a title. Titles are always in Title case. */
  title: string;
  children: React.ReactNode;
  /** Should be descriptive instead of yes or no.
   * If you're confirming you want to delete something,
   * Delete is an appropriate string to use. */
  confirmText: string;
  /** This will replace 'Cancel' as the negative action.
   * Sometimes you might need it to say 'Close' or something instead. */
  rejectText?: string;

  /** Called when the user clicks on the button with `confirmText` */
  onConfirm?: () => void;
  /** Called when the user clicks on the button with `rejectText` */
  onReject?: () => void;
}

/**
 * Confirmation Modal Component
 *
 * For when you need a small modal to confirm an action, like deleting a record
 * */
export default function ConfirmationModal({
  open = false,
  title,
  children,
  confirmText,
  rejectText = "Cancel",
  onConfirm,
  onReject,
}: ConfirmationModalProps) {
  return (
    <PopupModal
      open={open}
      title={title}
      actions={[
        <Button variant="secondary" onClick={makeOptionaCallback(onReject)}>
          {rejectText}
        </Button>,
        <Button variant="primary" onClick={makeOptionaCallback(onConfirm)}>
          {confirmText}
        </Button>,
      ]}
    >
      {children}
    </PopupModal>
  );
}
