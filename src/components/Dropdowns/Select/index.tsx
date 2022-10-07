import React, { ForwardedRef, RefObject } from "react";
import cn from "classnames";
import { InputProps } from "../../../types";
import Label from "../../Utility/Label";
import { useIds } from "../../../hooks";
import InputError from "../../Utility/InputError";
import ComponentWrapper from "../../Utility/ComponentWrapper";
import { makeEventHandler } from "../../../utils";
import Option, { OptionProps } from "../Option";

type OptionChild = React.ReactElement<
  OptionProps<string | number | readonly string[] | undefined>,
  typeof Option
>;

export interface SelectProps
  extends Omit<
    InputProps<string, HTMLSelectElement>,
    "placeholder" | "readOnly"
  > {
  children: OptionChild[] | OptionChild;
}

/** Select Component. Simple wrapper around native `<select>` */
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
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
      className,
      ...selectProps
    } = props;

    return (
      <ComponentWrapper
        className={cn("aje-input", className)}
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
            ref={ref}
            {...selectProps}
          >
            {children}
          </select>
        </div>
        <InputError error={error} id={errorId} />
      </ComponentWrapper>
    );
  }
);

export default Select;
