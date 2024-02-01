import React, { useRef } from "react";
import cn from "classnames";
import { InputComponentProps } from "../../../../types";
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
  extends AriaDateFieldProps<T>,
    Omit<InputComponentProps, "label"> {}

/** Date Input Component. Accepts a `ref` */
const DateInput = React.forwardRef<HTMLInputElement, DateInputProps<any>>(
  (props: DateInputProps<any>, ref) => {
    let { locale } = useLocale();
    let state = useDateFieldState({
      ...props,
      locale,
      createCalendar,
    });

    const internalRef = useForwardedRef(ref);
    let { labelProps, fieldProps } = useDateField(props, state, internalRef);

    const { size = "medium", errorMessage, message, hideLabel } = props;

    return (
      <DateInputWrapper
        className={cn("aje-input__date")}
        error={errorMessage}
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
        {errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}
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
