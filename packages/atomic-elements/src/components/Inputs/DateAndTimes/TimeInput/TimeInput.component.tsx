import { useRef } from "react";
import {
  AriaTimeFieldProps,
  TimeValue,
  useTimeField,
} from "@react-aria/datepicker";
import { useLocale } from "@react-aria/i18n";
import { useTimeFieldState } from "react-stately";

import { DateSegment } from "../DateInput";
import { TimeInputWrapper } from "./TimeInput.styles";
import { AriaProps, FieldInputProps } from "../../../../types";
import { ErrorMessage, Label, Message, ComboInput } from "../../../Fields";
import { useRenderProps, fieldStatusSelectors } from "@hooks/useRenderProps";

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
          <DateSegment key={i} segment={segment} state={state} />
        ))}
      </ComboInput>

      {isInvalid && error && (
        <ErrorMessage {...errorMessageProps}>{error}</ErrorMessage>
      )}
    </TimeInputWrapper>
  );
}
