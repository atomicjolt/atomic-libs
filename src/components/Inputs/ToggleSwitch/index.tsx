import React from "react";
import cn from "classnames";
import { useIds, useInitialRender } from "../../../hooks";
import { EventHandler, HasClassName } from "../../../types";
import { makeEventHandler } from "../../../utils";
import {
  ToggleSwitchIcon,
  ToggleSwitchContainer,
  ToggleSwitchLabel,
  ToggleSwitchWrapper,
  HiddenCheckbox,
} from "./ToggleSwitch.styles";

export interface ToggleSwitchProps extends HasClassName {
  readonly checked?: boolean;
  readonly label?: string;
  readonly disabled?: boolean;
  readonly onClick?: EventHandler<boolean, React.MouseEvent<HTMLInputElement>>;
  readonly onChange?: EventHandler<
    boolean,
    React.ChangeEvent<HTMLInputElement>
  >;
}

/** Toggle Switch Component */
const ToggleSwitch = React.forwardRef<HTMLInputElement, ToggleSwitchProps>(
  (props, ref) => {
    const [inputId] = useIds("ToggleSwitch", ["input"]);
    const firstRender = useInitialRender();

    const {
      label,
      onChange,
      onClick,
      checked,
      disabled = false,
      className,
      ...inputProps
    } = props;

    return (
      <ToggleSwitchWrapper
        className={cn("aje-toggle-switch", className)}
        htmlFor={inputId}
      >
        <HiddenCheckbox
          ref={ref}
          id={inputId}
          checked={checked}
          disabled={disabled}
          onChange={makeEventHandler(onChange, (e) => e.target.checked)}
          onClick={makeEventHandler(
            onClick,
            (e) => (e.target as HTMLInputElement).checked
          )}
          {...inputProps}
        />
        <ToggleSwitchLabel
          className={cn("aje-toggle-switch__label", {
            "check-animation": checked && !firstRender,
            "uncheck-animation": !checked && !firstRender,
          })}
        >
          {label}
          <ToggleSwitchContainer>
            <ToggleSwitchIcon />
          </ToggleSwitchContainer>
        </ToggleSwitchLabel>
      </ToggleSwitchWrapper>
    );
  }
);

export default ToggleSwitch;
