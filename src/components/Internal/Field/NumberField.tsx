import React, { useContext, useRef } from "react";
import { FieldProps } from "./Field";
import { AriaProps } from "../../../types";
import { AriaNumberFieldProps, useLocale, useNumberField } from "react-aria";
import { StyledField } from "./Field.styles";
import { Provider } from "../Provider";
import {
  FieldErrorContext,
  FieldInputContext,
  FieldLabelContext,
  FieldMessageContext,
  NumberFieldButtonContext,
} from "./contexts";
import classNames from "classnames";
import { useNumberFieldState } from "react-stately";
import IconButton, { IconButtonProps } from "../../Buttons/IconButton";

export interface TextFieldProps
  extends FieldProps,
    Omit<AriaProps<AriaNumberFieldProps>, "placeholder"> {
  "data-float"?: boolean;
}

export function NumberField(props: TextFieldProps) {
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

function NumberFieldIncrementButton(props: Partial<IconButtonProps>) {
  const {
    icon = "arrow_drop_up",
    variant = "content",
    size = "small",
    ...rest
  } = props;
  const { incrementButtonProps } = useContext(NumberFieldButtonContext);

  return (
    <IconButton
      icon={icon}
      variant={variant}
      size={size}
      {...rest}
      {...incrementButtonProps}
    />
  );
}

function NumberFieldDecrementButton(props: Partial<IconButtonProps>) {
  const {
    icon = "arrow_drop_down",
    variant = "content",
    size = "small",
    ...rest
  } = props;
  const { decrementButtonProps } = useContext(NumberFieldButtonContext);

  return (
    <IconButton
      icon={icon}
      variant={variant}
      size={size}
      {...rest}
      {...decrementButtonProps}
    />
  );
}

NumberField.IncrementButton = NumberFieldIncrementButton;
NumberField.DecrementButton = NumberFieldDecrementButton;
