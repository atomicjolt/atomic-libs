import React, { forwardRef } from "react";
import cn from "classnames";
import { AriaButtonOptions, useButton } from "react-aria";

import Spinner from "../../Loaders/Spinner";
import {
  BaseProps,
  HasChildren,
  HasVariant,
  LoadingProps,
} from "../../../types";
import { StyledButton } from "./Button.styles";
import { ButtonVariants } from "../Buttons.types";
import useForwardedRef from "../../../hooks/useForwardedRef";

export type ButtonProps = AriaButtonOptions<"button"> &
  LoadingProps &
  BaseProps &
  HasChildren &
  HasVariant<ButtonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    size = "auto",
    variant = "primary",
    isLoading = false,
    loadingLabel,
    loadingComplete = false,
    className,
  } = props;
  const internalRef = useForwardedRef<HTMLButtonElement>(ref);
  const { buttonProps, isPressed } = useButton(
    { ...props, "aria-label": isLoading ? loadingLabel : props["aria-label"] },
    internalRef
  );

  return (
    <StyledButton
      className={cn("aje-btn", `aje-btn--${variant}`, className, `is-${size}`, {
        "is-loading": isLoading,
        "is-active": isPressed,
      })}
      ref={internalRef}
      {...buttonProps}
    >
      {isLoading && <Spinner isLoading={!loadingComplete} isCentered />}
      {children}
    </StyledButton>
  );
});

export default Button;
