import React from "react";
import { useToggleState } from "react-stately";
import { AriaCheckboxProps, useCheckbox } from "@react-aria/checkbox";
import { useLocale } from "@react-aria/i18n";
import {
  AriaProps,
  FieldStatusProps,
  HelpTextProps,
  RenderBaseProps,
} from "../../../types";
import { HiddenInput } from "../Inputs.styles";
import { CheckBoxLabel, CheckboxWrapper } from "./Checkbox.styles";
import { ErrorMessage, Message } from "../../Fields";
import { useContextProps } from "@hooks/useContextProps";
import { CheckBoxContext } from "./Checkbox.context";
import { SlotProps } from "@hooks/useSlottedContext";
import { useRenderProps } from "@hooks";
import { RequiredMarker } from "@components/Internal/RequiredMarker";

interface CheckBoxRenderProps {
  isSelected: boolean;
  isIndeterminate: boolean;
  isInvalid: boolean;
  isDisabled: boolean;
  isReadOnly: boolean;
  isRequired: boolean;
}

export interface CheckBoxProps
  extends Omit<AriaProps<AriaCheckboxProps>, "children">,
    Omit<HelpTextProps, "label">,
    FieldStatusProps,
    RenderBaseProps<CheckBoxRenderProps>,
    SlotProps {}

/** Checkbox Component. Accepts a `ref` */
export const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  (props, ref) => {
    [props, ref] = useContextProps(CheckBoxContext, props, ref);

    const {
      error = "error",
      message,
      isRequired = false,
      isInvalid = false,
      isIndeterminate = false,
      isReadOnly = false,
      isDisabled = false,
    } = props;

    const state = useToggleState(props);
    const { direction } = useLocale();
    const { inputProps, labelProps } = useCheckbox(
      { ...props, children: undefined },
      state,
      ref
    );

    const renderProps = useRenderProps({
      componentClassName: "aje-checkbox",
      values: {
        isSelected: state.isSelected,
        isIndeterminate,
        isInvalid,
        isDisabled,
        isReadOnly,
        isRequired,
      },
      selectors: {
        "data-selected": state.isSelected,
        "data-indeterminate": isIndeterminate,
        "data-invalid": isInvalid,
        "data-disabled": isDisabled,
        "data-readonly": isReadOnly,
        "data-required": isRequired,
      },
      ...props,
    });

    const ariaChecked = isIndeterminate ? "mixed" : undefined;

    return (
      <CheckboxWrapper $rtl={direction === "rtl"} {...renderProps}>
        <HiddenInput {...inputProps} ref={ref} aria-checked={ariaChecked} />
        <CheckBoxLabel {...labelProps} $rtl={direction === "rtl"}>
          {renderProps.children}
          {isRequired && <RequiredMarker />}
          {message && <Message>{message}</Message>}
          {isInvalid && <ErrorMessage isInvalid>{error}</ErrorMessage>}
        </CheckBoxLabel>
      </CheckboxWrapper>
    );
  }
);
