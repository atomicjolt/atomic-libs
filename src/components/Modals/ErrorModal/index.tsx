import React from "react";
import Button from "../../Buttons/Button";
import MaterialIcon from "../../Icons/MaterialIcon";
import Modal, { BaseModalProps } from "../Modal";

export interface ErrorModalProps extends BaseModalProps {
  /** Must include a title. Titles are always in Title case. */
  title: string;
  buttonText?: string;
  onClose: () => void;
}

/**
 * Error Modal Component
 * */
export default function ErrorModal(props: ErrorModalProps) {
  const { title, children, buttonText = "Close", onClose, ...rest } = props;

  return (
    <Modal {...rest} variant="error">
      <Modal.Header>
        <MaterialIcon icon="error" />
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="error" type="button" onPress={onClose}>
          {buttonText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
