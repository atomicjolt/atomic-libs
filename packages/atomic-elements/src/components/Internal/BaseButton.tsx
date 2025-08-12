import { AriaButtonOptions } from "@react-aria/button";
import { forwardRef } from "react";
import { mergeProps, useObjectRef } from "@react-aria/utils";
import {
  ExtendedSize,
  HasVariant,
  LoadingProps,
  RenderBaseProps,
  SuggestStrings,
} from "../../types";
import { SlotProps } from "@hooks/useSlottedContext";
import { SpinnerLoader } from "@components/Feedback/SpinnerLoader";
import { useRenderProps } from "@hooks";
import { useFocusRing } from "@hooks/useFocusRing";
import { useButtonLink } from "@hooks/useButtonLink";

export type ButtonVariants = SuggestStrings<
  | "primary"
  | "secondary"
  | "link"
  | "success"
  | "error"
  | "inverted"
  | "content"
  | "border"
  | "ghost"
>;

interface ButtonRenderProps {
  isLoading: boolean;
  isPressed: boolean;
  isFocusVisible: boolean;
  isFocused: boolean;
}

export interface ButtonProps
  extends AriaButtonOptions<"button">,
    LoadingProps,
    RenderBaseProps<ButtonRenderProps>,
    HasVariant<ButtonVariants>,
    SlotProps {
  as?: "button" | "a";
  size?: ExtendedSize;
}

export interface BaseButtonProps extends ButtonProps {
  Component: React.ElementType;
}

/** BaseButton component - a foundational button component that can be extended for various button types */
export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  function BaseButton(props, forwardedRef) {
    const ref = useObjectRef(forwardedRef);

    const {
      Component,
      isLoading = false,
      loadingLabel,
      loadingComplete = false,
      as = props.href ? "a" : "button",
      variant = "primary",
      size = "auto",
    } = props;

    const { buttonProps, isPressed } = useButtonLink(
      {
        ...props,
        elementType: as,
        "aria-label": isLoading ? loadingLabel : props["aria-label"],
      },
      ref
    );

    const { focusProps, isFocusVisible, isFocused } = useFocusRing();

    const renderProps = useRenderProps({
      componentClassName: "aje-btn",
      ...props,
      variant,
      size,
      values: { isPressed, isLoading, isFocusVisible, isFocused },
      selectors: {
        "data-pressed": isPressed,
        "data-loading": isLoading,
      },
    });

    return (
      <Component
        as={as}
        ref={ref}
        {...mergeProps(buttonProps, focusProps, renderProps)}
      >
        {isLoading && (
          <SpinnerLoader
            isLoading={!loadingComplete}
            placement="absolute center"
            aria-label="loading"
          />
        )}
        {renderProps.children}
      </Component>
    );
  }
);
