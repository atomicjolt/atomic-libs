import { forwardRef } from "react";
import { AriaButtonOptions } from "@react-aria/button";
import { mergeProps } from "@react-aria/utils";

import { SpinnerLoader } from "../../Loaders/SpinnerLoader";
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
import { useRenderProps } from "@hooks/useRenderProps";
import { useButtonLink } from "@hooks/useButtonLink";
import { useContextProps } from "@hooks/useContextProps";
import { ButtonContext } from "./Button.context";

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
      as = props.href ? "a" : "button",
    } = useContextProps(ButtonContext, props);

    const internalRef = useForwardedRef<HTMLButtonElement>(ref);
    const { buttonProps, isPressed } = useButtonLink(
      {
        ...props,
        elementType: as,
        "aria-label": isLoading ? loadingLabel : props["aria-label"],
      },
      internalRef
    );

    const { focusProps } = useFocusRing();

    const renderProps = useRenderProps({
      componentClassName: "aje-btn",
      className,
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
        {...mergeProps(buttonProps, focusProps, renderProps)}
      >
        {isLoading && (
          <SpinnerLoader
            isLoading={!loadingComplete}
            placement="absolute center"
          />
        )}
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

export default Button;
