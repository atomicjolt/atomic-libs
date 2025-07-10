import React from "react";
import { Button } from "../../Buttons/Button";
import { Text } from "@components/Typography/Text";
import { Modal, BaseModalProps } from "../Modal";

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
 * If you need a more complex modal, you can use the `Modal` component directly. [Check the ConfirmationModal implementation for a starting point](https://github.com/atomicjolt/atomic-libs/blob/main/packages/atomic-elements/src/components/Overlays/ConfirmationModal/ConfirmationModal.component.tsx)
 * */
export function ConfirmationModal(props: ConfirmationModalProps) {
  const {
    title,
    children,
    confirmText,
    rejectText = "Cancel",
    onConfirm,
    onReject,
    ...rest
  } = props;

  return (
    <Modal $width="400px" {...rest}>
      {(close) => (
        <>
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Text $size="3">{children}</Text>
          </Modal.Body>
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
