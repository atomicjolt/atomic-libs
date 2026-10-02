import { useRadioGroupState } from "react-stately";
import { AriaRadioGroupProps, useRadioGroup } from "@react-aria/radio";

import {
  AriaProps,
  FieldStatusProps,
  RenderBaseProps,
  HelpTextProps,
  LoadingProps,
} from "../../../types";
import { RadioGroupContext } from "./context";
import {
  RadioGroupWrapper,
  StyledLoadingOptions,
  StyledLoadingOption,
} from "./RadioGroup.styles";
import { Label, ErrorMessage, Message } from "../../Fields";
import { useRenderProps } from "@hooks/useRenderProps";
import { RequiredMarker } from "@components/Internal/RequiredMarker";
import { useLoading } from "@components/Feedback/Loading";

export interface RadioGroupsProps
  extends AriaProps<AriaRadioGroupProps>,
    HelpTextProps,
    FieldStatusProps,
    RenderBaseProps<FieldStatusProps>,
    LoadingProps {
  name?: string;
}

const LOADING_OPTION_COUNT = 3;

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

  const { isLoading, loadingLabel } = useLoading(props);

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

  if (isLoading) {
    return (
      <RadioGroupWrapper
        {...radioGroupProps}
        {...renderProps}
        name={props.name}
      >
        <Label as="legend" {...labelProps}>
          {label}
        </Label>
        <StyledLoadingOptions>
          {Array.from({ length: LOADING_OPTION_COUNT }).map((_, index) => (
            <StyledLoadingOption
              key={index}
              title={index === 0 ? loadingLabel : undefined}
            >
              <rect x="0" y="0" width="100%" height="100%" rx="4" ry="4" />
            </StyledLoadingOption>
          ))}
        </StyledLoadingOptions>
      </RadioGroupWrapper>
    );
  }

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
