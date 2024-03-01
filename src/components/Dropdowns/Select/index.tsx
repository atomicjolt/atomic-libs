import React, { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import cn from "classnames";
import { FieldBaseProps } from "../../../types";
import Label from "../../Atoms/Label";
import { useIds } from "../../../hooks";
import InputError from "../../Atoms/InputError";
import { ComponentWrapper } from "../../../styles/utils";
import { SelectWrapper, StyledSelect } from "./Select.styles";

type LimitedSelectProps = Omit<
  DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
  "className" | "id" | "size" | "onChange"
>;

export type SelectValue = string | number | readonly string[] | undefined;

export interface SelectProps<T extends SelectValue>
  extends Omit<FieldBaseProps, "placeholder" | "isReadOnly">,
    LimitedSelectProps {
  onChange?: (value: T) => void;
}

/** Select Component. Simple wrapper around native `<select>` */
const Select = React.forwardRef<HTMLSelectElement, SelectProps<SelectValue>>(
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
      isDisabled = false,
      isRequired = false,
      isInvalid = false,
      className,
      ...selectProps
    } = props;

    return (
      <ComponentWrapper
        className={cn("aje-input", className)}
        size={size}
        error={isInvalid}
        required={isRequired}
        disabled={isDisabled}
      >
        <Label message={message} htmlFor={inputId} hidden={hideLabel}>
          {label}
        </Label>
        <SelectWrapper className="aje-input__select">
          <StyledSelect
            id={inputId}
            aria-describedby={error ? errorId : ""}
            onChange={(e) => onChange && onChange(e.target.value)}
            ref={ref}
            {...selectProps}
          >
            {children}
          </StyledSelect>
        </SelectWrapper>
        <InputError error={error} id={errorId} />
      </ComponentWrapper>
    );
  }
);

export default Select;
