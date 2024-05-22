import React from "react";
import Button from "../../Buttons/Button";
import MaterialIcon from "../../Icons/MaterialIcon";
import Modal, { BaseModalProps } from "../Modal";

export interface ErrorModalProps extends Omit<BaseModalProps, "children"> {
  children: React.ReactNode;
  /** Must include a title. Titles are always in Title case. */
  title: string;
  /** Text of the button to close the modal. */
  buttonText?: string;
  onClose?: () => void;
}

/**
 * Error Modal Component. For displaying an error message and a button to close the modal.
 *
 * Keep in mind that the `ErrorModal` is a simple wrapper around the `Modal` component for a simple error message.
 * If you need a more complex error modal, you can use the `Modal` component directly. [Check the ErrorModal implementation for a starting point](https://github.com/atomicjolt/atomic-elements/blob/next/src/components/Overlays/ErrorModal/index.tsx)
 * */
export function ErrorModal(props: ErrorModalProps) {
  const { title, children, buttonText = "Close", onClose, ...rest } = props;

  return (
    <Modal {...rest} variant="error">
      {(close) => (
        <>
          <Modal.Header>
            <MaterialIcon icon="error" />
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer>
            <Button
              variant="error"
              type="button"
              onPress={() => {
                onClose?.();
                close();
              }}
            >
              {buttonText}
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
}

export default ErrorModal;
