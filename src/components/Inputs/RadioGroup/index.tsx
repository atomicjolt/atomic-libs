import React from "react";
import cn from "classnames";
import { HasChildren, AriaProps, FieldInputProps } from "../../../types";
import RadioContext from "./context";
import { RadioGroupWrapper } from "./RadioGroup.styles";
import { useRadioGroupState } from "react-stately";
import { AriaRadioGroupProps, useRadioGroup } from "react-aria";
import { Label, ErrorMessage, Message } from "../../Atoms/Field";

export interface RadioGroupsProps
  extends AriaProps<AriaRadioGroupProps>,
    FieldInputProps,
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
  const { label, message, error, children, className } = props;

  const state = useRadioGroupState(props);
  const { radioGroupProps, labelProps, descriptionProps, errorMessageProps } =
    useRadioGroup(props, state);

  return (
    <RadioGroupWrapper
      as="fieldset"
      className={cn("aje-radio-group", className)}
      isDisabled={state.isDisabled}
      isInvalid={state.isInvalid}
      isRequired={state.isRequired}
      isReadOnly={state.isReadOnly}
      {...radioGroupProps}
    >
      <Label
        as="legend"
        className={cn("aje-radio-group__label")}
        {...labelProps}
      >
        {label}
        {state.isRequired && <span aria-hidden="true"> *</span>}
        {message && <Message {...descriptionProps}>{message}</Message>}
        {error && state.isInvalid && (
          <ErrorMessage {...errorMessageProps}>{error}</ErrorMessage>
        )}
      </Label>
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </RadioGroupWrapper>
  );
}

export { default as Radio } from "./Radio";
