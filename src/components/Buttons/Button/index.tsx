import React from "react";
import cn from "classnames";
import Spinner from "../../Loaders/Spinner";
import "../../general.scss";
import "./styles.scss";

interface CommonProps {
  /** What to render within the Button */
  children?: React.ReactNode;
  /** Added to the button's className as: `aj-btn--${className}`. Builtin styles for:
   * - `primary`
   * - `secondary`
   * - `success`
   * - `error`
   * - `inverted`
   */
  className?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "inverted"
    | (string & {});
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

export type Props = CommonProps & LoadingProps;

export default function Button({
  children,
  type = "button",
  className = "primary",
  disabled = false,
  loading = false,
  loadingLabel = "loading",
  loadingComplete = false,
  onClick,
}: Props) {
  const loadingText = loading ? loadingLabel : "";

  return (
    <button
      aria-label={loadingText}
      type={type}
      className={cn(`aj-btn--${className}`, { "is-loading": loading })}
      onClick={onClick}
      disabled={disabled}
    >
      {loading && <Spinner loading={!loadingComplete} />}
      {children}
    </button>
  );
}
