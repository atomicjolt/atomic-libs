import React from "react";
import cn from "classnames";
import { useToggleState } from "react-stately";
import type { ToggleProps } from "@react-types/checkbox";
import type { AriaLabelingProps } from "@react-types/shared";
import { useSwitch, VisuallyHidden } from "react-aria";
import {
  AriaProps,
  BaseProps,
  FieldDomProps,
  HasChildren,
} from "../../../types";
import {
  ToggleSwitchIcon,
  ToggleSwitchContainer,
  ToggleSwitchLabel,
  ToggleSwitchWrapper,
} from "./ToggleSwitch.styles";
import useForwardedRef from "../../../hooks/useForwardedRef";
import { useFirstStateChange } from "../../../hooks";
import { useFocusRing } from "../../../hooks/useFocusRing";

export interface ToggleSwitchProps
  extends AriaProps<ToggleProps>,
    AriaLabelingProps,
    FieldDomProps,
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
  const { inputProps, labelProps, isDisabled, isReadOnly, isSelected } =
    useSwitch(props, state, internalRef);
  const { focusProps, isFocusVisible } = useFocusRing();

  const changed = useFirstStateChange(state.isSelected);

  const { children, className, childrenPosition = "left", isInvalid } = props;

  return (
    <ToggleSwitchWrapper
      forwardedAs="label"
      className={cn("aje-toggle-switch", className)}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}
    >
      <ToggleSwitchLabel
        {...labelProps}
        className={cn("aje-toggle-switch__label", {
          "check-animation": isSelected && changed,
          "uncheck-animation": !isSelected && changed,
          "is-checked": isSelected && !changed,
        })}
      >
        <VisuallyHidden>
          <input {...inputProps} {...focusProps} ref={internalRef} />
        </VisuallyHidden>

        {childrenPosition === "left" && children}

        <ToggleSwitchContainer data-focus-visible={isFocusVisible}>
          <ToggleSwitchIcon />
        </ToggleSwitchContainer>

        {childrenPosition === "right" && children}
      </ToggleSwitchLabel>
    </ToggleSwitchWrapper>
  );
});
