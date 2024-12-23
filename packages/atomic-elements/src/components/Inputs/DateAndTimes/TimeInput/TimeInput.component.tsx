import { useRef } from "react";
import {
  AriaTimeFieldProps,
  TimeValue,
  useTimeField,
} from "@react-aria/datepicker";
import { useLocale } from "@react-aria/i18n";
import { useTimeFieldState } from "react-stately";
import classNames from "classnames";

import { DateSegment } from "../DateInput";
import { TimeInputWrapper } from "./TimeInput.styles";
import { AriaProps, FieldInputProps } from "../../../../types";
import { ErrorMessage, Label, Message, ComboInput } from "../../../Fields";

export interface TimeInputProps<T extends TimeValue>
  extends AriaProps<AriaTimeFieldProps<T>>,
    FieldInputProps {}

export function TimeInput<T extends TimeValue>(props: TimeInputProps<T>) {
  const {
    label,
    error,
    message,
    size = "medium",
    isDisabled,
    isInvalid,
    isReadOnly,
    isRequired,
    className,
  } = props;
  const { locale } = useLocale();
  const state = useTimeFieldState({
    ...props,
    locale,
  });

  const ref = useRef(null);

  const { labelProps, fieldProps, errorMessageProps, descriptionProps } =
    useTimeField(props, state, ref);

  return (
    <TimeInputWrapper
      className={classNames("aje-input__time", className)}
      isInvalid={isInvalid}
      isDisabled={isDisabled}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
      size={size}
    >
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

      {isInvalid && error && (
        <ErrorMessage {...errorMessageProps}>{error}</ErrorMessage>
      )}
    </TimeInputWrapper>
  );
}
