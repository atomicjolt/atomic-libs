import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { modalInitializer, SharedModalData, useModal } from "../utils";
import Button from "../../Buttons/Button";

export interface Props {
  /** Whether or not the modal is visible */
  open?: boolean;
  /** Must include a title. Titles are always in Title case. */
  title: string;
  children: React.ReactNode;
  /** Should be descriptive instead of yes or no.
   * If you're confirming you want to delete something,
   * Delete is an appropriate string to use. */
  primaryButton?: string;
  /** This will replace 'Cancel' as the negative action.
   * Sometimes you might need it to say 'Close' or something instead. */
  secondaryButton?: string;

  /** Callback when the priamry button is pressed */
  primaryAction?: () => void;
  /** Callback when the secondary button is pressed */
  secondaryAction?: () => void;
  /** Callback when the close button is pressed */
  onClose?: () => void;
}

/**
 * Modal Component
 *
 * For when you need a large modal with somewhat complex actions.
 * */
function Modal({
  open = false,
  title,
  children,
  primaryButton,
  secondaryButton = "Cancel",
  primaryAction,
  secondaryAction,
  onClose,
}: Props) {
  const renderModal = useModal(open);

  return renderModal(
    <div className="aj-modal-background">
      <div className="aj-modal">
        <div className="aj-modal__top">
          <h2 className="aj-modal__title">{title}</h2>
          <button
            className="aj-modal__close"
            aria-label="close modal"
            onClick={() => onClose && onClose()}
          >
            <i className="material-icons" aria-hidden>
              close
            </i>
          </button>
        </div>
        <div className="aj-modal__main">{children}</div>
        <div className="aj-modal__bottom">
          {secondaryButton && (
            <Button
              className="secondary"
              type="button"
              onClick={() => primaryAction && primaryAction()}
            >
              {secondaryButton}
            </Button>
          )}
          {primaryButton && (
            <Button
              className="primary"
              type="button"
              onClick={() => secondaryAction && secondaryAction()}
            >
              {primaryButton}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

Modal.init = modalInitializer;

export default Modal;
