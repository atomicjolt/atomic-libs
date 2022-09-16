import React from "react";
import cn from "classnames";
import { useIds, useInitialRender } from "../../../hooks";
import { EventHandler } from "../../../types";
import { makeEventHandler } from "../../../utils";

export interface ToggleSwitchProps {
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
      ...inputProps
    } = props;

    return (
      <label className="aje-toggle-switch" htmlFor={inputId}>
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={makeEventHandler(onChange, (e) => e.target.checked)}
          onClick={makeEventHandler(
            onClick,
            (e) => (e.target as HTMLInputElement).checked
          )}
          {...inputProps}
        />
        <span
          className={cn("aje-toggle-switch__label", {
            "check-animation": checked && !firstRender,
            "uncheck-animation": !checked && !firstRender,
          })}
        >
          {label}
          <div>
            <i />
          </div>
        </span>
      </label>
    );
  }
);

export default ToggleSwitch;
