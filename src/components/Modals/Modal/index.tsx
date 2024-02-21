import React from "react";
import { modalInitializer } from "../utils";
import Button from "../../Buttons/Button";
import BasicModal, { BaseModalProps } from "../BasicModal";
import {
  ContentWrapper,
  ModalBottom,
  ModalClose,
  ModalMain,
} from "../Modals.styles";
import MaterialIcon from "../../Icons/MaterialIcon";
import IconButton from "../../Buttons/IconButton";
import { Dialog } from "../../Utility/Dialog";

export interface ModalProps extends BaseModalProps {
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
  /** Callback when the close button is pressed, or the background is clicked on */
  onClose?: () => void;
}

/**
 * Modal Component
 *
 * For when you need a large modal with somewhat complex actions.
 * */
function Modal(props: ModalProps) {
  const {
    title,
    children,
    primaryButton,
    secondaryButton = "Cancel",
    primaryAction,
    secondaryAction,
    onClose,
    ...rest
  } = props;

  const onCloseCallback = () => onClose && onClose();

  return (
    <BasicModal {...rest}>
      <Dialog
        title={title}
        top={
          <IconButton icon="close" onPress={onCloseCallback} variant="ghost" />
        }
      >
        <ContentWrapper>
          <ModalMain>{children}</ModalMain>
          <ModalBottom>
            {secondaryButton && (
              <Button
                variant="secondary"
                type="button"
                onPress={() => secondaryAction && secondaryAction()}
              >
                {secondaryButton}
              </Button>
            )}
            {primaryButton && (
              <Button
                variant="primary"
                type="button"
                onPress={() => primaryAction && primaryAction()}
              >
                {primaryButton}
              </Button>
            )}
          </ModalBottom>
        </ContentWrapper>
      </Dialog>
    </BasicModal>
  );
}

Modal.init = modalInitializer;

export default Modal;
