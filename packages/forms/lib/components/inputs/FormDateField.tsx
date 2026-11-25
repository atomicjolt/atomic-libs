import { DateField } from "@atomicjolt/atomic-elements";
import type { DateFieldProps } from "@atomicjolt/atomic-elements";
import { DateValue, FormInputProps } from "../../types";
import { useFormField } from "../../hooks/useFormField";

export interface FormDateFieldProps
  extends FormInputProps<DateFieldProps<DateValue>, DateFieldProps<DateValue>["value"]> {}

/** Stores the `@internationalized/date` value (or `null`) as-is.
 * Use `validate` for range checks; react-hook-form's `min`/`max` rules
 * don't understand date objects. */
export function FormDateField(props: FormDateFieldProps) {
  const { fieldProps, inputProps } = useFormField<
    DateFieldProps<DateValue>,
    DateFieldProps<DateValue>["value"]
  >(props);

  return <DateField {...fieldProps} {...inputProps} />;
}
