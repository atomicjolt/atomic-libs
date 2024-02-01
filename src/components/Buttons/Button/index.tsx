import React, { forwardRef, useRef } from "react";
import cn from "classnames";
import { AriaButtonOptions, useButton } from "react-aria";

import Spinner from "../../Loaders/Spinner";
import {
  HasChildren,
  HasClassName,
  HasVariant,
  LoadingProps,
} from "../../../types";
import { StyledButton } from "./Button.styles";
import { ButtonVariants } from "../Buttons.types";
import useForwardedRef from "../../../hooks/useForwardedRef";

export type ButtonProps = AriaButtonOptions<"button"> &
  LoadingProps &
  HasClassName &
  HasChildren &
  HasVariant<ButtonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const internalRef = useForwardedRef<HTMLButtonElement>(null);
  const { buttonProps, isPressed } = useButton(props, internalRef);
  const {
    children,
    variant = "primary",
    loading = false,
    loadingLabel = "loading",
    loadingComplete = false,
    className,
  } = props;

  const loadingText = loading ? loadingLabel : "";

  return (
    <StyledButton
      aria-label={loadingText || undefined}
      className={cn("aje-btn", `aje-btn--${variant}`, className, {
        "is-loading": loading,
        "is-active": isPressed,
      })}
      {...buttonProps}
    >
      {loading && <Spinner loading={!loadingComplete} />}
      {children}
    </StyledButton>
  );
});

export default Button;
