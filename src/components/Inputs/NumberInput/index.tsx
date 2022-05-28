import React, { ChangeEvent } from "react";
import cn from "classnames";
import { useIds } from "../../../hooks";
import { EventHandler, SharedInputProps } from "../../../types";
import "../../general.scss";
import InputLabel from "../../Utility/InputLabel";
import "../common.scss";
import "./styles.scss";
import InputError from "../../Utility/InputError";

export interface Props extends SharedInputProps {
  value?: number;
  onChange?: EventHandler<number, ChangeEvent<HTMLInputElement>>;
  min?: number;
  max?: number;
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
        onChange={(e) => onChange && onChange(parseInt(e.target.value), e)}
      />
      <InputError error={error} id={errorId} />
    </div>
  );
}
