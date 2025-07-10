import React from "react";
import cn from "classnames";
import { useToggleState } from "react-stately";
import type { AriaLabelingProps } from "@react-types/shared";
import { useSwitch, AriaSwitchProps } from "@react-aria/switch";
import { VisuallyHidden } from "@react-aria/visually-hidden";

import { AriaProps, BaseProps, FieldDomProps } from "../../../types";
import {
  ToggleSwitchIcon,
  ToggleSwitchContainer,
  ToggleSwitchLabel,
  ToggleSwitchWrapper,
} from "./ToggleSwitch.styles";
import { useForwardedRef } from "../../../hooks/useForwardedRef";
import { useFirstStateChange } from "../../../hooks/util";
import { useFocusRing } from "../../../hooks/useFocusRing";
import { fieldStatusSelectors, useRenderProps } from "@hooks/useRenderProps";

export interface ToggleSwitchProps
  extends AriaProps<AriaSwitchProps>,
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
  const { inputProps, labelProps, isSelected } = useSwitch(
    props,
    state,
    internalRef
  );
  const { focusProps, isFocusVisible } = useFocusRing();

  const changed = useFirstStateChange(state.isSelected);

  const { childrenPosition = "left" } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-toggle-switch",
    ...props,
    selectors: fieldStatusSelectors(props),
  });

  return (
    <ToggleSwitchWrapper {...renderProps}>
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

        {childrenPosition === "left" && renderProps.children}

        <ToggleSwitchContainer data-focus-visible={isFocusVisible}>
          <ToggleSwitchIcon />
        </ToggleSwitchContainer>

        {childrenPosition === "right" && renderProps.children}
      </ToggleSwitchLabel>
    </ToggleSwitchWrapper>
  );
});
