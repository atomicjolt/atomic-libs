import React from "react";
import BasicModal, { BasicModalProps } from "../BasicModal";
import { ModalBottom, ModalMain, ModalTitle, ModalTop } from "../Modals.styles";

export interface PopupModalProps extends Omit<BasicModalProps, "variant"> {
  title: React.ReactNode;
  actions?: React.ReactNode;
  variant?: string;
}

/**
 * Popup Modal. The shared Markup for the `ConfirmationModal` and `ErrorModal`
 * For when you need to show a loading/exporting/etc process, or other small
 * things that don't require a large modal.
 * */
export default function PopupModal(props: PopupModalProps) {
  const { title, children, actions, variant = "popup", ...rest } = props;

  return (
    <BasicModal {...rest} variant={variant}>
      <ModalTop>
        {typeof title === "string" ? <ModalTitle>{title}</ModalTitle> : title}
      </ModalTop>
      <ModalMain>{children}</ModalMain>
      {actions && <ModalBottom>{actions}</ModalBottom>}
    </BasicModal>
  );
}
