import React, { useRef } from "react";
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
  readonly onChange?: EventHandler<
    boolean,
    React.MouseEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>
  >;
}

const CHECKED_CLASS_MAP: Record<string, string> = {
  true: "check-animation",
  false: "uncheck-animation",
};

/** Toggle Switch Component */
const ToggleSwitch = React.forwardRef<HTMLInputElement, ToggleSwitchProps>(
  (props, ref) => {
    const [inputId] = useIds("ToggleSwitch", ["input"]);
    const checkedClass = useRef<string | null>(null);

    const {
      label,
      onChange,
      checked,
      disabled = false,
      className,
      ...inputProps
    } = props;

    const handleClick = (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.MouseEvent<HTMLInputElement>
    ) => {
      if (onChange) {
        const checked: boolean = (e.target as HTMLInputElement).checked;
        checkedClass.current = CHECKED_CLASS_MAP[String(checked)];
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
          onClick={handleClick}
          {...inputProps}
        />
        <ToggleSwitchLabel
          className={cn("aje-toggle-switch__label", checkedClass.current)}
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
