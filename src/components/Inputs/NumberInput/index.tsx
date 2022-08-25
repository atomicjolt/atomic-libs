import React, { ChangeEvent } from "react";
import cn from "classnames";
import { useIds } from "../../../hooks";
import { ControlledInput, SharedInputProps } from "../../../types";
import Label from "../../Utility/Label";
import InputError from "../../Utility/InputError";

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
    const [inputId, errorId] = useIds("number-input", ["input", "error"]);

    return (
      <div
        className={cn("aje-input", `is-${size}`, {
          "has-error": error,
          "is-disabled": disabled,
        })}
      >
        <Label message={message} htmlFor={inputId} hidden={hideLabel}>
          {label}
        </Label>
        <input
          id={inputId}
          ref={ref}
          aria-describedby={error ? errorId : ""}
          type="number"
          min={min}
          max={max}
          value={value}
          readOnly={readonly}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          onChange={(e) => onChange && onChange(parseInt(e.target.value), e)}
        />
        <InputError error={error} id={errorId} />
      </div>
    );
  }
);

export default NumberInput;
