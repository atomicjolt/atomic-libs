import React from "react";
import cn from "classnames";
import { HasClassName, HasIcon, LoadingProps } from "../../../types";
import Spinner from "../../Loaders/Spinner";
import MaterialIcon from "../../Utility/MaterialIcon";

interface BaseProps extends HasClassName, HasIcon {
  id?: string;
  /** Label for the button, because IconButton does not contain text, this should always be present */
  ariaLabel: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export type IconButtonProps = BaseProps & LoadingProps & React.AriaAttributes;

/** Icon Button Component */
export default function IconButton(props: IconButtonProps) {
  const {
    icon,
    id,
    ariaLabel,
    disabled,
    onClick,
    loading,
    loadingComplete,
    loadingLabel,
    iconVariant = "default",
    className,
    ...rest
  } = props;

  return (
    <button
      id={id}
      className={cn("aje-btn aje-btn--icon", className)}
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={loading && loadingLabel ? loadingLabel : ariaLabel}
      {...rest}
    >
      {loading ? (
        <Spinner loading={!loadingComplete} />
      ) : (
        <MaterialIcon icon={icon} variant={iconVariant} />
      )}
    </button>
  );
}
