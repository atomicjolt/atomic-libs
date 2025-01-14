import { useRadioGroupState } from "react-stately";
import { AriaRadioGroupProps, useRadioGroup } from "@react-aria/radio";

import {
  AriaProps,
  FieldStatusProps,
  RenderBaseProps,
  HelpTextProps,
} from "../../../types";
import { RadioGroupContext } from "./context";
import { RadioGroupWrapper } from "./RadioGroup.styles";
import { Label, ErrorMessage, Message } from "../../Fields";
import { useRenderProps } from "@hooks/useRenderProps";
import { RequiredMarker } from "@components/Internal/RequiredMarker";

export interface RadioGroupsProps
  extends AriaProps<AriaRadioGroupProps>,
    HelpTextProps,
    FieldStatusProps,
    RenderBaseProps<FieldStatusProps> {
  name?: string;
}

/**
 *
 * Radio groups should be used for a choice selection of 3-5 options. There may be a few cases where you can use
 * these for more than 5, but it isn't common.
 *
 * - For 2 choices, use a [CheckBox](/docs/inputs-choose-state-checkbox--overview) or [ToggleSwitch](/docs/inputs-choose-state-toggleswitch--overview) instead.
 * - For more than 5 options, use a [select](/docs/dropdowns-customselect--overview).
 * */
export function RadioGroup(props: RadioGroupsProps) {
  const { label, message, error } = props;

  const state = useRadioGroupState(props);
  const { radioGroupProps, labelProps, descriptionProps, errorMessageProps } =
    useRadioGroup(props, state);

  const renderProps = useRenderProps({
    componentClassName: "aje-radio-group",
    ...props,
    values: {
      isDisabled: state.isDisabled,
      isInvalid: state.isInvalid,
      isReadOnly: state.isReadOnly,
      isRequired: state.isRequired,
    },
    selectors: {
      "data-disabled": state.isDisabled,
      "data-invalid": state.isInvalid,
      "data-readonly": state.isReadOnly,
      "data-required": state.isRequired,
    },
  });

  return (
    <RadioGroupWrapper {...radioGroupProps} {...renderProps} name={props.name}>
      <Label as="legend" {...labelProps}>
        {label}
        {state.isRequired && <RequiredMarker />}
        {message && <Message {...descriptionProps}>{message}</Message>}
        {error && state.isInvalid && (
          <ErrorMessage {...errorMessageProps} isInvalid>
            {error}
          </ErrorMessage>
        )}
      </Label>

      <RadioGroupContext.Provider value={state}>
        {renderProps.children}
      </RadioGroupContext.Provider>
    </RadioGroupWrapper>
  );
}
