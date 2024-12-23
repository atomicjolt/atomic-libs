import React, { useContext } from "react";
import { Button } from "../../Buttons/Button";
import { Modal, BaseModalProps } from "../Modal";
import { OverlayTriggerStateContext } from "../OverlayTrigger/context";

export interface ConfirmationModalProps extends BaseModalProps {
  children: React.ReactNode;
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
 * Confirmation Modal Component. For when you need a small modal to confirm an action, like deleting a record
 *
 * Keep in mind that the `ConfirmationModal` is a simple wrapper around the `Modal` component for a simple default
 * If you need a more complex modal, you can use the `Modal` component directly. [Check the ConfirmationModal implementation for a starting point](https://github.com/atomicjolt/atomic-elements/blob/next/src/components/Overlays/ConfirmationModal/index.tsx)
 * */
export function ConfirmationModal({
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
      {(close) => (
        <>
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onPress={() => {
                onReject?.();
                close();
              }}
            >
              {rejectText}
            </Button>
            <Button
              variant="primary"
              onPress={() => {
                onConfirm?.();
                close();
              }}
            >
              {confirmText}
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
}

export default ConfirmationModal;
