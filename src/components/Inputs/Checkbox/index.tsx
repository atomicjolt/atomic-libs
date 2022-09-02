import React from "react";
import cn from "classnames";
import { useIds } from "../../../hooks";
import { EventHandler, SharedInputProps } from "../../../types";

export interface CheckboxProps
  extends Omit<SharedInputProps, "hideLabel" | "size"> {
  checked?: boolean;
  onClick?: EventHandler<boolean, React.MouseEvent<HTMLInputElement>>;
}

/** Checkbox Component. Accepts a `ref` */
const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, message, checked, onClick, disabled = false }, ref) => {
    const [inputId] = useIds("checkbox", ["input"]);

    return (
      <label
        className={cn("aje-checkbox", { "has-error": error })}
        htmlFor={inputId}
      >
        <input
          id={inputId}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onClick={(e) =>
            onClick && onClick((e.target as HTMLInputElement).checked, e)
          }
        />
        <span className="aje-checkbox__label">
          {label}
          {message && <p className="aje-label--message">{message}</p>}
          {error && <p className="aje-label--error">{error}</p>}
        </span>
      </label>
    );
  }
);

export default Checkbox;
