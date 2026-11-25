import { SelectField } from "@atomicjolt/atomic-elements";
import type { SelectFieldProps } from "@atomicjolt/atomic-elements";
import { FormInputProps } from "../../types";
import { useFormField } from "../../hooks/useFormField";
import { withFieldError } from "../FormErrorMessage";

export interface FormSelectFieldProps<T extends object>
  extends FormInputProps<
    SelectFieldProps<T>,
    SelectFieldProps<T>["selectedKey"]
  > {}

/** Stores the selected `Key` (or `null`) */
export function FormSelectField<T extends object>(
  props: FormSelectFieldProps<T>
) {
  const { fieldProps, inputProps } = useFormField<
    SelectFieldProps<T>,
    SelectFieldProps<T>["selectedKey"]
  >({ ...props, defaultValue: props.defaultSelectedKey });

  return (
    <SelectField<T>
      {...fieldProps}
      // Lets a child <Form.ErrorMessage /> show the validation message.
      children={withFieldError(
        (fieldProps as { children?: unknown }).children,
        (fieldProps as { error?: string }).error
      ) as any}
      selectedKey={inputProps.value ?? null}
      onSelectionChange={inputProps.onChange}
    />
  );
}
