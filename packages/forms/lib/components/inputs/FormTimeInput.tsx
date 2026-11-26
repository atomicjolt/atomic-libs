import { TimeInput } from "@atomicjolt/atomic-elements";
import type { TimeInputProps } from "@atomicjolt/atomic-elements";
import { TimeValue, FormInputProps } from "../../types";
import { useFormField } from "../../hooks/useFormField";

export interface FormTimeInputProps
  extends FormInputProps<TimeInputProps<TimeValue>, TimeInputProps<TimeValue>["value"]> {}

/** Stores the `@internationalized/date` value (or `null`) as-is.
 * Use `validate` for range checks; react-hook-form's `min`/`max` rules
 * don't understand date objects. */
export function FormTimeInput(props: FormTimeInputProps) {
  const { fieldProps, inputProps } = useFormField<
    TimeInputProps<TimeValue>,
    TimeInputProps<TimeValue>["value"]
  >(props);

  return <TimeInput {...fieldProps} {...inputProps} />;
}
