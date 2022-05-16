import React from "react";
import "../../general.scss";
import "./styles.scss";
import Spinner from "../../Loaders/Spinner";

interface CommonProps {
  /** What to render within the Button */
  children?: React.ReactNode;
  className?: "primary" | "secondary" | "success" | "error" | "inverted";
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
  className,
  disabled = false,
  loading = false,
  loadingLabel = "loading",
  loadingComplete = false,
  onClick,
}: Props) {
  let loadingClass = loading ? "is-loading" : "";
  let loadingText = loading ? loadingLabel : "";

  return (
    <button
      aria-label={loadingText}
      type={type}
      className={`aj-btn--${className} ${loadingClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {loading && <Spinner loading={!loadingComplete} />}
      {children}
    </button>
  );
}
