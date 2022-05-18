import React from "react";
import cn from "classnames";
import "../../general.scss";
import InputLabel from "../../shared/InputLabel";
import "../common.scss";
import "./styles.scss";
import { makeIds } from "../../../utils";
import {
  HTMLInputTypeAttribute,
  HTMLInputValueAttribute,
  SharedInputProps,
} from "../../../types";
import { useIds } from "../../../hooks";

export interface Props extends SharedInputProps {
  readonly value?: string;
  readonly onChange?: (value: string) => void;
  readonly type?: "text" | "email" | "tel" | "search";
  readonly readonly?: boolean;
  readonly placeholder?: string;
}

/** Text Input Component */
export default function TextInput({
  value,
  onChange,
  type = "text",
  size = "medium",
  label,
  error,
  message,
  placeholder,
  hideLabel = false,
  readonly = false,
  disabled = false,
  required = false,
}: Props) {
  const [inputId, errorId] = useIds(`text-input`, ["input", "error"]);

  return (
    <div
      className={cn("aj-input", `is-${size}`, {
        "has-error": error,
        "is-disabled": disabled,
      })}
    >
      <InputLabel message={message} hidden={hideLabel} htmlFor={inputId}>
        {label}
      </InputLabel>
      <input
        id={inputId}
        aria-describedby={error ? errorId : ""}
        type={type}
        placeholder={placeholder}
        value={value}
        readOnly={readonly}
        disabled={disabled}
        required={required}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
      {error && (
        <p id={errorId} className="aj-label--error">
          {error}
        </p>
      )}
    </div>
  );
}
