import React from "react";
import Button from "../../Buttons/Button";
import Modal, { BaseModalProps } from "../Modal";

export interface ConfirmationModalProps extends BaseModalProps {
  /** Must include a title. Titles are always in Title case. */
  title: string;
  /** Should be descriptive instead of yes or no.
   * If you're confirming you want to delete something,
   * Delete is an appropriate string to use. */
  confirmText: string;
  /** This will replace 'Cancel' as the negative action.
   * Sometimes you might need it to say 'Close' or something instead. */
  rejectText?: string;

  /** Called when the user clicks on the button with `confirmText` */
  onConfirm?: () => void;
  /** Called when the user clicks on the button with
   * `rejectText` or when they attempt to close the modal by clicking
   * on the background
   * */
  onReject?: () => void;
}

/**
 * Confirmation Modal Component
 *
 * For when you need a small modal to confirm an action, like deleting a record
 * */
export default function ConfirmationModal({
  title,
  children,
  confirmText,
  rejectText = "Cancel",
  onConfirm,
  onReject,
  ...rest
}: ConfirmationModalProps) {
  return (
    <Modal {...rest} variant="popup">
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onPress={() => onReject && onReject()}>
          {rejectText}
        </Button>
        <Button variant="primary" onPress={() => onConfirm && onConfirm()}>
          {confirmText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
