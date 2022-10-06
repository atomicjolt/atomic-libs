import cn from "classnames";
import React from "react";
import BasicModal, { BasicModalProps } from "../BlankModal";
import { useModal } from "../utils";

export interface PopupModalProps extends Omit<BasicModalProps, "variant"> {
  title: React.ReactNode;
  actions?: React.ReactNode;
}

/**
 * Popup Modal. The shared Markup for the `ConfirmationModal` and `ErrorModal`
 * For when you need to show a loading/exporting/etc process, or other small
 * things that don't require a large modal.
 * */
export default function PopupModal(props: PopupModalProps) {
  const { title, children, actions, ...rest } = props;

  return (
    <BasicModal {...rest} variant="popup">
      <div className="aje-modal__top">
        {typeof title === "string" ? (
          <h2 className="aje-modal__title">{title}</h2>
        ) : (
          title
        )}
      </div>
      <div className="aje-modal__main">{children}</div>
      {actions && <div className="aje-modal__bottom">{actions}</div>}
    </BasicModal>
  );
}
