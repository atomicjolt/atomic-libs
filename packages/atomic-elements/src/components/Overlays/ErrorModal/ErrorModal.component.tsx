import React from "react";
import { Button } from "../../Buttons/Button";
import { MaterialIcon } from "../../Icons/MaterialIcon";
import { Modal, BaseModalProps } from "../Modal";
import { Text } from "@components/Typography/Text";

export interface ErrorModalProps extends BaseModalProps {
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
 * If you need a more complex error modal, you can use the `Modal` component directly. [Check the ErrorModal implementation for a starting point](https://github.com/atomicjolt/atomic-libs/blob/main/packages/atomic-elements/src/components/Overlays/ErrorModal/ErrorModal.component.tsx)
 * */
export function ErrorModal(props: ErrorModalProps) {
  const { title, children, buttonText = "Close", onClose, ...rest } = props;

  return (
    <Modal $width="400px" {...rest}>
      {(close) => (
        <>
          <Modal.Header $justify="start">
            <MaterialIcon icon="error" />
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Text $size="3">{children}</Text>
          </Modal.Body>
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
