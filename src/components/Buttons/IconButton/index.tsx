import React from "react";
import cn from "classnames";
import {
  HasClassName,
  HasIcon,
  LoadingProps,
  SuggestStrings,
} from "../../../types";
import Spinner from "../../Loaders/Spinner";
import MaterialIcon from "../../Utility/MaterialIcon";
import { useIds, useVariantClass } from "../../../hooks";
import { StyledIconButton } from "./IconButton.styles";
import { ButtonVariants } from "../Buttonts.types";

interface BaseProps extends HasClassName, HasIcon {
  /** Label for the button, because IconButton does not contain text, this should always be present */
  ariaLabel: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonVariants;
}

export type IconButtonProps = BaseProps & LoadingProps & React.AriaAttributes;

/** Icon Button Component */
export default function IconButton(props: IconButtonProps) {
  const {
    icon,
    ariaLabel,
    disabled,
    onClick,
    loading,
    loadingComplete,
    loadingLabel,
    variant = "primary",
    iconVariant = "default",
    className,
    ...rest
  } = props;

  const [buttonId] = useIds("IconButton", ["button"]);

  const variantClass = useVariantClass("aje-btn", variant);

  return (
    <StyledIconButton
      id={buttonId}
      className={cn("aje-btn aje-btn--icon", variantClass, className)}
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
    </StyledIconButton>
  );
}
