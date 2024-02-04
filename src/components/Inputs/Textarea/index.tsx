import cn from "classnames";
import React from "react";
import { AriaProps, FieldBaseProps } from "../../../types";
import Label from "../../Utility/Label";
import { StyledTextArea, TextAreaWrapper } from "./Textarea.styles";
import { AriaTextFieldProps, useTextField } from "react-aria";
import useForwardedRef from "../../../hooks/useForwardedRef";
import { FieldError } from "../../../styles/utils";

export interface TextareaProps
  extends FieldBaseProps,
    AriaProps<AriaTextFieldProps> {
  /** The user is given the ability to resize the input */
  resize?: "none" | "both" | "horizontal" | "vertical";
}

/** Textarea Component. Accepts a `ref` */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const {
      size = "small",
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
        <Label
          message={message}
          hidden={hideLabel}
          messageProps={descriptionProps}
          {...labelProps}
        >
          {label}
        </Label>
        <StyledTextArea ref={ref} {...inputProps} />
        {error && <FieldError {...errorMessageProps}>{error}</FieldError>}
      </TextAreaWrapper>
    );
  }
);

export default Textarea;
