import React from "react";
import Button from "../../Buttons/Button";
import PopupModal from "../PopupModal";

export interface ErrorModalProps {
  open?: boolean;
  /** Must include a title. Titles are always in Title case. */
  title: string;
  children: React.ReactNode;
  buttonText?: string;
  onClose: () => void;
}

/**
 * Error Modal Component
 * */
export default function ErrorModal({
  open = false,
  title,
  children,
  buttonText = "Close",
  onClose,
}: ErrorModalProps) {
  return (
    <PopupModal
      open={open}
      onOutsideClick={onClose}
      title={
        <>
          <i className="material-icons">error</i>
          <h2 className="aje-modal__title">{title}</h2>
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
