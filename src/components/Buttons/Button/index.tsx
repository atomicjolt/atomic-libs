import React from "react";
import cn from "classnames";
import Spinner from "../../Loaders/Spinner";
import { HasClassName, LoadingProps } from "../../../types";

type ButtonVariants =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "inverted"
  | (string & {});

interface CommonProps extends HasClassName {
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

export type ButtonProps = CommonProps & LoadingProps & React.AriaAttributes;

export default function Button(props: ButtonProps) {
  const {
    children,
    type = "button",
    variant = "primary",
    disabled = false,
    loading = false,
    loadingLabel = "loading",
    loadingComplete = false,
    onClick,
    className,
    ...rest
  } = props;

  const loadingText = loading ? loadingLabel : "";

  return (
    <button
      aria-label={loadingText}
      type={type}
      className={cn("aje-btn", `aje-btn--${variant}`, className, {
        "is-loading": loading,
      })}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {loading && <Spinner loading={!loadingComplete} />}
      {children}
    </button>
  );
}
