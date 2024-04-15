import React from "react";
import cn from "classnames";
import { useToggleState } from "react-stately";
import { AriaCheckboxProps, useCheckbox, useLocale } from "react-aria";
import useForwardedRef from "../../../hooks/useForwardedRef";
import { AriaProps, FieldInputProps } from "../../../types";
import { ChooseInput, ChooseLabel } from "../Inputs.styles";
import { CheckboxWrapper } from "./Checkbox.styles";
import { ErrorMessage, Message } from "../../Internal/Field";

export interface CheckBoxProps
  extends AriaProps<AriaCheckboxProps>,
    Omit<FieldInputProps, "label"> {}

/** Checkbox Component. Accepts a `ref` */
export const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  (props, ref) => {
    const {
      children,
      error,
      message,
      className,
      isRequired,
      isInvalid,
      isDisabled,
      isReadOnly,
      size = "medium",
      isIndeterminate = false,
    } = props;
    const internalRef = useForwardedRef(ref);
    const state = useToggleState(props);
    const { direction } = useLocale();
    const { inputProps, labelProps } = useCheckbox(props, state, internalRef);

    return (
      <CheckboxWrapper
        className={cn("aje-checkbox", className)}
        size={size}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
        $rtl={direction === "rtl"}
        {...labelProps}
      >
        <ChooseInput
          ref={ref}
          {...inputProps}
          data-indeterminate={isIndeterminate || null}
        />
        <ChooseLabel className="aje-checkbox__label" $rtl={direction === "rtl"}>
          {children}
          {isRequired && <span aria-hidden="true"> *</span>}
          {message && <Message>{message}</Message>}
          {isInvalid && <ErrorMessage>{error}</ErrorMessage>}
        </ChooseLabel>
      </CheckboxWrapper>
    );
  }
);

export default CheckBox;
