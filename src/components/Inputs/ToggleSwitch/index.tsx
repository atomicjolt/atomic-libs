import React from "react";
import cn from "classnames";
import { useFirstStateChange, useIds } from "../../../hooks";
import { EventHandler, HasClassName } from "../../../types";
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
  readonly onChange?: EventHandler<
    boolean,
    React.ChangeEvent<HTMLInputElement>
  >;
}

/** Toggle Switch Component */
const ToggleSwitch = React.forwardRef<HTMLInputElement, ToggleSwitchProps>(
  (props, ref) => {
    const [inputId] = useIds("ToggleSwitch", ["input"]);

    const {
      label,
      onChange,
      checked,
      disabled = false,
      className,
      ...inputProps
    } = props;

    const changed = useFirstStateChange(checked);

    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        const checked: boolean = (e.target as HTMLInputElement).checked;
        onChange(checked, e);
      }
    };

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
          onChange={handleClick}
          {...inputProps}
        />
        <ToggleSwitchLabel
          className={cn("aje-toggle-switch__label", {
            "check-animation": checked && changed,
            "uncheck-animation": !checked && changed,
            "is-checked": checked && !changed,
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
