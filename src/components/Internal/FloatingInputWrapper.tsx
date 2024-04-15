import React from "react";
import { DOMAttributes } from "@react-types/shared";
import cn from "classnames";
import { HelpTextProps } from "../../types";
import { ErrorMessage, Label, Message } from "../Internal/Field";
import styled from "styled-components";

const FloatingLabelWrapper = styled.div`
  position: relative;
`;

export interface FieldWrapperProps extends HelpTextProps {
  readonly labelProps?: DOMAttributes;
  readonly messageProps?: DOMAttributes;
  readonly errorProps?: DOMAttributes;
  readonly isInvalid?: boolean;
  /** When true, moves the label and message below the children &
   * adds an additional container around the label and children
   * to manage the floating label effect
   * */
  readonly floating?: boolean;
  /** Children you want to render within the field.
   * Typically, this should be some kind of input element */
  readonly children: React.ReactNode;
  readonly labelClassName?: string;

  readonly errorPosition?: "top" | "bottom";
}

/** FieldWrapper component. Wraps input elements with a label, message and error */
export function FloatingInputWrapper(props: FieldWrapperProps) {
  const {
    children,
    label,
    message,
    labelClassName = "aje-label",
    error,
    labelProps = {},
    messageProps = {},
    errorProps = {},
    floating,
    errorPosition = "bottom",
    isInvalid,
  } = props;

  if (floating) {
    return (
      <>
        <FloatingLabelWrapper>
          {children}
          <Label className={labelClassName} {...labelProps}>
            {label}
          </Label>
        </FloatingLabelWrapper>
        {message && <Message {...messageProps}>{message}</Message>}
        {isInvalid && error && (
          <ErrorMessage {...errorProps}>{error}</ErrorMessage>
        )}
      </>
    );
  }

  return (
    <>
      {label && (
        <Label className={labelClassName} {...labelProps}>
          {label}
        </Label>
      )}
      {message && <Message {...messageProps}>{message}</Message>}
      {isInvalid && error && errorPosition === "top" && (
        <ErrorMessage {...errorProps}>{error}</ErrorMessage>
      )}
      {children}
      {isInvalid && error && errorPosition === "bottom" && (
        <ErrorMessage {...errorProps}>{error}</ErrorMessage>
      )}
    </>
  );
}
