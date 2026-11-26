import { MultiSelectField } from "@atomicjolt/atomic-elements";
import type { MultiSelectFieldProps } from "@atomicjolt/atomic-elements";
import { FormInputProps } from "../../types";
import { useFormField } from "../../hooks/useFormField";
import { withFieldError } from "../FormErrorMessage";
import { selectionToValue } from "./selection";

export interface FormMultiSelectFieldProps<T extends object>
  extends FormInputProps<
    MultiSelectFieldProps<T>,
    MultiSelectFieldProps<T>["selectedKeys"]
  > {}

/** Stores the selected keys as an array (or `"all"`) */
export function FormMultiSelectField<T extends object>(
  props: FormMultiSelectFieldProps<T>
) {
  const { fieldProps, inputProps } = useFormField<
    MultiSelectFieldProps<T>,
    MultiSelectFieldProps<T>["selectedKeys"]
  >({
    ...props,
    defaultValue: selectionToValue(props.defaultSelectedKeys),
  });

  return (
    <MultiSelectField
      {...fieldProps}
      // Lets a child <Form.ErrorMessage /> show the validation message.
      children={withFieldError(
        (fieldProps as { children?: unknown }).children,
        (fieldProps as { error?: string }).error
      ) as any}
      selectedKeys={inputProps.value ?? []}
      onSelectionChange={(v) => inputProps.onChange(selectionToValue(v))}
    />
  );
}
