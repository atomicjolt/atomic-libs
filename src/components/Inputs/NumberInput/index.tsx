import React from "react";
import cn from "classnames";
import { AriaProps, FieldBaseProps } from "../../../types";
import { InputWrapper } from "../Inputs.styles";
import useForwardedRef from "../../../hooks/useForwardedRef";
import { AriaNumberFieldProps, useLocale, useNumberField } from "react-aria";
import { FieldWrapper } from "../../Utility/FieldWrapper";
import { useNumberFieldState } from "react-stately";
import IconButton from "../../Buttons/IconButton";
import {
  NumberInputButtons,
  NumberInputWrapper,
  StyledNumberInput,
} from "./NumberInput.styles";

export interface NumberInputProps
  extends AriaProps<AriaNumberFieldProps>,
    FieldBaseProps {}

/** Input for number values. Fowards a `ref` to the internal input element */
export const NumberInput = React.forwardRef(
  (props: NumberInputProps, ref: React.Ref<HTMLInputElement>) => {
    const {
      label,
      hideLabel,
      size = "medium",
      error,
      message,
      className,
      isDisabled,
      isRequired,
    } = props;

    const internalRef = useForwardedRef(ref);
    const { locale } = useLocale();
    const state = useNumberFieldState({ ...props, locale });

    const {
      labelProps,
      inputProps,
      descriptionProps,
      errorMessageProps,
      isInvalid,
      incrementButtonProps,
      decrementButtonProps,
    } = useNumberField(props, state, internalRef);

    return (
      <InputWrapper
        className={cn("aje-input__number", className, {
          "read-only": props.isReadOnly,
        })}
        size={size}
        disabled={isDisabled}
        required={isRequired}
        error={isInvalid}
      >
        <FieldWrapper
          label={label}
          labelProps={labelProps}
          message={message}
          messageProps={descriptionProps}
          error={error}
          errorProps={errorMessageProps}
          hideLabel={hideLabel}
        >
          <NumberInputWrapper>
            <StyledNumberInput ref={internalRef} {...inputProps} />

            <NumberInputButtons>
              <IconButton
                icon="arrow_drop_up"
                variant="content"
                size="small"
                {...incrementButtonProps}
              />
              <IconButton
                icon="arrow_drop_down"
                variant="content"
                size="small"
                {...decrementButtonProps}
              />
            </NumberInputButtons>
          </NumberInputWrapper>
        </FieldWrapper>
      </InputWrapper>
    );
  }
);
