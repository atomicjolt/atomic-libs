import React from "react";
import { modalInitializer, useModal } from "../utils";
import Button from "../../Buttons/Button";
import BasicModal from "../BlankModal";

export interface ModalProps {
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
function Modal(props: ModalProps) {
  const {
    open = false,
    title,
    children,
    primaryButton,
    secondaryButton = "Cancel",
    primaryAction,
    secondaryAction,
    onClose,
  } = props;

  return (
    <BasicModal open={open}>
      <div className="aje-modal__top">
        <h2 className="aje-modal__title">{title}</h2>
        <button
          className="aje-modal__close"
          aria-label="close modal"
          onClick={() => onClose && onClose()}
        >
          <i className="material-icons" aria-hidden>
            close
          </i>
        </button>
      </div>
      <div className="aje-modal__main">{children}</div>
      <div className="aje-modal__bottom">
        {secondaryButton && (
          <Button
            variant="secondary"
            type="button"
            onClick={() => primaryAction && primaryAction()}
          >
            {secondaryButton}
          </Button>
        )}
        {primaryButton && (
          <Button
            variant="primary"
            type="button"
            onClick={() => secondaryAction && secondaryAction()}
          >
            {primaryButton}
          </Button>
        )}
      </div>
    </BasicModal>
  );
}

Modal.init = modalInitializer;

export default Modal;
