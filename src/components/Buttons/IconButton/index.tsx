import React, { forwardRef } from "react";
import cn from "classnames";
import { HasIcon } from "../../../types";
import Spinner from "../../Loaders/Spinner";
import MaterialIcon from "../../Icons/MaterialIcon";
import { useVariantClass } from "../../../hooks";
import { StyledIconButton } from "./IconButton.styles";
import { useButton } from "react-aria";
import useForwardedRef from "../../../hooks/useForwardedRef";
import { ButtonProps } from "../Button";

export type IconButtonProps = Omit<ButtonProps, "children"> & HasIcon;

/** Similar to the Button component, but is intended to display just an icon instead of text.
 * Because of this, you should provide an `aria-label` for accessiblity */
const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const {
      icon,
      isLoading: loading,
      loadingComplete,
      loadingLabel,
      variant = "border",
      iconVariant = "default",
      className,
      size = "medium",
    } = props;
    const innerRef = useForwardedRef<HTMLButtonElement>(ref);
    const { buttonProps, isPressed } = useButton(
      { ...props, "aria-label": loading ? loadingLabel : props["aria-label"] },
      innerRef
    );
    const variantClass = useVariantClass("aje-btn", variant);

    return (
      <StyledIconButton
        className={cn("aje-btn aje-btn--icon", variantClass, className, {
          "is-loading": loading,
          "is-active": isPressed,
        })}
        type="button"
        ref={innerRef}
        onClick={props.onClick}
        {...buttonProps}
      >
        {loading && <Spinner loading={!loadingComplete} />}
        <MaterialIcon icon={icon} variant={iconVariant} size={size} />
      </StyledIconButton>
    );
  }
);

export default IconButton;
