import React from "react";
import cn from "classnames";
import { AriaTextFieldProps } from "@react-aria/textfield";

import { AriaProps, FieldInputProps } from "../../../types";
import { TextAreaWrapper } from "./TextAreaInput.styles";
import {
  FieldLabel,
  FieldMessage,
  FieldTextArea,
  FieldErrorMessage,
} from "../../Fields";

export interface TextareaProps
  extends FieldInputProps,
    AriaProps<AriaTextFieldProps> {
  /** The user is given the ability to resize the input */
  resize?: "none" | "both" | "horizontal" | "vertical";
  rows?: number;
  cols?: number;
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
    rows,
    cols,
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
      <FieldTextArea ref={ref} rows={rows} cols={cols} />
      <FieldErrorMessage>{error}</FieldErrorMessage>
    </TextAreaWrapper>
  );
});

export default TextAreaInput;
