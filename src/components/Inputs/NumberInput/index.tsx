import React, { ChangeEvent } from "react";
import cn from "classnames";
import { useIds } from "../../../hooks";
import { ControlledInput, SharedInputProps } from "../../../types";
import Label from "../../Utility/Label";
import InputError from "../../Utility/InputError";
import ComponentWrapper from "../../Utility/ComponentWrapper";

export interface NumberInputProps
  extends SharedInputProps,
    ControlledInput<number> {
  min?: number;
  max?: number;
}

/** Number Input Component. Accepts a `ref` */
const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      value,
      min,
      max,
      onChange,
      label,
      error,
      message,
      size = "small",
      readonly = false,
      disabled = false,
      required = false,
      hideLabel = false,
      placeholder,
    },
    ref
  ) => {
    const [inputId, errorId] = useIds("NumberInput", ["input", "error"]);

    return (
      <ComponentWrapper
        className="aje-input"
        size={size}
        disabled={disabled}
        required={required}
        error={error}
      >
        <Label message={message} htmlFor={inputId} hidden={hideLabel}>
          {label}
        </Label>
        <input
          type="number"
          id={inputId}
          ref={ref}
          aria-describedby={error ? errorId : ""}
          min={min}
          max={max}
          readOnly={readonly}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange && onChange(parseInt(e.target.value), e)}
        />
        <InputError error={error} id={errorId} />
      </ComponentWrapper>
    );
  }
);

export default NumberInput;
