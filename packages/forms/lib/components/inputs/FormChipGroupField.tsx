import { ChipGroupField } from "@atomicjolt/atomic-elements";
import type { ChipGroupFieldProps } from "@atomicjolt/atomic-elements";
import { FormInputProps } from "../../types";
import { useFormField } from "../../hooks/useFormField";
import { withFieldError } from "../FormErrorMessage";
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
