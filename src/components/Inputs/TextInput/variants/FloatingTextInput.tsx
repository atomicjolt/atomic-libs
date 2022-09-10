import React from "react";
import Label from "../../../Utility/Label";
import { useIds } from "../../../../hooks";
import InputError from "../../../Utility/InputError";
import { makeEventHandler } from "../../../../utils";
import ComponentWrapper from "../../../Utility/ComponentWrapper";
import { TextInputProps } from "../TextInput.types";

/** FloatingTextInput component. Fowards a `ref` to the internal input element */
const FloatingTextInput = React.forwardRef(
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
            value={value}
            onChange={makeEventHandler(onChange)}
            {...inputProps}
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
