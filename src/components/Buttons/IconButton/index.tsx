import React, { forwardRef, useImperativeHandle, useRef } from "react";
import cn from "classnames";
import {
  HasClassName,
  HasIcon,
  HasVariant,
  LoadingProps,
} from "../../../types";
import Spinner from "../../Loaders/Spinner";
import MaterialIcon from "../../Icons/MaterialIcon";
import { useIds, useVariantClass } from "../../../hooks";
import { StyledIconButton } from "./IconButton.styles";
import { ButtonVariants } from "../Buttons.types";
import { AriaButtonOptions, useButton } from "react-aria";
import useForwardedRef from "../../../hooks/useForwardedRef";

type IconButtonProps = AriaButtonOptions<"button"> &
  LoadingProps &
  HasClassName &
  HasVariant<ButtonVariants> &
  HasIcon;

/** Icon Button Component */
const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const {
      icon,
      loading,
      loadingComplete,
      loadingLabel,
      variant = "primary",
      iconVariant = "default",
      className,
    } = props;
    const innerRef = useForwardedRef<HTMLButtonElement>(ref);
    const { buttonProps, isPressed } = useButton(props, innerRef);
    const variantClass = useVariantClass("aje-btn", variant);

    return (
      <StyledIconButton
        className={cn("aje-btn aje-btn--icon", variantClass, className, {
          "is-loading": loading,
          "is-active": isPressed,
        })}
        type="button"
        aria-label={
          loading && loadingLabel ? loadingLabel : buttonProps["aria-label"]
        }
        {...buttonProps}
      >
        {loading && <Spinner loading={!loadingComplete} />}
        <MaterialIcon icon={icon} variant={iconVariant} />
      </StyledIconButton>
    );
  }
);

export default IconButton;
