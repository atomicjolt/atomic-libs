import React, { useRef } from "react";
import { AriaFieldProps, useField } from "@react-aria/label";
import {
  AriaProps,
  DomProps,
  ExtendedSize,
  FieldDomProps,
  FieldStatusProps,
  RenderBaseProps,
} from "../../../types";
import { useRenderProps } from "@hooks";
import { Provider } from "../../Internal/Provider";

import {
  FieldErrorContext,
  FieldInputContext,
  FieldLabelContext,
  FieldMessageContext,
} from "../contexts";
import { StyledField } from "../Field.styles";
import { FieldLabel } from "./FieldLabel";

interface FieldRenderProps extends FieldStatusProps {}

export interface FieldProps
  extends RenderBaseProps<FieldRenderProps>,
    FieldStatusProps,
    DomProps,
    AriaProps<AriaFieldProps>,
    FieldDomProps {
  size?: ExtendedSize;
}

/** Provides the accessbility implementation for a
 * form field and its associated label, error message, and description.
 *
 * Note that when using `Field` you manage the state of the input directly.
 * You may opt to use one of the other more specific field components if they suite your needs.
 */
export function Field(props: FieldProps) {
  const { isInvalid, isDisabled, isReadOnly, isRequired, name } = props;

  const renderProps = useRenderProps({
    ...props,
    componentClassName: "aje-field",
    values: { isInvalid, isDisabled, isReadOnly, isRequired },
    selectors: {
      "data-invalid": isInvalid,
      "data-disabled": isDisabled,
      "data-readonly": isReadOnly,
      "data-required": isRequired,
    },
  });

  const label = React.Children.toArray(renderProps.children).find(
    (child) =>
      typeof child === "object" &&
      (child as React.ReactElement)?.type === FieldLabel
  );

  const { labelProps, descriptionProps, errorMessageProps, fieldProps } =
    useField({ ...props, label });

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <StyledField {...renderProps}>
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
        {renderProps.children}
      </Provider>
    </StyledField>
  );
}
