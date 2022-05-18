import React from "react";
import cn from "classnames";
import { useIds } from "../../../hooks";
import { SharedInputProps } from "../../../types";
import "../../general.scss";
import "../common.scss";
import "./styles.scss";

export interface Props extends Omit<SharedInputProps, "hideLabel" | "size"> {
  checked: boolean;
  onClick: (value: boolean, e: React.MouseEvent<HTMLInputElement>) => void;
}

/** Checkbox Component */
export default function Checkbox({
  label,
  error,
  message,
  checked,
  onClick,
  disabled = false,
}: Props) {
  const [inputId] = useIds("checkbox", ["input"]);

  return (
    <label
      className={cn("aj-checkbox", { "has-error": error })}
      htmlFor={inputId}
    >
      <input
        id={inputId}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onClick={(e) => onClick((e.target as HTMLInputElement).checked, e)}
      />
      <span className="aj-checkbox__label">
        {label}
        {message && <p className="aj-label--message">{message}</p>}
        {error && <p className="aj-label--error">{error}</p>}
      </span>
    </label>
  );
}
