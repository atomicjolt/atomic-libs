import React, { forwardRef, useRef } from "react";
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
    isLoading: loading = false,
    loadingLabel,
    loadingComplete = false,
    className,
  } = props;
  const internalRef = useForwardedRef<HTMLButtonElement>(ref);
  const { buttonProps, isPressed } = useButton(
    { ...props, "aria-label": loading ? loadingLabel : props["aria-label"] },
    internalRef
  );

  return (
    <StyledButton
      className={cn("aje-btn", `aje-btn--${variant}`, className, `is-${size}`, {
        "is-loading": loading,
        "is-active": isPressed,
      })}
      ref={internalRef}
      {...buttonProps}
    >
      {loading && <Spinner loading={!loadingComplete} />}
      {children}
    </StyledButton>
  );
});

export default Button;
