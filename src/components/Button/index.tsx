import React from "react";
import "./styles.scss";
export interface Props {
  /** What to render within the Button */
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  ariaLabel?: string;
  className?: 'primary' | 'secondary';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/** Button Component */
export default function Button({ type = "button", ariaLabel, children, className = "primary", onClick }: Props) {
  return (
    <button aria-label={ariaLabel} type={type} className={`aj-btn--${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
