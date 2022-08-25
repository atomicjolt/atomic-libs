import React from "react";
import { useIds } from "../../../hooks";
import { AriaHasPopUp, MaterialIcons } from "../../../types";
import MaterialIcon from "../../Utility/MaterialIcon";

export interface IconButtonProps {
  /** Material Icon to render */
  icon: MaterialIcons;
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
  ariaLabel,
  ariaExpanded,
  ariaHasPopup,
  ariaControls,
  disabled,
  onClick,
}: IconButtonProps) {
  const [buttonId] = useIds("icon-button", ["button"]);

  return (
    <button
      id={buttonId}
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
