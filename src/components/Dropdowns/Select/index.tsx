import React from "react";
import cn from "classnames";
import {
  HasChildren,
  HTMLInputValueAttribute,
  SharedInputProps,
} from "../../../types";
import "../../general.scss";
import Label from "../../Utility/Label";
import "./styles.scss";
import { useIds } from "../../../hooks";
import InputError from "../../Utility/InputError";

export type Props = HasChildren &
  SharedInputProps & {
    value: HTMLInputValueAttribute;
    onSelect: (
      value: string,
      event: React.ChangeEvent<HTMLSelectElement>
    ) => void;
  };

/** Select Component */
export default function Select({
  children,
  onSelect,
  value,
  size = "medium",
  label,
  error,
  message,
  hideLabel = false,
  disabled = false,
  required = false,
}: Props) {
  const [inputId, errorId] = useIds("select", ["select", "error"]);

  return (
    <div
      className={cn("aj-input", `is-${size}`, {
        "has-error": error,
        "is-disabled": disabled,
      })}
    >
      <Label message={message} htmlFor={inputId} hidden={hideLabel}>
        {label}
      </Label>
      <div className="aj-input__select">
        <select
          id={inputId}
          aria-describedby={error ? errorId : ""}
          disabled={disabled}
          required={required}
          onChange={(e) => onSelect(e.target.value, e)}
          value={value}
        >
          {children}
        </select>
      </div>
      <InputError error={error} id={errorId} />
    </div>
  );
}
