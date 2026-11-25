import { ChipGroupField } from "@atomicjolt/atomic-elements";
import type { ChipGroupFieldProps } from "@atomicjolt/atomic-elements";
import { FormInputProps } from "../../types";
import { useFormField } from "../../hooks/useFormField";
import { selectionToValue } from "./selection";

export interface FormChipGroupFieldProps
  extends FormInputProps<
    ChipGroupFieldProps,
    ChipGroupFieldProps["selectedKeys"]
  > {}

/** A selectable ChipGroupField. Set `selectionMode` to `"single"` or `"multiple"`.
 * Stores the selected keys as an array (or `"all"`) */
export function FormChipGroupField(props: FormChipGroupFieldProps) {
  const { fieldProps, inputProps } = useFormField<
    ChipGroupFieldProps,
    ChipGroupFieldProps["selectedKeys"]
  >({
    ...props,
    selectionMode: props.selectionMode ?? "multiple",
    defaultValue: selectionToValue(props.defaultSelectedKeys),
  });

  return (
    <ChipGroupField
      {...fieldProps}
      selectedKeys={inputProps.value ?? []}
      onSelectionChange={(v) => inputProps.onChange(selectionToValue(v))}
    />
  );
}
