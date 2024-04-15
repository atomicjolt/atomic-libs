import React, { useRef } from "react";
import { AriaFieldProps, useField } from "react-aria";
import {
  AriaProps,
  BaseProps,
  DomProps,
  FieldStatusProps,
  HasChildren,
} from "../../../types";
import { Provider } from "../../Internal/Provider";
import {
  FieldErrorContext,
  FieldInputContext,
  FieldLabelContext,
  FieldMessageContext,
} from "../contexts";
import { StyledField } from "../Field.styles";
import { FieldLabel } from "./FieldLabel";

export interface FieldProps
  extends BaseProps,
    FieldStatusProps,
    HasChildren,
    AriaProps<AriaFieldProps>,
    DomProps {}

/** Provides the accessbility implementation for a
 * form field and its associated label, error message, and description.
 *
 * Note that when using `Field` you manage the staate of the input directly.
 * You may opt to use one of the other more specific field components if they suite your needs.
 */
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
