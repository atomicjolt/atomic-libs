import React from "react";
import cn from "classnames";
import { useIds, useVariant } from "../../../hooks";
import InputError from "../../Utility/InputError";
import { makeEventHandler } from "../../../utils";
import {
  TextInputProps,
  TextInputVariantProps,
  Variants,
} from "./TextInput.types";
import { VariantRecord } from "../../../types";
import DefaultTextInput from "./variants/DefaultTextInput";
import FloatingTextInput from "./variants/FloatingTextInput";
import { Input } from "../Inputs.styles";
import { TextInputWrapper } from "./TextInput.styles";

const variants: VariantRecord<Variants, TextInputVariantProps> = {
  default: DefaultTextInput,
  floating: FloatingTextInput,
};

/** TextInput component. Fowards a `ref` to the internal input element */
const TextInput = React.forwardRef(
  (props: TextInputProps, ref: React.Ref<HTMLInputElement>) => {
    const [inputId, errorId] = useIds("TextInput", ["input", "error"]);

    const {
      value,
      onChange,
      type = "text",
      label,
      hideLabel,
      size,
      error,
      message,
      variant = "default",
      className,
      ...inputProps
    } = props;

    const { disabled, required } = inputProps;

    const [Variant, variantClassName] = useVariant(
      variants,
      "aje-input",
      variant
    );

    return (
      <TextInputWrapper
        className={cn([variantClassName, className])}
        size={size}
        disabled={disabled}
        required={required}
        error={error}
      >
        <Variant
          message={message}
          hideLabel={hideLabel}
          inputId={inputId}
          label={label}
        >
          <Input
            ref={ref}
            id={inputId}
            aria-describedby={error ? errorId : ""}
            value={value}
            onChange={makeEventHandler(onChange)}
            type={type}
            {...inputProps}
          />
        </Variant>
        <InputError error={error} id={errorId} />
      </TextInputWrapper>
    );
  }
);

export default TextInput;
