import React from "react";
import cn from "classnames";
import Spinner from "../../Loaders/Spinner";

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

type LoadingProps =
  | {
      /** When loading is true, the content will be replaced with a spinner.
       * When it is false, the content will be shown normally */
      loading?: false;
      /** aria accessiblity label to inform screen-readers that it is loading */
      loadingLabel?: never;
      /** Transitions the loading spinner to a checkmark */
      loadingComplete?: never;
    }
  | {
      loading: true;
      loadingLabel?: string;
      loadingComplete?: boolean;
    };

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
  throw new Error("ah");

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
