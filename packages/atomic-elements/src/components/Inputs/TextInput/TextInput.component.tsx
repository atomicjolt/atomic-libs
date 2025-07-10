import React from "react";
import { AriaTextFieldProps } from "@react-aria/textfield";
import classNames from "classnames";
import { AriaProps, FieldInputProps, HasVariant } from "../../../types";
import { StyledTextField } from "../Inputs.styles";
import { FieldInput } from "../../Fields";
import { FloatingFieldInputWrapper } from "../../Internal/FloatingFieldInputWrapper";

type Variants = "default" | "floating";

export interface TextInputProps
  extends AriaProps<AriaTextFieldProps>,
    FieldInputProps,
    HasVariant<Variants> {}

/** TextInput component. */
export const TextInput = React.forwardRef(function TextInput(
  props: TextInputProps,
  ref: React.Ref<HTMLInputElement>
) {
  const {
    type = "text",
    size = "medium",
    variant = "default",
    className,
    label,
    message,
    error,
    ...rest
  } = props;

  return (
    <StyledTextField
      type={type}
      size={size}
      className={classNames(className, {
        [`aje-input--${variant}`]: variant,
      })}
      data-float={(Boolean(props.value) && variant === "floating") || undefined}
      {...rest}
    >
      <FloatingFieldInputWrapper
        floating={variant === "floating"}
        label={label}
        message={message}
        error={error}
      >
        <FieldInput ref={ref} />
      </FloatingFieldInputWrapper>
    </StyledTextField>
  );
});

export default TextInput;
