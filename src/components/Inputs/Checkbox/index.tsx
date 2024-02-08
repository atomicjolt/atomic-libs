import React from "react";
import cn from "classnames";
import { useIds } from "../../../hooks";
import { CheckedInputProps } from "../../../types";
import { makeEventHandler } from "../../../utils";
import { ChooseInput, ChooseLabel } from "../Inputs.styles";
import { FieldError, FieldMessage } from "../../../styles/utils";
import { CheckboxWrapper } from "./Checkbox.styles";

export type CheckboxProps = CheckedInputProps;

/** Checkbox Component. Accepts a `ref` */
const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      label,
      error,
      message,
      checked,
      onClick,
      onChange,
      required,
      className,
      ...inputProps
    } = props;
    const [inputId] = useIds("Checkbox", ["input"]);

    return (
      <CheckboxWrapper
        className={cn("aje-checkbox", className, {
          "has-error": error,
          "is-required": required,
        })}
        htmlFor={inputId}
      >
        <ChooseInput
          id={inputId}
          ref={ref}
          type="checkbox"
          checked={checked}
          onClick={makeEventHandler(
            onClick,
            (e) => (e.target as HTMLInputElement).checked
          )}
          onChange={makeEventHandler(onChange, (e) => e.target.checked)}
          required={required}
          {...inputProps}
        />
        <ChooseLabel className="aje-checkbox__label">
          {label}
          {message && <FieldMessage as="p">{message}</FieldMessage>}
          {error && <FieldError as="p">{error}</FieldError>}
        </ChooseLabel>
      </CheckboxWrapper>
    );
  }
);

export default Checkbox;
