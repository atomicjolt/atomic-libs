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
import { ChooseInput, ChooseLabel } from "../Inputs.styles";
import { CheckboxWrapper } from "./Checkbox.styles";
import { ErrorMessage, Message } from "../../Fields";
import { useContextProps } from "@hooks/useContextProps";
import { CheckBoxContext } from "./Checkbox.context";
import { SlotProps } from "@hooks/useSlottedContext";
import { useRenderProps } from "@hooks";
import { RequiredMarker } from "@components/Internal/RequiredMarker";

interface CheckBoxRenderProps {
  isSelected: boolean;
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
      isRequired,
      isInvalid,
      isIndeterminate = false,
      isReadOnly,
      isDisabled,
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
      selectors: {
        "data-invalid": isInvalid,
        "data-disabled": isDisabled,
        "data-readonly": isReadOnly,
        "data-required": isRequired,
      },
      ...props,
    });

    return (
      <CheckboxWrapper
        $rtl={direction === "rtl"}
        {...renderProps}
        {...labelProps}
      >
        <ChooseInput
          {...inputProps}
          ref={ref}
          data-indeterminate={isIndeterminate || undefined}
        />
        <ChooseLabel className="aje-checkbox__label" $rtl={direction === "rtl"}>
          {renderProps.children}
          {isRequired && <RequiredMarker />}
          {message && <Message>{message}</Message>}
          {isInvalid && <ErrorMessage isInvalid>{error}</ErrorMessage>}
        </ChooseLabel>
      </CheckboxWrapper>
    );
  }
);
