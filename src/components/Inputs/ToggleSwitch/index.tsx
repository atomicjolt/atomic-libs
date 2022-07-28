import React, { ChangeEvent } from "react";
import cn from "classnames";
import { useIds, useInitialRender } from "../../../hooks";
import { EventHandler } from "../../../types";
export interface Props {
  /** Must include a label. Labels are always Sentence case. */
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange: EventHandler<boolean, ChangeEvent<HTMLInputElement>>;
}

/** Toggle Switch Component */
const ToggleSwitch = React.forwardRef<HTMLInputElement, Props>(
  ({ label, onChange, checked = false, disabled = false }, ref) => {
    const [inputId] = useIds("toggle", ["input"]);

    const firstRender = useInitialRender();

    return (
      <label className="aje-toggle-switch" htmlFor={inputId}>
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked, e)}
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
