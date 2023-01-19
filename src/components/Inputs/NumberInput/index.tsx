import React from "react";
import cn from "classnames";
import { useIds } from "../../../hooks";
import { InputProps } from "../../../types";
import Label from "../../Utility/Label";
import InputError from "../../Utility/InputError";
import { makeEventHandler } from "../../../utils";
import { Input, InputWrapper } from "../Inputs.styles";
import { StyledNumberInput } from "./NumberInput.styles";

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
      <InputWrapper
        className={cn("aje-input", className)}
        size={size}
        disabled={disabled}
        required={required}
        error={error}
      >
        <Label message={message} htmlFor={inputId} hidden={hideLabel}>
          {label}
        </Label>
        <StyledNumberInput
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
      </InputWrapper>
    );
  }
);

export default NumberInput;
