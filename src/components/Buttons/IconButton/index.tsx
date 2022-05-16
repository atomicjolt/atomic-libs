import React from "react";
import "../../general.scss";
import "./styles.scss";
import { AriaHasPopUp, MaterialIcon } from "../../../types";

export interface Props {
  /** Material Icon to render */
  children: MaterialIcon;
  id?: string;
  ariaLabel: string;
  ariaExpanded?: boolean;
  ariaHasPopup?: AriaHasPopUp;
  ariaControls?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/** Icon Button Component */
export default function IconButton({
  children,
  id,
  ariaLabel,
  ariaExpanded,
  ariaHasPopup,
  ariaControls,
  disabled,
  onClick,
}: Props) {
  return (
    <button
      id={id}
      className="aj-btn--icon"
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      aria-haspopup={ariaHasPopup}
      aria-expanded={ariaExpanded}
    >
      <i className="material-icons" aria-hidden>
        {children}
      </i>
    </button>
  );
}
