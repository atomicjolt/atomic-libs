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
} from "../../../types";

export interface Props {
  /** Uniquley identifies the input on the page. Is required for accessability purposes.
   * The provided ID only needs to be unique within the subset of any `TextInput`s used on the screen,
   * not of all elements
   */
  readonly id: string;
  readonly type?: HTMLInputTypeAttribute;
  /** Must include a label. Labels are always Sentence case. */
  readonly label: string;
  /** Error text should be descriptive and explicit in meaning. */
  readonly error?: string;
  /** For additional information (ex. date format mm/dd/yy) */
  readonly message?: string;
  /** Placeholders aren't common, you should use the message instead for most
   * placeholders so the user doesn't lose the information after entering text in the input. */
  readonly placeholder?: string;
  /** Only use in very specific circumstances. This hides the label from view,
   * but still allows screen readers to read the label. (A search input might have
   * 'Search...' as a placeholder and no room for a full label so you can hide it.) */
  readonly hideLabel?: boolean;
  /** The input size should reflect the expected size of its content. */
  readonly size?: "small" | "medium" | "large" | "auto" | "full";

  readonly value?: HTMLInputValueAttribute;
  readonly readonly?: boolean;
  readonly disabled?: boolean;
  readonly required?: boolean;
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
