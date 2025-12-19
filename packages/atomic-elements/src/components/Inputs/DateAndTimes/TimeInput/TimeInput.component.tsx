import { useRef } from "react";
import {
  AriaTimeFieldProps,
  TimeValue,
  useDateSegment,
  useTimeField,
} from "@react-aria/datepicker";
import { useLocale } from "@react-aria/i18n";
import { DateFieldState, DateSegment, useTimeFieldState } from "react-stately";

import { StyledTimeSegment, TimeInputWrapper } from "./TimeInput.styles";
import { AriaProps, FieldInputProps } from "../../../../types";
import { ErrorMessage, Label, Message, ComboInput } from "../../../Fields";
import { useRenderProps, fieldStatusSelectors } from "@hooks/useRenderProps";
import classNames from "classnames";

export interface TimeInputProps<T extends TimeValue>
  extends AriaProps<AriaTimeFieldProps<T>>,
    FieldInputProps {}

export function TimeInput<T extends TimeValue>(props: TimeInputProps<T>) {
  const { label, error, message, size = "medium", isInvalid } = props;
  const { locale } = useLocale();
  const state = useTimeFieldState({
    ...props,
    locale,
  });

  const ref = useRef(null);

  const { labelProps, fieldProps, errorMessageProps, descriptionProps } =
    useTimeField(props, state, ref);

  const renderProps = useRenderProps({
    componentClassName: "aje-input__time",
    ...props,
    size,
    selectors: fieldStatusSelectors(props),
  });

  return (
    <TimeInputWrapper {...renderProps}>
      {label && <Label {...labelProps}>{label}</Label>}
      {message && <Message {...descriptionProps}>{message}</Message>}

      <ComboInput
        {...fieldProps}
        ref={ref}
        className={"aje-input__date-segments"}
        padding="both"
      >
        {state.segments.map((segment, i) => (
          <TimeSegment key={i} segment={segment} state={state} />
        ))}
      </ComboInput>

      {isInvalid && error && (
        <ErrorMessage {...errorMessageProps}>{error}</ErrorMessage>
      )}
    </TimeInputWrapper>
  );
}

interface TimeSegmentProps {
  readonly segment: DateSegment;
  readonly state: DateFieldState;
}

export function TimeSegment(props: TimeSegmentProps) {
  const { segment, state } = props;
  const ref = useRef(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  const className = classNames("aje-input__segment", {
    placeholder: segment.isPlaceholder,
  });

  return (
    <StyledTimeSegment {...segmentProps} ref={ref} className={className}>
      {segment.text}
    </StyledTimeSegment>
  );
}
