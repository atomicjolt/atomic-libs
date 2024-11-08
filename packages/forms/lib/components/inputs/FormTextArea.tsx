import { TextAreaInput, TextAreaInputProps } from "@atomicjolt/atomic-elements";
import {
  FormInputProps,
  LengthValdiators,
  PatternValidators,
} from "../../types";
import { useFormField } from "../../hooks/useFormField";

export interface FormTextAreaInputProps
  extends FormInputProps<TextAreaInputProps, TextAreaInputProps["value"]>,
    LengthValdiators,
    PatternValidators {}

export function FormTextAreaInput(props: FormTextAreaInputProps) {
  const { fieldProps, inputProps, ref } = useFormField<
    TextAreaInputProps,
    TextAreaInputProps["value"]
  >(props);

  return <TextAreaInput {...fieldProps} {...inputProps} ref={ref} />;
}
