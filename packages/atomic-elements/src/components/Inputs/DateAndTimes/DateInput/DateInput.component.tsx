import { useRef } from "react";
import cn from "classnames";
import {
  DateFieldState,
  DateSegment as ReactStatelyDateSegment,
  useDateFieldState,
} from "react-stately";
import {
  AriaDateFieldProps,
  DateValue,
  useDateField,
  useDateSegment,
} from "@react-aria/datepicker";
import { useLocale } from "@react-aria/i18n";
import { createCalendar } from "@internationalized/date";

import { AriaProps, FieldInputProps } from "../../../../types";
import { DateInputWrapper, StyledDateSegment } from "./DateInput.styles";
import { Label, Message, ComboInput, ErrorMessage } from "../../../Fields";
import { useRenderProps, fieldStatusSelectors } from "@hooks/useRenderProps";

export interface DateInputProps<T extends DateValue>
  extends AriaProps<AriaDateFieldProps<T>>,
    FieldInputProps {}

/** DateInput Component */
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

  const { label, size = "medium", error, message, isInvalid } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-input__date",
    ...props,
    size,
    selectors: fieldStatusSelectors(props),
  });

  return (
    <DateInputWrapper {...renderProps}>
      {label && <Label {...labelProps}>{label}</Label>}
      {message && <Message {...descriptionProps}>{message}</Message>}
      <ComboInput
        {...fieldProps}
        ref={ref}
        className={"aje-input__date-segments"}
        padding={["left", "right"]}
      >
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
      </ComboInput>
      <ErrorMessage {...errorMessageProps} isInvalid={isInvalid}>
        {error}
      </ErrorMessage>
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
