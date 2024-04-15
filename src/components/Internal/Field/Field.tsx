import React, { useRef } from "react";
import { AriaFieldProps, useField } from "react-aria";
import {
  AriaProps,
  BaseProps,
  DomProps,
  FieldStatusProps,
  HasChildren,
} from "../../../types";
import { Provider } from "../Provider";
import {
  FieldErrorContext,
  FieldInputContext,
  FieldLabelContext,
  FieldMessageContext,
} from "./contexts";
import { StyledField } from "./Field.styles";
import { FieldLabel } from "./FieldLabel";

export interface FieldProps
  extends BaseProps,
    FieldStatusProps,
    HasChildren,
    AriaProps<AriaFieldProps>,
    DomProps {}

export function Field(props: FieldProps) {
  const {
    size,
    children,
    className,
    isInvalid,
    isDisabled,
    isRequired,
    isReadOnly,
    name,
  } = props;

  const label = React.Children.toArray(children).find(
    // @ts-ignore
    (child) => typeof child === "object" && child?.type === FieldLabel
  );

  const { labelProps, descriptionProps, errorMessageProps, fieldProps } =
    useField({ ...props, label });

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <StyledField
      className={className}
      size={size}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
    >
      <Provider
        values={[
          [FieldLabelContext.Provider, labelProps],
          [FieldMessageContext.Provider, descriptionProps],
          [FieldErrorContext.Provider, { errorMessageProps, isInvalid }],
          [
            FieldInputContext.Provider,
            {
              inputProps: {
                ...fieldProps,
                disabled: isDisabled,
                readOnly: isReadOnly,
                name,
              },
              ref: inputRef,
            },
          ],
        ]}
      >
        {children}
      </Provider>
    </StyledField>
  );
}
