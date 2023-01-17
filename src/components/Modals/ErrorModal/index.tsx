import React from "react";
import Button from "../../Buttons/Button";
import MaterialIcon from "../../Utility/MaterialIcon";
import { BaseModalProps } from "../BasicModal";
import { ModalTitle } from "../Modals.styles";
import PopupModal from "../PopupModal";

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
    <PopupModal
      {...rest}
      variant="error"
      onOutsideClick={onClose}
      title={
        <>
          <MaterialIcon icon="error" />
          <ModalTitle>{title}</ModalTitle>
        </>
      }
      actions={
        <Button variant="error" type="button" onClick={onClose}>
          {buttonText}
        </Button>
      }
    >
      {children}
    </PopupModal>
  );
}
