import React from "react";
import { HasVariant, VariantRecord } from "../../../types";
import { TextInputProps as SharedInputProps } from "./TextInput.types";
import DefaultTextInput from "./variants/DefaultTextInput";
import FloatingTextInput from "./variants/FloatingTextInput";

type TextInputVariants = "default" | "floating";

const variants: VariantRecord<
  TextInputVariants,
  SharedInputProps & React.RefAttributes<HTMLInputElement>
> = {
  default: DefaultTextInput,
  floating: FloatingTextInput,
};

type TextInputProps = SharedInputProps & HasVariant<TextInputVariants>;

/** TextInput component. Fowards a `ref` to the internal input element */
const TextInput = React.forwardRef(
  (
    { variant = "default", ...rest }: TextInputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const Component = variants[variant];

    return <Component {...rest} ref={ref} />;
  }
);

export default TextInput;
