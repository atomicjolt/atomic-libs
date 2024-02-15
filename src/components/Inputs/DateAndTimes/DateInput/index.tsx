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
import { AriaProps, FieldBaseProps } from "../../../../types";
import {
  DateInputWrapper,
  DateSegments,
  StyledDateSegment,
} from "./DateInput.styles";
import useForwardedRef from "../../../../hooks/useForwardedRef";
import {
  DateFieldState,
  DateSegment as ReactStatelyDateSegment,
  useDateFieldState,
} from "react-stately";
import { FieldWrapper } from "../../../Utility/FieldWrapper";

export interface DateInputProps<T extends DateValue>
  extends AriaProps<AriaDateFieldProps<T>>,
    Omit<FieldBaseProps, "label"> {
  // Optional because DatePicker renders it's own label
  label?: React.ReactNode;
}

/** Date Input Component. Accepts a `ref` */
const DateInput = React.forwardRef(
  <T extends DateValue>(
    props: DateInputProps<T>,
    ref: React.Ref<HTMLDivElement>
  ) => {
    let { locale } = useLocale();
    let state = useDateFieldState({
      ...props,
      locale,
      createCalendar,
    });

    const internalRef = useForwardedRef(ref);
    let { labelProps, fieldProps } = useDateField(props, state, internalRef);

    const {
      label,
      size = "medium",
      error,
      message,
      hideLabel,
      className,
    } = props;

    return (
      <DateInputWrapper
        className={cn("aje-input__date", className)}
        error={props.isInvalid}
        disabled={props.isDisabled}
        required={props.isRequired}
        size={size}
      >
        <FieldWrapper
          label={label}
          labelProps={labelProps}
          message={message}
          error={error}
          hideLabel={hideLabel}
        >
          <DateSegments
            {...fieldProps}
            ref={ref}
            className={cn("aje-input__date-segments", {
              "read-only": props.isReadOnly,
            })}
          >
            {state.segments.map((segment, i) => (
              <DateSegment key={i} segment={segment} state={state} />
            ))}
          </DateSegments>
        </FieldWrapper>
      </DateInputWrapper>
    );
  }
);

interface DateSegmentProps {
  readonly segment: ReactStatelyDateSegment;
  readonly state: DateFieldState;
}

export function DateSegment(props: DateSegmentProps) {
  const { segment, state } = props;
  let ref = useRef(null);
  let { segmentProps } = useDateSegment(segment, state, ref);

  const className = cn("aje-input__segment", {
    placeholder: segment.isPlaceholder,
  });

  return (
    <StyledDateSegment {...segmentProps} ref={ref} className={className}>
      {segment.text}
    </StyledDateSegment>
  );
}

export default DateInput;
