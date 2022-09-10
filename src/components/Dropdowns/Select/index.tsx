import React from "react";
import { HasChildren, InputProps } from "../../../types";
import Label from "../../Utility/Label";
import { useIds } from "../../../hooks";
import InputError from "../../Utility/InputError";
import ComponentWrapper from "../../Utility/ComponentWrapper";
import { makeEventHandler } from "../../../utils";

export interface SelectProps
  extends HasChildren,
    Omit<InputProps<string, HTMLSelectElement>, "placeholder" | "readOnly"> {}

/** Select Component */
export default function Select(props: SelectProps) {
  const [inputId, errorId] = useIds("select", ["select", "error"]);

  const {
    children,
    onChange,
    size = "medium",
    label,
    error,
    message,
    hideLabel = false,
    disabled = false,
    required = false,
    ...inputProps
  } = props;

  return (
    <ComponentWrapper
      className="aje-input"
      size={size}
      error={error}
      required={required}
      disabled={disabled}
    >
      <Label message={message} htmlFor={inputId} hidden={hideLabel}>
        {label}
      </Label>
      <div className="aje-input__select">
        <select
          id={inputId}
          aria-describedby={error ? errorId : ""}
          onChange={makeEventHandler(onChange)}
          {...inputProps}
        >
          {children}
        </select>
      </div>
      <InputError error={error} id={errorId} />
    </ComponentWrapper>
  );
}
