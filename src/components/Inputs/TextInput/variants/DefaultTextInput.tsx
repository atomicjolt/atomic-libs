import React from "react";
import Label from "../../../Utility/Label";
import { useIds } from "../../../../hooks";
import InputError from "../../../Utility/InputError";
import { makeEventHandler } from "../../../../utils";
import ComponentWrapper from "../../../Utility/ComponentWrapper";
import { TextInputProps } from "../TextInput.types";

/** TextInput component. Fowards a `ref` to the internal input element */
const DefaultTextInput = React.forwardRef(
  (props: TextInputProps, ref: React.Ref<HTMLInputElement>) => {
    const [inputId, errorId] = useIds("TextInput", ["input", "error"]);

    const {
      value,
      onChange,
      type = "text",
      label,
      hideLabel,
      size,
      error,
      message,
      ...inputProps
    } = props;

    const { disabled, required } = inputProps;

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
          value={value}
          onChange={makeEventHandler(onChange)}
          type={type}
          {...inputProps}
        />
        <InputError error={error} id={errorId} />
      </ComponentWrapper>
    );
  }
);

export default DefaultTextInput;
