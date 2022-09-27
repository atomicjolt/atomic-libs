import React from "react";
import cn from "classnames";
import Spinner from "../../Loaders/Spinner";
import { LoadingProps } from "../../../types";

type ButtonVariants =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "inverted"
  | (string & {});

interface CommonProps {
  /** What to render within the Button */
  children?: React.ReactNode;
  /** Added to the button's className as: `aje-btn--${className}`. Builtin styles for:
   * - `primary`
   * - `secondary`
   * - `success`
   * - `error`
   * - `inverted`
   */
  variant?: ButtonVariants;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export type ButtonProps = CommonProps & LoadingProps;

export default function Button({
  children,
  type = "button",
  variant = "primary",
  disabled = false,
  loading = false,
  loadingLabel = "loading",
  loadingComplete = false,
  onClick,
}: ButtonProps) {
  const loadingText = loading ? loadingLabel : "";

  return (
    <button
      aria-label={loadingText}
      type={type}
      className={cn(`aje-btn aje-btn--${variant}`, { "is-loading": loading })}
      onClick={onClick}
      disabled={disabled}
    >
      {loading && <Spinner loading={!loadingComplete} />}
      {children}
    </button>
  );
}
