import cn from "classnames";
import React from "react";
import { useVariantClass } from "../../../hooks";
import { HasClassName } from "../../../types";
import { useModal } from "../utils";
import { ModalBackground, ModalWrapper } from "./BasicModal.styles";

export interface BaseModalProps extends HasClassName {
  /** Whether or not the modal is visible */
  open?: boolean;
  children?: React.ReactNode;
  /** Centers the modal within the viewport */
  centered?: boolean;
}

export interface BasicModalProps extends BaseModalProps {
  variant?: string;
  /** Fired when the user clicks on the
   * background / outside of the content of your modal */
  onOutsideClick?: () => void;
}

/** The most basic Modal that atomic-element offers. Makes no assumptiosn or enforcements on how / where
 * the content of the modal should be rendered.
 *
 * Unless you absolutely need to, you are probably better served using one of the other modals provided
 */
export default function BasicModal(props: BasicModalProps) {
  const {
    open = false,
    children,
    centered = false,
    variant = "default",
    className,
    onOutsideClick,
  } = props;
  const renderModal = useModal({ open });

  const variantClassName = useVariantClass("aje-modal", variant);

  return renderModal(
    <ModalBackground
      className={cn("aje-modal-background", className, {
        "is-centered": centered,
      })}
      onClick={() => onOutsideClick && onOutsideClick()}
    >
      <ModalWrapper className={variantClassName}>{children}</ModalWrapper>
    </ModalBackground>
  );
}
