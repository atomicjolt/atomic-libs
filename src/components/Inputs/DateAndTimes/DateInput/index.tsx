import React, { useRef } from "react";
import cn from "classnames";
import {
  HelpTextProps,
  AriaProps,
  FieldStatusProps,
  BaseProps,
  FieldBaseProps,
} from "../../../../types";
import {
  DateInputWrapper,
  DateSegments,
  StyledDateSegment,
} from "./DateInput.styles";
import useForwardedRef from "../../../../hooks/useForwardedRef";
import {
  AriaDateFieldProps,
  DateValue,
  useDateField,
  useDateSegment,
  useLocale,
} from "react-aria";

import {
  DateFieldState,
  DateSegment as ReactStatelyDateSegment,
  useDateFieldState,
} from "react-stately";
import { createCalendar } from "@internationalized/date";
import Label from "../../../Utility/Label";
import { ErrorLabel } from "../../../../styles/utils";
import MaterialIcon from "../../../Icons/MaterialIcon";

export interface DateInputProps<T extends DateValue>
  extends AriaProps<AriaDateFieldProps<T>>,
    Omit<FieldBaseProps, "label"> {
  // Optional because DatePicker renders it's own label
  label?: React.ReactNode;
}

/** Date Input Component. Accepts a `ref` */
const DateInput = React.forwardRef<HTMLInputElement, DateInputProps<DateValue>>(
  (props: DateInputProps<DateValue>, ref) => {
    let { locale } = useLocale();
    let state = useDateFieldState({
      ...props,
      locale,
      createCalendar,
    });

    const internalRef = useForwardedRef(ref);
    let { labelProps, fieldProps } = useDateField(props, state, internalRef);

    const { size = "medium", error, message, hideLabel, className } = props;

    return (
      <DateInputWrapper
        className={cn("aje-input__date")}
        error={props.isInvalid}
        disabled={props.isDisabled}
        required={props.isRequired}
        size={size}
      >
        {props.label && (
          <Label {...labelProps} message={message} hidden={hideLabel}>
            {props.label}
          </Label>
        )}
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
          {state.isInvalid && <MaterialIcon icon="error" />}
        </DateSegments>
        {error && <ErrorLabel>{error}</ErrorLabel>}
      </DateInputWrapper>
    );
  }
);

interface DateSegmentProps {
  readonly segment: ReactStatelyDateSegment;
  readonly state: DateFieldState;
}

function DateSegment(props: DateSegmentProps) {
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
