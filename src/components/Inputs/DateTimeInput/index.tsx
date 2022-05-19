import React, { useMemo } from "react";
import cn from "classnames";
import { useIds, useIsoDateString } from "../../../hooks";
import { SharedInputProps } from "../../../types";
import "../../general.scss";
import InputLabel from "../../shared/InputLabel";
import "../common.scss";
import "./styles.scss";

export interface Props<T> extends SharedInputProps {
  value: T;
  /** Whatever type the value is provided as, the new value will be provided as.
   * If value is a string, `onChange` will recieve a string, if it is a Date,
   * `onChange` will recieve a Date
   */
  onChange: (value: T) => void;
  min?: string | Date | number;
  max?: string | Date | number;
  readonly?: boolean;
}

/** Date Input Component */
export default function DateTimeInput<T extends string | Date | number>({
  value: initialValue,
  min: initialMin,
  max: initialMax,
  onChange,
  label,
  error,
  message,
  size = "medium",
  readonly = false,
  disabled = false,
  required = false,
  hideLabel = false,
}: Props<T>) {
  const [inputId, errorId] = useIds("date-input", ["input", "error"]);

  const value = useIsoDateString(initialValue);
  const min = useIsoDateString(initialMin);
  const max = useIsoDateString(initialMax);

  return (
    <div
      className={cn("aj-input", `is-${size}`, {
        "has-error": error,
        "is-disabled": disabled,
      })}
    >
      <InputLabel message={message} htmlFor={inputId} hidden={hideLabel}>
        {label}
      </InputLabel>
      <div className="aj-input__date">
        <input
          id={inputId}
          aria-describedby={error ? errorId : ""}
          type="datetime-local"
          min={min}
          max={max}
          value={value}
          readOnly={readonly}
          disabled={disabled}
          required={required}
          onChange={(e) => {
            if (typeof initialValue === "string") {
              onChange(e.target.value as T);
            } else if (typeof initialValue === "number") {
              onChange(new Date(e.target.value).getTime() as T);
            } else {
              onChange(new Date(e.target.value) as T);
            }
          }}
        />
      </div>
      {error && (
        <p id={errorId} className="aj-label--error">
          {error}
        </p>
      )}
    </div>
  );
}
