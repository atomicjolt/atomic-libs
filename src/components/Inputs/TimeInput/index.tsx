import cn from "classnames";
import React from "react";
import { useIds } from "../../../hooks";
import { EventHandler, SharedInputProps } from "../../../types";
import { makeEventHandler } from "../../../utils";
import InputError from "../../Utility/InputError";
import Label from "../../Utility/Label";
export interface Props extends SharedInputProps {
  value: string;
  min?: string;
  max?: string;
  onChange: EventHandler<string, React.ChangeEvent<HTMLInputElement>>;
}

/** Time Input Component */
const TimeInput = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      error,
      message,
      size = "medium",
      min,
      max,
      value,
      onChange,
      readonly = false,
      disabled = false,
      required = false,
    },
    ref
  ) => {
    const [inputId, errorId] = useIds("time", ["input", "error"]);

    return (
      <div
        className={cn("aj-input", `is-${size}`, {
          "has-error": error,
          "is-disabled": disabled,
        })}
      >
        <Label message={message} htmlFor={inputId}>
          {label}
        </Label>
        <div className="aj-input__time">
          <input
            id={inputId}
            ref={ref}
            aria-describedby={error ? errorId : ""}
            type="time"
            min={min}
            max={max}
            value={value}
            readOnly={readonly}
            disabled={disabled}
            required={required}
            onChange={makeEventHandler(onChange)}
          />
        </div>
        <InputError error={error} id={errorId} />
      </div>
    );
  }
);

export default TimeInput;
