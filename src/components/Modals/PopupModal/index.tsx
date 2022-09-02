import React from "react";
import { useModal } from "../utils";

export interface PopupModalProps {
  open?: boolean;
  title: React.ReactNode;
  children: React.ReactNode;
  actions: React.ReactNode;
}

/**
 * Popup Modal. The shared Markup for the `ConfirmationModal` and `ErrorModal`
 * For when you need to show a loading/exporting/etc process, or other small
 * things that don't require a large modal.
 * */
export default function PopupModal({
  open = false,
  title,
  children,
  actions,
}: PopupModalProps) {
  const renderModal = useModal(open);

  return renderModal(
    <div className="aje-modal-background">
      <div className="aje-modal--popup">
        <div className="aje-modal__top">
          {typeof title === "string" ? (
            <h2 className="aje-modal__title">{title}</h2>
          ) : (
            title
          )}
        </div>
        <div className="aje-modal__main">{children}</div>
        <div className="aje-modal__bottom">{actions}</div>
      </div>
    </div>
  );
}
