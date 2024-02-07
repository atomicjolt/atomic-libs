import React from "react";
import cn from "classnames";
import { useVariantClass } from "../../../hooks";
import { AriaProps, FieldBaseProps, HasVariant } from "../../../types";
import { Input, InputWrapper } from "../Inputs.styles";
import useForwardedRef from "../../../hooks/useForwardedRef";
import { AriaTextFieldProps, useTextField } from "react-aria";
import { FieldWrapper } from "../../Utility/FieldWrapper";

type Variants = "default" | "floating";

export interface TextInputProps
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
      size = "medium",
      error,
      message,
      variant = "default",
      className,
      isDisabled,
      isRequired,
    } = props;

    const internalRef = useForwardedRef(ref);

    const {
      labelProps,
      inputProps,
      descriptionProps,
      errorMessageProps,
      isInvalid,
    } = useTextField(props, internalRef);

    const variantClassName = useVariantClass("aje-input", variant);

    return (
      <InputWrapper
        className={cn("aje-input__text", variantClassName, className, {
          "has-value": inputProps.value,
        })}
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
          floating={variant === "floating"}
        >
          <Input ref={internalRef} type={type} {...inputProps} />
        </FieldWrapper>
      </InputWrapper>
    );
  }
);

export default TextInput;
