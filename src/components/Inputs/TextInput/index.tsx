import React from "react";
import cn from "classnames";
import "../../general.scss";
import "../common.scss";
import "./styles.scss";
import InputLabel from "../../Utility/InputLabel";
import { ControlledInput, SharedInputProps } from "../../../types";
import { useIds } from "../../../hooks";
import InputError from "../../Utility/InputError";
import { makeEventHandler } from "../../../utils";

export interface TextInputProps extends SharedInputProps, ControlledInput {
  /** Other types like date, time, and number have their own component  */
  readonly type?: "text" | "email" | "tel";
}
/** TextInput component. Fowards a `ref` to the internal input element */
const TextInput = React.forwardRef(
  (
    {
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
    }: TextInputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
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
          ref={ref}
          id={inputId}
          aria-describedby={error ? errorId : ""}
          type={type}
          placeholder={placeholder}
          value={value}
          readOnly={readonly}
          disabled={disabled}
          required={required}
          onChange={makeEventHandler(onChange)}
        />
        <InputError error={error} id={errorId} />
      </div>
    );
  }
);

export default TextInput;
