import cn from "classnames";
import React from "react";
import { useModal } from "../utils";

export interface BasicModalProps {
  /** Whether or not the modal is visible */
  open?: boolean;
  children?: React.ReactNode;
  /** Centers the modal within the viewport */
  centered?: boolean;
}

/** The most basic Modal that atomic-element offers. Makes no assumptiosn or enforcements on how / where
 * the content of the modal should be rendered.
 *
 * Unless you absolutely need to, you are probably better served using one of the other modals provided
 */
export default function BasicModal(props: BasicModalProps) {
  const { open = false, children, centered = false } = props;
  const renderModal = useModal(open);

  return renderModal(
    <div className={cn("aje-modal-background", { "is-center": centered })}>
      <div className="aje-modal">{children}</div>
    </div>
  );
}
