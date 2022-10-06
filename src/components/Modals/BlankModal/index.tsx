import cn from "classnames";
import React, { useRef } from "react";
import { useClickOutside, useVariantClass } from "../../../hooks";
import { EventHandler } from "../../../types";
import { useModal } from "../utils";

export interface BasicModalProps {
  /** Whether or not the modal is visible */
  open?: boolean;
  children?: React.ReactNode;
  /** Centers the modal within the viewport */
  centered?: boolean;
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
    onOutsideClick,
  } = props;
  const [renderModal, ref] = useModal<HTMLDivElement>({
    open,
    onOutsideClick: () => onOutsideClick && onOutsideClick(),
  });
  const className = useVariantClass("aje-modal", variant);

  return renderModal(
    <div className={cn("aje-modal-background", { "is-center": centered })}>
      <div className={className} ref={ref}>
        {children}
      </div>
    </div>
  );
}
