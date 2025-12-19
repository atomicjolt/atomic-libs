import { useRef } from "react";
import {
  DateFieldState,
  DateSegment as ReactStatelyDateSegment,
  useDateFieldState,
} from "react-stately";
import { filterDOMProps } from "@react-aria/utils";
import { createContext } from "react";
import { DOMAttributes } from "@react-types/shared";
import {
  AriaDateFieldProps,
  DateValue,
  useDateField,
} from "@react-aria/datepicker";
import { useLocale } from "@react-aria/i18n";
import { createCalendar } from "@internationalized/date";

import { AriaProps } from "../../../types";
import { FieldProps } from "../Field";
import { StyledField } from "../Field.styles";
import { Provider } from "../../Internal/Provider";
import {
  FieldErrorContext,
  FieldLabelContext,
  FieldMessageContext,
} from "../contexts";
import { useRenderProps } from "@hooks";

export interface DateFieldContextType {
  state: DateFieldState;
  segments: ReactStatelyDateSegment[];
  fieldProps: DOMAttributes;
}

export const DateFieldContext = createContext<DateFieldContextType | null>(
  null
);

export interface DateFieldProps<T extends DateValue>
  extends FieldProps,
    Omit<AriaProps<AriaDateFieldProps<T>>, "label"> {}

/** Provides the accessbility implementation for a
 * date field and its associated label, error message, and description.
 * */
export function DateField<T extends DateValue>(props: DateFieldProps<T>) {
  const {
    isDisabled,
    isRequired,
    isReadOnly,
    isInvalid: propIsInvalid,
  } = props;

  const { locale } = useLocale();
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });

  const ref = useRef<HTMLDivElement>(null);
  const {
    labelProps,
    fieldProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
  } = useDateField(
    {
      ...props,
      label: true,
    },
    state,
    ref
  );

  const renderProps = useRenderProps({
    ...props,
    componentClassName: "aje-datefield",
    values: {
      isInvalid: isInvalid || propIsInvalid,
      isDisabled,
      isReadOnly,
      isRequired,
    },
    selectors: {
      "data-invalid": isInvalid || propIsInvalid,
      "data-disabled": isDisabled,
      "data-readonly": isReadOnly,
      "data-required": isRequired,
    },
  });

  const dateFieldContext: DateFieldContextType = {
    state,
    segments: state.segments,
    fieldProps,
  };

  return (
    <StyledField {...renderProps} {...filterDOMProps(props)} ref={ref}>
      <Provider
        values={[
          [FieldLabelContext.Provider, labelProps],
          [FieldMessageContext.Provider, descriptionProps],
          [
            FieldErrorContext.Provider,
            { ...errorMessageProps, isInvalid: isInvalid || propIsInvalid },
          ],
          [DateFieldContext.Provider, dateFieldContext],
        ]}
      >
        {renderProps.children}
      </Provider>
    </StyledField>
  );
}
