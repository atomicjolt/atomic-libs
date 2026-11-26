import { DateInput } from "@atomicjolt/atomic-elements";
import type { DateInputProps } from "@atomicjolt/atomic-elements";
import { DateValue, FormInputProps } from "../../types";
import { useFormField } from "../../hooks/useFormField";

export interface FormDateInputProps
  extends FormInputProps<DateInputProps<DateValue>, DateInputProps<DateValue>["value"]> {}

/** Stores the `@internationalized/date` value (or `null`) as-is.
 * Use `validate` for range checks; react-hook-form's `min`/`max` rules
 * don't understand date objects. */
export function FormDateInput(props: FormDateInputProps) {
  const { fieldProps, inputProps } = useFormField<
    DateInputProps<DateValue>,
    DateInputProps<DateValue>["value"]
  >(props);

  return <DateInput {...fieldProps} {...inputProps} />;
}
