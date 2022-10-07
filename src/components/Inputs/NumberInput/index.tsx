import React from "react";
import { useIds } from "../../../hooks";
import { InputProps } from "../../../types";
import Label from "../../Utility/Label";
import InputError from "../../Utility/InputError";
import ComponentWrapper from "../../Utility/ComponentWrapper";
import { makeEventHandler } from "../../../utils";

export interface NumberInputProps extends InputProps<number> {
  min?: number;
  max?: number;
}

/** Number Input Component. Accepts a `ref` */
const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (props, ref) => {
    const [inputId, errorId] = useIds("NumberInput", ["input", "error"]);

    const {
      value,
      min,
      max,
      onChange,
      label,
      error,
      message,
      size = "small",
      hideLabel,
      className,
      ...inputProps
    } = props;

    const { disabled, required } = inputProps;

    return (
      <ComponentWrapper
        className={["aje-input", className]}
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
          value={value}
          onChange={makeEventHandler(onChange, (e) =>
            parseInt(e.target.value, 10)
          )}
          {...inputProps}
        />
        <InputError error={error} id={errorId} />
      </ComponentWrapper>
    );
  }
);

export default NumberInput;
