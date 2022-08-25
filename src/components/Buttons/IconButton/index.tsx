import React from "react";
import { AriaHasPopUp, MaterialIcons } from "../../../types";
import MaterialIcon from "../../Utility/MaterialIcon";

export interface IconButtonProps {
  /** Material Icon to render */
  icon: MaterialIcons;
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
  icon,
  id,
  ariaLabel,
  ariaExpanded,
  ariaHasPopup,
  ariaControls,
  disabled,
  onClick,
}: IconButtonProps) {
  return (
    <button
      id={id}
      className="aje-btn--icon"
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      aria-haspopup={ariaHasPopup}
      aria-expanded={ariaExpanded}
    >
      <MaterialIcon icon={icon} aria-hidden />
    </button>
  );
}
