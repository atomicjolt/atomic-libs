import { ChipGroup } from "@atomicjolt/atomic-elements";
import type { ChipGroupProps } from "@atomicjolt/atomic-elements";
import { FormInputProps } from "../../types";
import { useFormField } from "../../hooks/useFormField";
import { selectionToValue } from "./selection";

export interface FormChipGroupProps<T extends object>
  extends FormInputProps<ChipGroupProps<T>, ChipGroupProps<T>["selectedKeys"]> {}

/** A selectable ChipGroup. Set `selectionMode` to `"single"` or `"multiple"`.
 * Stores the selected keys as an array (or `"all"`) */
export function FormChipGroup<T extends object>(props: FormChipGroupProps<T>) {
  const { fieldProps, inputProps } = useFormField<
    ChipGroupProps<T>,
    ChipGroupProps<T>["selectedKeys"]
  >({
    ...props,
    selectionMode: props.selectionMode ?? "multiple",
    defaultValue: selectionToValue(props.defaultSelectedKeys),
  });

  return (
    <ChipGroup<T>
      {...fieldProps}
      selectedKeys={inputProps.value ?? []}
      onSelectionChange={(v) => inputProps.onChange(selectionToValue(v))}
    />
  );
}
