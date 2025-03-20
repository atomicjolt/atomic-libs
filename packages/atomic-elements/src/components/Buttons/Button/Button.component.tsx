import { forwardRef, useMemo } from "react";
import { AriaButtonOptions } from "@react-aria/button";
import { mergeProps, useObjectRef } from "@react-aria/utils";

import { SpinnerLoader } from "../../Feedback/SpinnerLoader";
import {
  ExtendedSize,
  HasVariant,
  LoadingProps,
  RenderBaseProps,
  SuggestStrings,
} from "../../../types";
import { useFocusRing } from "@hooks/useFocusRing";
import { useRenderProps } from "@hooks/useRenderProps";
import { useButtonLink } from "@hooks/useButtonLink";
import { useContextProps } from "@hooks/useContextProps";
import { StyledButton } from "./Button.styles";
import { ButtonContext } from "./Button.context";
import { SlotProps } from "@hooks/useSlottedContext";
import { useLoading } from "@components/Feedback/Loading";

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

/** A button component that can be used to trigger actions or events
 *
 * @example <Button onPress={() => alert("Hello, world!")}>Click me</Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, forwardedRef) {
    [props, forwardedRef] = useContextProps(ButtonContext, props, forwardedRef);

    const ref = useObjectRef(forwardedRef);

    const {
      loadingLabel,
      loadingComplete = false,
      as = props.href ? "a" : "button",
      variant = "primary",
      size = "auto",
    } = props;

    const { isLoading: ctxIsLoading, buttonBehavior } = useLoading();

    const [isLoading, isDisabled] = useMemo(() => {
      const derivedIsLoading =
        props.isLoading ?? (ctxIsLoading && buttonBehavior === "loading");
      const derivedIsDisabled =
        props.isDisabled ?? (ctxIsLoading && buttonBehavior === "disabled");

      return [
        props.isLoading !== undefined ? props.isLoading : derivedIsLoading,
        props.isDisabled !== undefined ? props.isDisabled : derivedIsDisabled,
      ];
    }, [ctxIsLoading, buttonBehavior, props.isLoading, props.isDisabled]);

    const { buttonProps, isPressed } = useButtonLink(
      {
        ...props,
        elementType: as,
        isDisabled,
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
      <StyledButton
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
      </StyledButton>
    );
  }
);
