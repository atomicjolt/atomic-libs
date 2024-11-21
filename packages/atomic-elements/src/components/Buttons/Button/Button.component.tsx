import { forwardRef } from "react";
import { AriaButtonOptions } from "@react-aria/button";
import { mergeProps } from "@react-aria/utils";

import { SpinnerLoader } from "../../Loaders/SpinnerLoader";
import {
  ExtendedSize,
  HasVariant,
  LoadingProps,
  RenderBaseProps,
} from "../../../types";
import { StyledButton } from "./Button.styles";
import { ButtonVariants } from "../Buttons.types";
import { useForwardedRef } from "@hooks/useForwardedRef";
import { useFocusRing } from "@hooks/useFocusRing";
import { useRenderProps } from "@hooks/useRenderProps";
import { useButtonLink } from "@hooks/useButtonLink";
import { useContextPropsV2 } from "@hooks/useContextProps";
import { SlotProps } from "@hooks/useSlottedContext";
import { ButtonContext } from "./Button.context";

export interface ButtonProps
  extends AriaButtonOptions<"button">,
    LoadingProps,
    RenderBaseProps<never>,
    HasVariant<ButtonVariants>,
    SlotProps {
  as?: "button" | "a";
  size?: ExtendedSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    [props, ref] = useContextPropsV2(ButtonContext, props, ref);

    const {
      children,
      size = "auto",
      variant = "primary",
      isLoading = false,
      loadingLabel,
      loadingComplete = false,
      className,
      as = props.href ? "a" : "button",
    } = props;

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
      children,
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
        {renderProps.children}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

export default Button;
