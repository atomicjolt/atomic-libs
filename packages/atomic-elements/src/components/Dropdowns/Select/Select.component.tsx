import React, { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import { FieldInputProps } from "../../../types";
import { useIds } from "../../../hooks/util";
import { SelectWrapper, StyledSelect } from "./Select.styles";
import { ErrorMessage, Label, Message } from "../../Fields";
import { useRenderProps } from "@hooks/useRenderProps";

type LimitedSelectProps = Omit<
  DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
  "className" | "id" | "size" | "onChange"
>;

export type SelectValue = string | number | readonly string[] | undefined;

export interface SelectProps<T extends SelectValue>
  extends Omit<FieldInputProps, "placeholder" | "isReadOnly">,
    LimitedSelectProps {
  /** Called with the newly selected option's value when the selection changes */
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
    // Accepted through FieldInputProps but not supported by Select. Keep
    // them off the native <select>.
    isLoading: _isLoading,
    loadingLabel: _loadingLabel,
    ...selectProps
  } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-input__select",
    ...props,
    selectors: {
      "data-disabled": isDisabled,
      "data-required": isRequired,
      "data-invalid": isInvalid,
    },
  });

  return (
    <div {...renderProps}>
      {label && <Label htmlFor={id}>{label}</Label>}
      {message && <Message id={messageId}>{message}</Message>}

      <SelectWrapper>
        <StyledSelect
          id={id}
          disabled={isDisabled}
          required={isRequired}
          aria-invalid={isInvalid || undefined}
          aria-describedby={isInvalid && error ? errorId : messageId}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            onChange?.(e.target.value)
          }
          ref={ref}
          {...selectProps}
        >
          {renderProps.children}
        </StyledSelect>
      </SelectWrapper>
      {isInvalid && error && (
        <ErrorMessage id={errorId} isInvalid>
          {error}
        </ErrorMessage>
      )}
    </div>
  );
});

export default Select;
