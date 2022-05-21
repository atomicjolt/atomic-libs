import cn from "classnames";
import React, { ChangeEvent } from "react";
import { useIds } from "../../../hooks";
import { EventHandler } from "../../../types";
import "../../general.scss";
import "../common.scss";
import "./styles.scss";

export interface Props {
  /** Must include a label. Labels are always Sentence case. */
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange: EventHandler<boolean, ChangeEvent<HTMLInputElement>>;
}

/** Toggle Switch Component */
export default function ToggleSwitch({
  label,
  onChange,
  checked = false,
  disabled = false,
}: Props) {
  const [inputId] = useIds("toggle", ["input"]);

  return (
    <label className="aj-toggle-switch" htmlFor={inputId}>
      <input
        id={inputId}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked, e)}
      />
      <span
        className={cn("aj-toggle-switch__label", {
          "check-animation": checked,
          "uncheck-animation": !checked,
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
