import React, { forwardRef } from "react";
import cn from "classnames";
import { AriaButtonOptions, mergeProps, useButton, useLink } from "react-aria";

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
import { useFocusRing } from "../../../hooks/useFocusRing";
import { useRenderProps } from "@/hooks/useRenderProps";

export type ButtonProps = AriaButtonOptions<"button"> &
  LoadingProps &
  BaseProps &
  HasChildren &
  HasVariant<ButtonVariants> & {
    as?: "button" | "a";
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      size = "auto",
      variant = "primary",
      isLoading = false,
      loadingLabel,
      loadingComplete = false,
      className,
      as = "button",
    } = props;
    const internalRef = useForwardedRef<HTMLButtonElement>(ref);
    const { buttonProps, isPressed } = useButton(
      {
        ...props,
        elementType: as,
        "aria-label": isLoading ? loadingLabel : props["aria-label"],
      },
      internalRef
    );

    const { linkProps } = useLink(
      {
        ...props,
        elementType: as,
      },
      internalRef
    );

    const { focusProps } = useFocusRing();

    const renderProps = useRenderProps({
      componentClassName: "aje-btn",
      variant,
      size,
      selectors: {
        "data-pressed": isPressed,
        "data-loading": isLoading,
      },
    });

    return (
      <StyledButton
        as={as}
        ref={internalRef}
        {...mergeProps(buttonProps, linkProps, focusProps, renderProps)}
      >
        {isLoading && <Spinner isLoading={!loadingComplete} isCentered />}
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

export default Button;
