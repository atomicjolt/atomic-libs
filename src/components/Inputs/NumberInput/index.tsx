import cn from "classnames";
import React from "react";
import { useIds } from "../../../hooks";
import { SharedInputProps } from "../../../types";
import "../../general.scss";
import InputLabel from "../../shared/InputLabel";
import "../common.scss";
import "./styles.scss";

export interface Props extends SharedInputProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

/** Number Input Component */
export default function NumberInput({
  value,
  min,
  max,
  onChange,
  label,
  error,
  message,
  size = "small",
  readonly = false,
  disabled = false,
  required = false,
  hideLabel = false,
}: Props) {
  const [inputId, errorId] = useIds("number-input", ["input", "error"]);

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
      <input
        id={inputId}
        aria-describedby={error ? errorId : ""}
        type="number"
        min={min}
        max={max}
        value={value}
        readOnly={readonly}
        disabled={disabled}
        required={required}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
      {error && (
        <p id={errorId} className="aj-label--error">
          {error}
        </p>
      )}
    </div>
  );
}
