import { MultiSelectField } from "@atomicjolt/atomic-elements";
import type { MultiSelectFieldProps } from "@atomicjolt/atomic-elements";
import { FormInputProps } from "../../types";
import { useFormField } from "../../hooks/useFormField";
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
      selectedKeys={inputProps.value ?? []}
      onSelectionChange={(v) => inputProps.onChange(selectionToValue(v))}
    />
  );
}
