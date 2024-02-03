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

// TODO: support size prop

export type ButtonProps = AriaButtonOptions<"button"> &
  LoadingProps &
  BaseProps &
  HasChildren &
  HasVariant<ButtonVariants> & {
    /**
     * @deprecated Prefer onPress for better accessibility.
     */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    variant = "primary",
    loading = false,
    loadingLabel,
    loadingComplete = false,
    className,
  } = props;
  const internalRef = useForwardedRef<HTMLButtonElement>(null);
  const { buttonProps, isPressed } = useButton(
    { ...props, "aria-label": loading ? loadingLabel : props["aria-label"] },
    internalRef
  );

  return (
    <StyledButton
      className={cn("aje-btn", `aje-btn--${variant}`, className, {
        "is-loading": loading,
        "is-active": isPressed,
      })}
      onClick={props.onClick}
      {...buttonProps}
    >
      {loading && <Spinner loading={!loadingComplete} />}
      {children}
    </StyledButton>
  );
});

export default Button;
