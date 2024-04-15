import React, { useContext, useRef } from "react";
import { AriaNumberFieldProps, useLocale, useNumberField } from "react-aria";
import classNames from "classnames";
import { useNumberFieldState } from "react-stately";
import { FieldProps } from "../Field";
import { AriaProps } from "../../../types";
import { StyledField } from "../Field.styles";
import { Provider } from "../../Internal/Provider";
import {
  FieldErrorContext,
  FieldInputContext,
  FieldLabelContext,
  FieldMessageContext,
  NumberFieldButtonContext,
} from "../contexts";
import IconButton, { IconButtonProps } from "../../Buttons/IconButton";

export interface NumberFieldProps
  extends FieldProps,
    Omit<AriaProps<AriaNumberFieldProps>, "placeholder"> {
  "data-float"?: boolean;
}

/** Provides the accessbility implementation for a number field and its associated label, error message, and description. */
export function NumberField(props: NumberFieldProps) {
  const {
    size,
    children,
    className,
    isDisabled,
    isRequired,
    isReadOnly,
    name,
    "data-float": dataFloat,
  } = props;

  const inputRef = useRef<HTMLInputElement | null>(null);

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
  } = useNumberField(
    {
      ...props,
      label: true,
    },
    state,
    inputRef
  );

  return (
    <StyledField
      className={classNames("aje-input__number", className)}
      size={size}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
      data-float={dataFloat}
    >
      <Provider
        values={[
          [FieldLabelContext.Provider, labelProps],
          [FieldMessageContext.Provider, descriptionProps],
          [FieldErrorContext.Provider, { errorMessageProps, isInvalid }],
          [
            NumberFieldButtonContext.Provider,
            { incrementButtonProps, decrementButtonProps },
          ],
          [
            FieldInputContext.Provider,
            {
              inputProps: {
                ...inputProps,
                disabled: isDisabled,
                readOnly: isReadOnly,
                name,
              },
              ref: inputRef,
              inputRef,
            },
          ],
        ]}
      >
        {children}
      </Provider>
    </StyledField>
  );
}

function NumberFieldIncrementButton(props: IconButtonProps) {
  const { incrementButtonProps } = useContext(NumberFieldButtonContext);

  return <IconButton {...props} {...incrementButtonProps} />;
}

function NumberFieldDecrementButton(props: IconButtonProps) {
  const { decrementButtonProps } = useContext(NumberFieldButtonContext);

  return <IconButton {...props} {...decrementButtonProps} />;
}

NumberField.IncrementButton = NumberFieldIncrementButton;
NumberFieldDecrementButton.displayName = "NumberField.DecrementButton";
NumberField.DecrementButton = NumberFieldDecrementButton;
NumberFieldIncrementButton.displayName = "NumberField.IncrementButton";
