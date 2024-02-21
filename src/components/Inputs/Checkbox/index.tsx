import React from "react";
import cn from "classnames";
import { useToggleState } from "react-stately";
import { AriaCheckboxProps, useCheckbox } from "react-aria";
import useForwardedRef from "../../../hooks/useForwardedRef";
import { AriaProps, FieldBaseProps } from "../../../types";
import { ChooseInput, ChooseLabel } from "../Inputs.styles";
import { FieldError, FieldMessage } from "../../../styles/utils";
import { CheckboxWrapper } from "./Checkbox.styles";

export interface CheckBoxProps
  extends AriaProps<Omit<AriaCheckboxProps, "isIndeterminate">>,
    Omit<FieldBaseProps, "label" | "hideLabel"> {}

/** Checkbox Component. Accepts a `ref` */
const Checkbox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  (props, ref) => {
    const {
      children,
      error,
      message,
      className,
      isRequired,
      isInvalid,
      size = "medium",
    } = props;
    const internalRef = useForwardedRef(ref);
    const state = useToggleState(props);
    const { inputProps, labelProps } = useCheckbox(props, state, internalRef);

    return (
      <CheckboxWrapper
        className={cn("aje-checkbox", className, `is-${size}`, {
          "has-error": isInvalid,
          "is-required": isRequired,
        })}
        {...labelProps}
      >
        <ChooseInput ref={ref} {...inputProps} />
        <ChooseLabel className="aje-checkbox__label">
          {children}
          {isRequired && <span aria-hidden="true"> *</span>}
          {message && <FieldMessage>{message}</FieldMessage>}
          {error && <FieldError>{error}</FieldError>}
        </ChooseLabel>
      </CheckboxWrapper>
    );
  }
);

export default Checkbox;
