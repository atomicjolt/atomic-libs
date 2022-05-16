import React from "react";
import "../../general.scss";
import "../common.scss";
import "./styles.scss";

export interface Props {
  /** Must include a label. Labels are always Sentence case. */
  label: string;
  /** Error text should be descriptive and explicit in meaning. */
  error?: string;
  /** For additional information (ex. date format mm/dd/yy) */
  message?: string;
  /** The input size should reflect the expected size of its content. */
  size?: "medium" | "large" | "auto" | "full";
  min?: string;
  max?: string;
  value?: string;
  readonly?: boolean;
  disabled?: boolean;
  required?: boolean;
}

/** Date Time Input Component */
export default function DateTimeInput({
  label,
  error,
  message,
  size = "medium",
  min,
  max,
  value,
  readonly = false,
  disabled = false,
  required = false,
}: Props) {
  const inputID = "dateInput";
  const errorID = "errorText";
  /* Add a space before the added class rather than inside the className attr on the tag. Looks cleaner. */
  let errorClass = error ? " has-error" : "";
  let disabledClass = disabled ? " is-disabled" : "";

  return (
    <div className={`aj-input is-${size}${errorClass}${disabledClass}`}>
      <label className="aj-label" htmlFor={inputID}>
        {label}
        {message ? <p className="aj-label--message">{message}</p> : null}
      </label>
      <div className="aj-input__date">
        <input
          id={inputID}
          aria-describedby={error ? errorID : ""}
          type="datetime-local"
          min={min}
          max={max}
          value={value}
          readOnly={readonly}
          disabled={disabled}
          required={required}
        />
      </div>
      {error ? (
        <p id={errorID} className="aj-label--error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
