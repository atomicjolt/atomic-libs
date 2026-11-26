import {
  FieldError,
  FieldErrorsImpl,
  FieldPath,
  FieldValues,
  Merge,
  Message,
  RegisterOptions,
  Validate,
  ValidationRule,
  ValidationValue,
} from "react-hook-form";
import type { DateInput, TimeInput } from "@atomicjolt/atomic-elements";

export type FormError =
  | FieldError
  | Merge<FieldError, FieldErrorsImpl<any>>
  | undefined;

/** The props that will be available on all form
 * inputs that are then passed down to react-hook-form */
type HookFormProps<
  V extends FieldValues = FieldValues,
  N extends FieldPath<V> = FieldPath<V>
> = Omit<
  RegisterOptions<V, N>,
  | "min"
  | "max"
  | "maxLength"
  | "minLength"
  | "disabled"
  | "required"
  | "valueAsNumber"
  | "valueAsDate"
  | "pattern"
  | "onChange"
  | "validate"
  | "value"
  | "setValueAs"
>;

type FormInputBaseProps<
  ValueType,
  V extends FieldValues = FieldValues,
  N extends FieldPath<V> = FieldPath<V>
> = HookFormProps<V, N> & {
  name: string;
  isRequired?: Message | ValidationRule<boolean>;
  validate?: Validate<ValueType, V> | Record<string, Validate<ValueType, V>>;
};

export type FormInputProps<FieldProps, ValueType> =
  FormInputBaseProps<ValueType> &
    Omit<
      FieldProps,
      | "isRequired"
      | "minLength"
      | "maxLength"
      | "minValue"
      | "maxValue"
      | "pattern"
      | "value"
    >;

export type LengthValdiators = {
  minLength?: ValidationRule<number>;
  maxLength?: ValidationRule<number>;
};

export type SizeValidators<T extends ValidationValue = number> = {
  minValue?: ValidationRule<T>;
  maxValue?: ValidationRule<T>;
};

export type PatternValidators = {
  pattern?: ValidationRule<RegExp>;
};

// atomic-elements doesn't re-export the `@internationalized/date` value types,
// so derive them from its date/time components. `Parameters` on a generic
// function instantiates its type parameter with the constraint, which gives
// us `DateValue` and `TimeValue` without depending on react-aria directly.

/** A date value from `@internationalized/date`
 * (`CalendarDate`, `CalendarDateTime` or `ZonedDateTime`) */
export type DateValue = NonNullable<Parameters<typeof DateInput>[0]["value"]>;

/** A time value from `@internationalized/date`
 * (`Time`, `CalendarDateTime` or `ZonedDateTime`) */
export type TimeValue = NonNullable<Parameters<typeof TimeInput>[0]["value"]>;
