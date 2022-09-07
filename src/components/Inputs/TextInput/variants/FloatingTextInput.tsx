import React from "react";
import cn from "classnames";
import Label from "../../../Utility/Label";
import { useIds } from "../../../../hooks";
import InputError from "../../../Utility/InputError";
import { makeEventHandler } from "../../../../utils";
import { TextInputProps } from "../TextInput.types";
import ComponentWrapper from "../../../Utility/ComponentWrapper";

/** TextInput component. Fowards a `ref` to the internal input element */
const FloatingTextInput = React.forwardRef(
  (
    {
      value,
      onChange,
      type = "text",
      size = "medium",
      label,
      error,
      message,
      placeholder = "",
      hideLabel = false,
      readonly = false,
      disabled = false,
      required = false,
    }: TextInputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const [inputId, errorId] = useIds("TextInput", ["input", "error"]);

    return (
      <ComponentWrapper
        className="aje-input--floating"
        size={size}
        disabled={disabled}
        required={required}
        error={error}
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
          <Label className="" hidden={hideLabel} htmlFor={inputId}>
            {label}
          </Label>
        </div>
        {message && <p className="aje-label--message">{message}</p>}
        <InputError error={error} id={errorId} />
      </ComponentWrapper>
    );
  }
);

export default FloatingTextInput;
