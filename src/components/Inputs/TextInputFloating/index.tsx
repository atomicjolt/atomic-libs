import React from "react";
import cn from "classnames";
import Label from "../../Utility/Label";
import { ControlledInput, SharedInputProps } from "../../../types";
import { useIds } from "../../../hooks";
import InputError from "../../Utility/InputError";
import { makeEventHandler } from "../../../utils";

export interface TextInputFloatingProps
  extends SharedInputProps,
    ControlledInput {
  /** Other types like date, time, and number have their own component  */
  readonly type?: "text" | "email" | "tel";
}
/** TextInput component. Fowards a `ref` to the internal input element */
const TextInputFloating = React.forwardRef(
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
    }: TextInputFloatingProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const [inputId, errorId] = useIds(`text-input`, ["input", "error"]);

    return (
      <div
        className={cn("aje-input--floating", `is-${size}`, {
          "has-error": error,
          "is-disabled": disabled,
        })}
      >
        <div className="aje-input__container">
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
            onChange={onChange && makeEventHandler(onChange)}
          />
          <Label message={message} hidden={hideLabel} htmlFor={inputId}>
            {label}
          </Label>
        </div>
        <InputError error={error} id={errorId} />
      </div>
    );
  }
);

export default TextInputFloating;
