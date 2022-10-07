import cn from "classnames";
import React, { useContext } from "react";
import { useIds } from "../../../hooks";
import { HasClassName } from "../../../types";
import RadioContext from "./context";

export interface RadioProps extends HasClassName {
  readonly value: string;
  readonly children: React.ReactNode;
  readonly disabled?: boolean;
  readonly message?: string;
  readonly error?: string;
}

/** Radio Elements, must be a descendant of a `<RadioGroup>` */
export default function Radio(props: RadioProps) {
  const { value, children, disabled, message, error, className } = props;
  const [inputId] = useIds(`radio`, ["input"]);

  const {
    currentValue,
    onChange,
    name,
    disabled: parentDisabled,
  } = useContext(RadioContext);

  return (
    <label className={cn("aje-radio", className)} htmlFor={inputId}>
      <input
        id={inputId}
        type="radio"
        name={name}
        checked={value == currentValue}
        disabled={disabled || parentDisabled}
        value={value}
        onChange={onChange}
      />
      <span className="aje-checkbox__label">
        {children}
        {message && <p className="aje-label--message">{message}</p>}
        {error && <p className="aje-label--error">{error}</p>}
      </span>
    </label>
  );
}
