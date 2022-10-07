import React from "react";
import cn from "classnames";
import { useIds } from "../../../hooks";
import { CheckedInputProps } from "../../../types";
import { makeEventHandler } from "../../../utils";

export type CheckboxProps = CheckedInputProps;

/** Checkbox Component. Accepts a `ref` */
const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const [inputId] = useIds("Checkbox", ["input"]);
    const {
      label,
      error,
      message,
      checked,
      onClick,
      onChange,
      required,
      className,
      ...inputProps
    } = props;

    return (
      <label
        className={cn("aje-checkbox", className, {
          "has-error": error,
          "is-required": required,
        })}
        htmlFor={inputId}
      >
        <input
          id={inputId}
          ref={ref}
          type="checkbox"
          checked={checked}
          onClick={makeEventHandler(
            onClick,
            (e) => (e.target as HTMLInputElement).checked
          )}
          onChange={makeEventHandler(onChange, (e) => e.target.checked)}
          required={required}
          {...inputProps}
        />
        <span className="aje-checkbox__label">
          {label}
          {message && <p className="aje-label--message">{message}</p>}
          {error && <p className="aje-label--error">{error}</p>}
        </span>
      </label>
    );
  }
);

export default Checkbox;
