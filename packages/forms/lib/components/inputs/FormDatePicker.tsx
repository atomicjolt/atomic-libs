import { DatePicker } from "@atomicjolt/atomic-elements";
import type { DatePickerProps } from "@atomicjolt/atomic-elements";
import { DateValue, FormInputProps } from "../../types";
import { useFormField } from "../../hooks/useFormField";

export interface FormDatePickerProps
  extends FormInputProps<DatePickerProps<DateValue>, DatePickerProps<DateValue>["value"]> {}

/** Stores the `@internationalized/date` value (or `null`) as-is.
 * Use `validate` for range checks; react-hook-form's `min`/`max` rules
 * don't understand date objects. */
export function FormDatePicker(props: FormDatePickerProps) {
  const { fieldProps, inputProps } = useFormField<
    DatePickerProps<DateValue>,
    DatePickerProps<DateValue>["value"]
  >(props);

  return <DatePicker {...fieldProps} {...inputProps} />;
}
