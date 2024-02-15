import React, { useState } from "react";
import cn from "classnames";
import { AriaProps, FieldBaseProps, HasVariant } from "../../../types";
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
import { useVariantClass } from "../../../hooks";

export interface NumberInputProps
  extends AriaProps<AriaNumberFieldProps>,
    FieldBaseProps,
    HasVariant<"default" | "floating"> {}

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
      variant = "default",
    } = props;

    const internalRef = useForwardedRef(ref);
    const { locale } = useLocale();
    const state = useNumberFieldState({ ...props, locale });
    const [focused, setFocused] = useState(false);

    const {
      labelProps,
      inputProps,
      descriptionProps,
      errorMessageProps,
      isInvalid,
      incrementButtonProps,
      decrementButtonProps,
    } = useNumberField(props, state, internalRef);

    const variantClass = useVariantClass("aje-input", variant);

    return (
      <InputWrapper
        className={cn("aje-input__number", variantClass, className, {
          "read-only": props.isReadOnly,
          "float-label": inputProps.value || focused,
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
          floating={variant === "floating"}
        >
          <NumberInputWrapper>
            <StyledNumberInput
              ref={internalRef}
              {...inputProps}
              onFocus={(e) => {
                setFocused(true);
                inputProps.onFocus && inputProps.onFocus(e);
              }}
              onBlur={(e) => {
                setFocused(false);
                inputProps.onBlur && inputProps.onBlur(e);
              }}
            />

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
