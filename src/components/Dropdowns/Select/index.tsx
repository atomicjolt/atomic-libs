import React, { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import cn from "classnames";
import { FieldInputProps } from "../../../types";
import { useIds } from "../../../hooks";
import { SelectWrapper, StyledSelect } from "./Select.styles";
import { ErrorMessage, Label, Message } from "../../Fields";
import { FieldWrapper } from "../../Internal/FieldWrapper";

type LimitedSelectProps = Omit<
  DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
  "className" | "id" | "size" | "onChange"
>;

export type SelectValue = string | number | readonly string[] | undefined;

export interface SelectProps<T extends SelectValue>
  extends Omit<FieldInputProps, "placeholder" | "isReadOnly">,
    LimitedSelectProps {
  onChange?: (value: T) => void;
}

/** Select Component. Simple wrapper around native `<select>` */
export const Select = React.forwardRef<
  HTMLSelectElement,
  SelectProps<SelectValue>
>((props, ref) => {
  const [inputId, messageId, errorId] = useIds("select", [
    "select",
    "message",
    "error",
  ]);

  const {
    children,
    onChange,
    size = "medium",
    label,
    error,
    message,
    isDisabled = false,
    isRequired = false,
    isInvalid = false,
    className,
    id = inputId,
    ...selectProps
  } = props;

  return (
    <FieldWrapper
      className={cn("aje-input__select", className)}
      size={size}
      isInvalid={isInvalid}
      isRequired={isRequired}
      isDisabled={isDisabled}
    >
      {label && <Label htmlFor={id}>{label}</Label>}
      {message && <Message id={messageId}>{message}</Message>}

      <SelectWrapper className="aje-input__select">
        <StyledSelect
          id={id}
          aria-describedby={isInvalid && error ? errorId : messageId}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            onChange?.(e.target.value)
          }
          ref={ref}
          {...selectProps}
        >
          {children}
        </StyledSelect>
      </SelectWrapper>
      {isInvalid && error && <ErrorMessage id={errorId}>{error}</ErrorMessage>}
    </FieldWrapper>
  );
});

export default Select;
