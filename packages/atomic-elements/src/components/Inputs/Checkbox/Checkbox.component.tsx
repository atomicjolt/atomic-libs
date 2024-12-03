import React from "react";
import cn from "classnames";
import { useToggleState } from "react-stately";
import { AriaCheckboxProps, useCheckbox } from "@react-aria/checkbox";
import { useLocale } from "@react-aria/i18n";
import { AriaProps, FieldInputProps } from "../../../types";
import { ChooseInput, ChooseLabel } from "../Inputs.styles";
import { CheckboxWrapper } from "./Checkbox.styles";
import { ErrorMessage, Message } from "../../Fields";
import { useContextProps } from "@hooks/useContextProps";
import { CheckBoxContext } from "./Checkbox.context";
import { SlotProps } from "@hooks/useSlottedContext";

export interface CheckBoxProps
  extends AriaProps<AriaCheckboxProps>,
    Omit<FieldInputProps, "label">,
    SlotProps {}

/** Checkbox Component. Accepts a `ref` */
export const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  (props, ref) => {
    [props, ref] = useContextProps(CheckBoxContext, props, ref);

    const {
      children,
      error = "error",
      message,
      className,
      isRequired,
      isInvalid,
      isDisabled,
      isReadOnly,
      size = "medium",
      isIndeterminate = false,
    } = props;

    const state = useToggleState(props);
    const { direction } = useLocale();
    const { inputProps, labelProps } = useCheckbox(props, state, ref);

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
          {...inputProps}
          ref={ref}
          data-indeterminate={isIndeterminate || undefined}
        />
        <ChooseLabel className="aje-checkbox__label" $rtl={direction === "rtl"}>
          {children}
          {isRequired && <span aria-hidden="true"> *</span>}
          {message && <Message>{message}</Message>}
          {isInvalid && <ErrorMessage isInvalid>{error}</ErrorMessage>}
        </ChooseLabel>
      </CheckboxWrapper>
    );
  }
);
