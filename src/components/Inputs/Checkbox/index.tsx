import React from "react";
import cn from "classnames";
import { useToggleState } from "react-stately";
import { AriaCheckboxProps, useCheckbox, useLocale } from "react-aria";
import useForwardedRef from "../../../hooks/useForwardedRef";
import { AriaProps, FieldBaseProps } from "../../../types";
import { ChooseInput, ChooseLabel } from "../Inputs.styles";
import { FieldError, FieldMessage } from "../../../styles/utils";
import { CheckboxWrapper } from "./Checkbox.styles";

export interface CheckBoxProps
  extends AriaProps<AriaCheckboxProps>,
    Omit<FieldBaseProps, "label" | "hideLabel"> {}

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
      size = "medium",
      isIndeterminate = false,
    } = props;
    const internalRef = useForwardedRef(ref);
    const state = useToggleState(props);
    const { direction } = useLocale();
    const { inputProps, labelProps } = useCheckbox(props, state, internalRef);

    return (
      <CheckboxWrapper
        className={cn("aje-checkbox", className, `is-${size}`, {
          "has-error": isInvalid,
          "is-required": isRequired,
        })}
        {...labelProps}
        $rtl={direction === "rtl"}
      >
        <ChooseInput
          ref={ref}
          {...inputProps}
          data-indeterminate={isIndeterminate || null}
        />
        <ChooseLabel className="aje-checkbox__label" $rtl={direction === "rtl"}>
          {children}
          {isRequired && <span aria-hidden="true"> *</span>}
          {message && <FieldMessage>{message}</FieldMessage>}
          {error && <FieldError>{error}</FieldError>}
        </ChooseLabel>
      </CheckboxWrapper>
    );
  }
);

export default CheckBox;
