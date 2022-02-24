import React from "react";
import "./styles.scss";

type ButtonType = "primary" | "secondary";

export interface Props {
  /** What to render within the Button */
  children: React.ReactNode;
  /***/
  type?: ButtonType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/** Button Component */
export default function Button({ children, type = "primary", onClick }: Props) {
  return (
    <button className={`aj-button ${type}`} onClick={onClick}>
      {children}
    </button>
  );
}
