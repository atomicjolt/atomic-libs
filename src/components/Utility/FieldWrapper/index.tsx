import React from "react";
import { DOMAttributes } from "@react-types/shared";
import cn from "classnames";
import {
  FieldError,
  Label,
  FieldMessage,
  FloatingLabelWrapper,
} from "../../../styles/utils";
import { HelpTextProps } from "../../../types";

export interface FieldWrapperProps extends HelpTextProps {
  readonly labelProps?: DOMAttributes;
  readonly messageProps?: DOMAttributes;
  readonly errorProps?: DOMAttributes;
  /** When true, ,oves the label and message below the children &
   * adds an additional container around the label and children
   * to manage the floating label effect
   * */
  readonly floating?: boolean;
  /** Children you want to render within the field.
   * Typically, this should be some kind of input element */
  readonly children: React.ReactNode;
  readonly labelClassName?: string;
}

/** FieldWrapper component. Wraps input elements with a label, message and error */
export function FieldWrapper(props: FieldWrapperProps) {
  const {
    children,
    label,
    message,
    hideLabel,
    labelClassName = "aje-label",
    error,
    labelProps = {},
    messageProps = {},
    errorProps = {},
    floating,
  } = props;

  const labelClasses = cn(labelClassName, { "aje-hidden": hideLabel });

  if (floating) {
    return (
      <>
        <FloatingLabelWrapper>
          {children}
          <Label className={labelClasses} {...labelProps}>
            {label}
          </Label>
        </FloatingLabelWrapper>
        {message && <FieldMessage {...messageProps}>{message}</FieldMessage>}
        {error && <FieldError {...errorProps}>{error}</FieldError>}
      </>
    );
  }

  return (
    <>
      {label && (
        <Label className={labelClasses} {...labelProps}>
          {label}
        </Label>
      )}
      {message && <FieldMessage {...messageProps}>{message}</FieldMessage>}
      {children}
      {error && <FieldError {...errorProps}>{error}</FieldError>}
    </>
  );
}
