import React from "react";
import Button from "../../Buttons/Button";
import PopupModal from "../PopupModal";
import { makeOptionalCallback } from "../../../utils";
import { BaseModalProps } from "../BasicModal";

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
  const onRejectCallback = makeOptionalCallback(onReject);

  return (
    <PopupModal
      {...rest}
      title={title}
      onOutsideClick={onRejectCallback}
      actions={
        <>
          <Button variant="secondary" onPress={() => onRejectCallback()}>
            {rejectText}
          </Button>
          <Button
            variant="primary"
            onPress={() => makeOptionalCallback(onConfirm)()}
          >
            {confirmText}
          </Button>
        </>
      }
    >
      {children}
    </PopupModal>
  );
}
