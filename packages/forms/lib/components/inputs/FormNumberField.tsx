import { NumberField } from "@atomicjolt/atomic-elements";
import type { NumberFieldProps } from "@atomicjolt/atomic-elements";
import { FormInputProps, PatternValidators, SizeValidators } from "../../types";
import { useFormField } from "../../hooks/useFormField";
import { withFieldError } from "../FormErrorMessage";

export interface FormNumberFieldProps
  extends FormInputProps<NumberFieldProps, NumberFieldProps["value"]>,
    SizeValidators,
    PatternValidators {}

export function FormNumberField(props: FormNumberFieldProps) {
  const { inputProps, fieldProps } = useFormField<
    NumberFieldProps,
    NumberFieldProps["value"]
  >(props);

  // TODO: should be able to pass the ref down here,
  // but AE doesn't currently support passing input refs through their wrapper fields

  return <NumberField {...fieldProps}
      // Lets a child <Form.ErrorMessage /> show the validation message.
      children={withFieldError(
        (fieldProps as { children?: unknown }).children,
        (fieldProps as { error?: string }).error
      ) as any} {...inputProps} />;
}
