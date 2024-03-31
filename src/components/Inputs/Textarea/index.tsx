import cn from "classnames";
import React from "react";
import { AriaProps, FieldBaseProps } from "../../../types";
import Label from "../../Atoms/Label";
import { StyledTextArea, TextAreaWrapper } from "./Textarea.styles";
import { AriaTextFieldProps, useTextField } from "react-aria";
import useForwardedRef from "../../../hooks/useForwardedRef";
import { FieldError } from "../../../styles/utils";
import { FieldWrapper } from "../../Atoms/FieldWrapper";

export interface TextareaProps
  extends FieldBaseProps,
    AriaProps<AriaTextFieldProps> {
  /** The user is given the ability to resize the input */
  resize?: "none" | "both" | "horizontal" | "vertical";
}

/** Textarea Component. Accepts a `ref` */
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const {
      size = "medium",
      hideLabel = false,
      resize = "both",
      label,
      error,
      message,
      className,
      isDisabled,
      isInvalid,
      isRequired,
    } = props;

    const internalRef = useForwardedRef(ref);

    const { labelProps, inputProps, errorMessageProps, descriptionProps } =
      useTextField(
        {
          ...props,
          inputElementType: "textarea",
        },
        internalRef
      );

    const wrapperClassName = cn("aje-input", className, {
      "can-resize-y": resize === "vertical",
      "can-resize-x": resize === "horizontal",
      "can-resize": resize === "both",
    });

    return (
      <TextAreaWrapper
        className={wrapperClassName}
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
        >
          <StyledTextArea ref={ref} {...inputProps} />
        </FieldWrapper>
      </TextAreaWrapper>
    );
  }
);

export default TextArea;
