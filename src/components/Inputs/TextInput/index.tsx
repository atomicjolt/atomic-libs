import React from "react";
import cn from "classnames";
import { useVariantClass } from "../../../hooks";
import { AriaProps, FieldBaseProps, HasVariant } from "../../../types";
import { Input } from "../Inputs.styles";
import { FloatingInputWrapper, TextInputWrapper } from "./TextInput.styles";
import useForwardedRef from "../../../hooks/useForwardedRef";
import { AriaTextFieldProps, useTextField } from "react-aria";
import { FieldError, FieldMessage } from "../../../styles/utils";
import Label from "../../Utility/Label";

type Variants = "default" | "floating";

interface TextInputProps
  extends AriaProps<AriaTextFieldProps>,
    FieldBaseProps,
    HasVariant<Variants> {}

/** TextInput component. Fowards a `ref` to the internal input element */
const TextInput = React.forwardRef(
  (props: TextInputProps, ref: React.Ref<HTMLInputElement>) => {
    const {
      type = "text",
      label,
      hideLabel,
      size,
      error,
      message,
      variant = "default",
      className,
      isDisabled,
      isRequired,
    } = props;

    const internalRef = useForwardedRef(ref);

    let {
      labelProps,
      inputProps,
      descriptionProps,
      errorMessageProps,
      isInvalid,
    } = useTextField(props, internalRef);

    const variantClassName = useVariantClass("aje-input", variant);

    return (
      <TextInputWrapper
        className={cn("aje-textinput", variantClassName, className, {
          "has-value": inputProps.value,
        })}
        size={size}
        disabled={isDisabled}
        required={isRequired}
        error={isInvalid}
      >
        {variant === "default" && (
          <Label {...labelProps} hidden={hideLabel}>
            {label}
          </Label>
        )}
        {variant === "default" && message && (
          <FieldMessage {...descriptionProps}>{message}</FieldMessage>
        )}
        <FloatingInputWrapper>
          <Input ref={internalRef} type={type} {...inputProps} />
          {variant === "floating" && (
            <Label {...labelProps} hidden={hideLabel}>
              {label}
            </Label>
          )}
        </FloatingInputWrapper>
        {variant === "floating" && message && (
          <FieldMessage {...descriptionProps}>{message}</FieldMessage>
        )}
        {error && <FieldError {...errorMessageProps}>{error}</FieldError>}
      </TextInputWrapper>
    );
  }
);

export default TextInput;
