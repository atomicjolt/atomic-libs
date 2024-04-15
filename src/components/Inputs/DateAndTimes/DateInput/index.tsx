import React, { useRef } from "react";
import cn from "classnames";
import {
  AriaDateFieldProps,
  DateValue,
  useDateField,
  useDateSegment,
  useLocale,
} from "react-aria";
import { createCalendar } from "@internationalized/date";
import { AriaProps, FieldInputProps } from "../../../../types";
import { DateInputWrapper, StyledDateSegment } from "./DateInput.styles";
import {
  DateFieldState,
  DateSegment as ReactStatelyDateSegment,
  useDateFieldState,
} from "react-stately";
import {
  Label,
  Message,
  VirtualInput,
  ErrorMessage,
} from "../../../Internal/Field";

export interface DateInputProps<T extends DateValue>
  extends AriaProps<AriaDateFieldProps<T>>,
    Omit<FieldInputProps, "label"> {
  // Optional because DatePicker renders it's own label
  label?: React.ReactNode;
}

/** Date Input Component. Accepts a `ref` */
export function DateInput<T extends DateValue>(props: DateInputProps<T>) {
  const { locale } = useLocale();
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });

  const ref = useRef(null);
  const { labelProps, fieldProps, descriptionProps, errorMessageProps } =
    useDateField(props, state, ref);

  const {
    label,
    size = "medium",
    error,
    message,
    className,
    isInvalid,
    isDisabled,
    isReadOnly,
    isRequired,
  } = props;

  return (
    <DateInputWrapper
      className={cn("aje-input__date", className)}
      size={size}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
    >
      {label && <Label {...labelProps}>{label}</Label>}
      {message && <Message {...descriptionProps}>{message}</Message>}

      <VirtualInput
        {...fieldProps}
        ref={ref}
        className={"aje-input__date-segments"}
      >
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
      </VirtualInput>

      {isInvalid && error && (
        <ErrorMessage {...errorMessageProps}>{error}</ErrorMessage>
      )}
    </DateInputWrapper>
  );
}

interface DateSegmentProps {
  readonly segment: ReactStatelyDateSegment;
  readonly state: DateFieldState;
}

export function DateSegment(props: DateSegmentProps) {
  const { segment, state } = props;
  const ref = useRef(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  const className = cn("aje-input__segment", {
    placeholder: segment.isPlaceholder,
  });

  return (
    <StyledDateSegment {...segmentProps} ref={ref} className={className}>
      {segment.text}
    </StyledDateSegment>
  );
}

DateInput.displayName = "DateInput";
export default DateInput;
