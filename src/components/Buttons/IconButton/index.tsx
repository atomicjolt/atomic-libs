import React from "react";
import { LoadingProps, MaterialIcons } from "../../../types";
import Spinner from "../../Loaders/Spinner";
import MaterialIcon, { MaterialIconVariants } from "../../Utility/MaterialIcon";

interface BaseProps {
  /** Material Icon to render */
  icon: MaterialIcons;
  id?: string;
  /** Label for the button, because IconButton does not contain text, this should always be present */
  ariaLabel: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** The MaterialIcons icon set to use */
  iconVariant?: MaterialIconVariants;
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
    ...rest
  } = props;

  return (
    <button
      id={id}
      className="aje-btn--icon"
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
