import { TextField } from "@atomicjolt/atomic-elements";
import type { TextFieldProps } from "@atomicjolt/atomic-elements";
import {
  FormInputProps,
  LengthValdiators,
  PatternValidators,
} from "../../types";
import { useFormField } from "../../hooks/useFormField";
import { withFieldError } from "../FormErrorMessage";

export interface FormTextFieldProps
  extends FormInputProps<TextFieldProps, TextFieldProps["value"]>,
    LengthValdiators,
    PatternValidators {}

export function FormTextField(props: FormTextFieldProps) {
  const { fieldProps, inputProps } = useFormField<
    TextFieldProps,
    TextFieldProps["value"]
  >(props);

  return <TextField {...fieldProps}
      // Lets a child <Form.ErrorMessage /> show the validation message.
      children={withFieldError(
        (fieldProps as { children?: unknown }).children,
        (fieldProps as { error?: string }).error
      ) as any} {...inputProps} />;
}
