import React from "react";
import {
  AriaTimeFieldProps,
  TimeValue,
  useLocale,
  useTimeField,
} from "react-aria";
import { useTimeFieldState } from "react-stately";
import classNames from "classnames";
import { DateSegment } from "../DateInput";
import { TimeInputWrapper } from "./TimeInput.styles";
import { FieldWrapper } from "../../../Utility/FieldWrapper";
import { DateSegments } from "../DateInput/DateInput.styles";
import { AriaProps, FieldBaseProps } from "../../../../types";
import useForwardedRef from "../../../../hooks/useForwardedRef";

export interface TimeInputProps<T extends TimeValue>
  extends AriaProps<AriaTimeFieldProps<T>>,
    FieldBaseProps {}

export const TimeInput = React.forwardRef(
  <T extends TimeValue>(
    props: TimeInputProps<T>,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const {
      label,
      error,
      message,
      hideLabel,
      size,
      isDisabled,
      isInvalid,
      isReadOnly,
      isRequired,
      className,
    } = props;
    let { locale } = useLocale();
    let state = useTimeFieldState({
      ...props,
      locale,
    });

    const internalRef = useForwardedRef(ref);

    let { labelProps, fieldProps, errorMessageProps, descriptionProps } =
      useTimeField(props, state, internalRef);

    return (
      <TimeInputWrapper
        className={classNames("aje-input__time", className)}
        error={isInvalid}
        disabled={isDisabled}
        required={isRequired}
        size={size}
      >
        <FieldWrapper
          label={label}
          labelProps={labelProps}
          message={message}
          error={error}
          hideLabel={hideLabel}
          messageProps={descriptionProps}
          errorProps={errorMessageProps}
        >
          <DateSegments
            {...fieldProps}
            ref={internalRef}
            className={classNames("aje-input__date-segments", {
              "read-only": isReadOnly,
            })}
          >
            {state.segments.map((segment, i) => (
              <DateSegment key={i} segment={segment} state={state} />
            ))}
          </DateSegments>
        </FieldWrapper>
      </TimeInputWrapper>
    );
  }
);
