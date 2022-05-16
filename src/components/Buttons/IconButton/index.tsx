import React from "react";
import '../../general.scss';
import "./styles.scss";
import Spinner from '../../Loaders/Spinner';

export interface Props {
  /** What to render within the Button */
  icon: string;
  id?: string;
  ariaLabel: string;
  ariaExpanded?: boolean;
  ariaHasPopup?: string;
  ariaControls?: string;
  disabled?: boolean;
  role?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
    onClick 
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
      <i className="material-icons" aria-hidden>{icon}</i>
    </button>
  );
}
