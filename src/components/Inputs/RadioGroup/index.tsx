import React from "react";
import cn from "classnames";
import { HasChildren, AriaProps, FieldBaseProps } from "../../../types";
import RadioContext from "./context";
import { FieldSet } from "./RadioGroup.styles";
import { FieldError, Label, FieldMessage } from "../../../styles/utils";
import { useRadioGroupState } from "react-stately";
import { AriaRadioGroupProps, useRadioGroup } from "react-aria";

export interface RadioGroupsProps
  extends AriaProps<AriaRadioGroupProps>,
    FieldBaseProps,
    HasChildren {}

/**
 * Radio Group
 *
 * - For a choice selection of 3-5 options. There may be a few cases where you can use these for more than 5, but it isn't common.
 * - For 2 choices, use a checkbox instead.
 * - For more than 5 options, use a select.
 *
 * Any `<Radio />` element nested under a `<RadioGroup />` will be considered part of that group,
 * do note that it does not need to nested directly under. As such, you can add additional strucuture
 * between the over-lying `<RadioGroup />` and it's `<Radio />`s
 * */
export function RadioGroup(props: RadioGroupsProps) {
  const { label, message, error, children, hideLabel, className } = props;

  const state = useRadioGroupState(props);
  const { radioGroupProps, labelProps, descriptionProps, errorMessageProps } =
    useRadioGroup(props, state);

  return (
    <FieldSet
      className={cn("aje-radio-group", className, {
        "is-disabled": state.isDisabled,
      })}
      {...radioGroupProps}
    >
      <Label
        as="legend"
        className={cn("aje-radio-group__label", { "aje-hidden": hideLabel })}
        {...labelProps}
      >
        {label}
        {state.isRequired && <span aria-hidden="true"> *</span>}
        {message && (
          <FieldMessage {...descriptionProps}>{message}</FieldMessage>
        )}
        {error && <FieldError {...errorMessageProps}>{error}</FieldError>}
      </Label>
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </FieldSet>
  );
}

export { default as Radio } from "./Radio";
