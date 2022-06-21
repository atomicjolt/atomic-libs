import React from "react";
import "../../general.scss";
import "./styles.scss";
import Button from "../../Buttons/Button";
import PopupModal from "../PopupModal";

export interface Props {
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
}: Props) {
  return (
    <PopupModal
      open={open}
      title={
        <>
          <i className="material-icons">error</i>
          <h2 className="aj-modal__title">{title}</h2>
        </>
      }
      actions={[
        <Button className="error" type="button" onClick={onClose}>
          {buttonText}
        </Button>,
      ]}
    >
      {children}
    </PopupModal>
  );
}
