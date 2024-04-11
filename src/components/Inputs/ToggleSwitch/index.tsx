import React from "react";
import cn from "classnames";
import { useToggleState } from "react-stately";
import type { ToggleProps } from "@react-types/checkbox";
import type { AriaLabelingProps } from "@react-types/shared";
import { useFocusRing, useSwitch, VisuallyHidden } from "react-aria";
import { AriaProps, BaseProps, DomProps, HasChildren } from "../../../types";
import {
  ToggleSwitchIcon,
  ToggleSwitchContainer,
  ToggleSwitchLabel,
  ToggleSwitchWrapper,
} from "./ToggleSwitch.styles";
import useForwardedRef from "../../../hooks/useForwardedRef";
import { useFirstStateChange } from "../../../hooks";

export interface ToggleSwitchProps
  extends AriaProps<ToggleProps>, AriaLabelingProps,
    DomProps,
    BaseProps {
  /** The position of the children relative to the switch */
  childrenPosition?: "left" | "right";
  isDisabled?: boolean;
  isInvalid?: boolean;
}

/** A Toggle Switch is similar to a checkbox, but represents on/off values as opposed to selection. */
export const ToggleSwitch = React.forwardRef<
  HTMLInputElement,
  ToggleSwitchProps
>((props, ref) => {
  const state = useToggleState(props);
  const internalRef = useForwardedRef(ref);
  const { inputProps, labelProps } = useSwitch(props, state, internalRef);
  const { isFocusVisible, focusProps } = useFocusRing();

  const changed = useFirstStateChange(state.isSelected);

  const {
    children,
    className,
    childrenPosition = "left",
    isDisabled,
    isInvalid,
  } = props;

  return (
    <ToggleSwitchWrapper
      className={cn("aje-toggle-switch", className, {
        "is-disabled": isDisabled,
        "has-error": isInvalid,
      })}
    >
      <ToggleSwitchLabel
        {...labelProps}
        className={cn("aje-toggle-switch__label", {
          "check-animation": state.isSelected && changed,
          "uncheck-animation": !state.isSelected && changed,
          "is-checked": state.isSelected && !changed,
        })}
      >
        <VisuallyHidden>
          <input {...focusProps} {...inputProps} ref={internalRef} />
        </VisuallyHidden>
        {childrenPosition === "left" && children}

        <ToggleSwitchContainer
          className={cn({ "focus-visible": isFocusVisible })}
        >
          <ToggleSwitchIcon />
        </ToggleSwitchContainer>
        {childrenPosition === "right" && children}
      </ToggleSwitchLabel>
    </ToggleSwitchWrapper>
  );
});
