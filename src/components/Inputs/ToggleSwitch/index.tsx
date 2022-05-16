import React, { useState, useEffect } from "react";
import "../../general.scss";
import "../common.scss";
import "./styles.scss";

export interface Props {
  /** Must include a label. Labels are always Sentence case. */
  label: string;
  checked?: boolean;
  disabled?: boolean;
}

/** Toggle Switch Component */
export default function ToggleSwitch({
  label,
  checked,
  disabled = false,
}: Props) {
  const inputID = "toggleSwitch";

  const [uncheckedAnimation, setUncheckedAnimation] = useState(false);
  const [checkedAnimation, setCheckedAnimation] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const checkedAnimationClass = checkedAnimation ? " check-animation" : "";
  const uncheckedAnimationClass = uncheckedAnimation
    ? " uncheck-animation"
    : "";

  const animationHandler = (e) => {
    if (e.target.checked) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      setTimeoutId(null);
      setUncheckedAnimation(false);
      setCheckedAnimation(true);
    } else {
      setUncheckedAnimation(true);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      const newTimeoutId = setTimeout(() => {
        setCheckedAnimation(false);
        setUncheckedAnimation(false);
      }, 200);
      setTimeoutId(newTimeoutId);
    }
  };

  return (
    <label className="aj-toggle-switch" htmlFor={inputID}>
      <input
        id={inputID}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={animationHandler}
      />
      <span
        className={`aj-toggle-switch__label${checkedAnimationClass}${uncheckedAnimationClass}`}
      >
        {label}
        <div>
          <i />
        </div>
      </span>
    </label>
  );
}
