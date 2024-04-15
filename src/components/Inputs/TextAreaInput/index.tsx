import cn from "classnames";
import React from "react";
import { AriaProps, FieldInputProps } from "../../../types";
import { TextAreaWrapper } from "./TextAreaInput.styles";
import { AriaTextFieldProps } from "react-aria";
import {
  FieldLabel,
  FieldMessage,
  FieldTextArea,
  FieldErrorMessage,
} from "../../Internal/Field";

export interface TextareaProps
  extends FieldInputProps,
    AriaProps<AriaTextFieldProps> {
  /** The user is given the ability to resize the input */
  resize?: "none" | "both" | "horizontal" | "vertical";
}

/** Textarea Component. Accepts a `ref` */
export const TextAreaInput = React.forwardRef(function TextAreaInput(
  props: TextareaProps,
  ref: React.Ref<HTMLTextAreaElement>
) {
  const {
    size = "medium",
    resize = "both",
    label,
    error,
    message,
    className,
    isDisabled,
    isInvalid,
    isRequired,
    isReadOnly,
    ...rest
  } = props;

  return (
    <TextAreaWrapper
      className={cn("aje-input__textarea", className)}
      size={size}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
      data-resize={resize === "none" ? undefined : resize}
      {...rest}
    >
      {label && <FieldLabel>{label}</FieldLabel>}
      {message && <FieldMessage>{message}</FieldMessage>}
      <FieldTextArea ref={ref} />
      <FieldErrorMessage>{error}</FieldErrorMessage>
    </TextAreaWrapper>
  );
});

export default TextAreaInput;
