import React from "react";
import Label from "../../../Utility/Label";
import { useIds } from "../../../../hooks";
import InputError from "../../../Utility/InputError";
import { makeEventHandler } from "../../../../utils";
import { TextInputProps } from "../TextInput.types";
import ComponentWrapper from "../../../Utility/ComponentWrapper";

/** TextInput component. Fowards a `ref` to the internal input element */
const DefaultTextInput = React.forwardRef(
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
    const [inputId, errorId] = useIds("TextInput", ["input", "error"]);

    return (
      <ComponentWrapper
        className="aje-input"
        size={size}
        disabled={disabled}
        required={required}
        error={error}
      >
        <Label message={message} hidden={hideLabel} htmlFor={inputId}>
          {label}
        </Label>
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
        <InputError error={error} id={errorId} />
      </ComponentWrapper>
    );
  }
);

export default DefaultTextInput;
