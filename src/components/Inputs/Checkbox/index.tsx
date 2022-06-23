import React from "react";
import cn from "classnames";
import { useIds } from "../../../hooks";
import { EventHandler, SharedInputProps } from "../../../types";
export interface Props extends Omit<SharedInputProps, "hideLabel" | "size"> {
  checked: boolean;
  onClick: EventHandler<boolean, React.MouseEvent<HTMLInputElement>>;
}

/** Checkbox Component. Accepts a `ref` */
const Checkbox = React.forwardRef<HTMLInputElement, Props>(
  ({ label, error, message, checked, onClick, disabled = false }, ref) => {
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
);

export default Checkbox;
