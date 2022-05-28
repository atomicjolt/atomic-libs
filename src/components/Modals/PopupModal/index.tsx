import React from "react";
import "../../general.scss";
import { useModal } from "../utils";
import "./styles.scss";

export interface Props {
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
}: Props) {
  const renderModal = useModal(open);

  return renderModal(
    <div className="aj-modal-background">
      <div className="aj-modal--popup">
        <div className="aj-modal__top">
          {typeof title === "string" ? (
            <h2 className="aj-modal__title">{title}</h2>
          ) : (
            title
          )}
        </div>
        <div className="aj-modal__main">{children}</div>
        <div className="aj-modal__bottom">{actions}</div>
      </div>
    </div>
  );
}
