import React from "react";
import { useVariantClass } from "../../../hooks";
import { AriaProps, FieldInputProps, HasVariant } from "../../../types";
import { StyledTextField } from "../Inputs.styles";
import { AriaTextFieldProps } from "react-aria";
import { FieldInput } from "../../Fields";
import FloatingFieldInputWrapper from "../../Internal/FloatingFieldInputWrapper";
import classNames from "classnames";

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

  const variantClassName = useVariantClass("aje-input", variant);

  return (
    <StyledTextField
      type={type}
      size={size}
      className={classNames(variantClassName, className)}
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
