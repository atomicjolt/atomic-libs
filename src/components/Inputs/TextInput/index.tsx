import React from "react";
import cn from "classnames";
import "../../general.scss";
import InputLabel from "../../shared/InputLabel";
import "../common.scss";
import "./styles.scss";
import { makeIds } from "../../../utils";

export interface Props {
  /** Uniquley identifies the input on the page. Is required for accessability purposes.
   * The provided ID only needs to be unique within the subset of any `TextInput`s used on the screen,
   * not of all elements
   */
  id: string;
  type?: "text" | "password" | "email" | "tel";
  /** Must include a label. Labels are always Sentence case. */
  label: string;
  /** Error text should be descriptive and explicit in meaning. */
  error?: string;
  /** For additional information (ex. date format mm/dd/yy) */
  message?: string;
  /** Placeholders aren't common, you should use the message instead for most placeholders so the user doesn't lose the information after entering text in the input. */
  placeholder?: string;
  /** Only use in very specific circumstances. This hides the label from view, but still allows screen readers to read the label. (A search input might have 'Search...' as a placeholder and no room for a full label so you can hide it.) */
  hideLabel?: boolean;
  /** The input size should reflect the expected size of its content. */
  size?: "small" | "medium" | "large" | "auto" | "full";
  value?: string;
  readonly?: boolean;
  disabled?: boolean;
  required?: boolean;
}

/** Text Input Component */
export default function TextInput({
  id,
  type = "text",
  size = "medium",
  label,
  error,
  message,
  placeholder,
  hideLabel = false,
  value,
  readonly = false,
  disabled = false,
  required = false,
}: Props) {
  const [inputId, errorId] = makeIds(`${id}-input`, ["input", "error"]);

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
      />
      {error && (
        <p id={errorId} className="aj-label--error">
          {error}
        </p>
      )}
    </div>
  );
}
