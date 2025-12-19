import { AriaDateFieldProps, DateValue } from "@react-aria/datepicker";

import { AriaProps, FieldInputProps } from "../../../../types";
import {
  Label,
  Message,
  ErrorMessage,
  DateField,
  ComboInput,
} from "../../../Fields";
import { useRenderProps, fieldStatusSelectors } from "@hooks/useRenderProps";

export interface DateInputProps<T extends DateValue>
  extends AriaProps<AriaDateFieldProps<T>>,
    FieldInputProps {}

/** DateInput Component */
export function DateInput<T extends DateValue>(props: DateInputProps<T>) {
  const { label, size = "medium", error, message, ...dateFieldProps } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-input__date",
    ...props,
    size,
    selectors: fieldStatusSelectors(props),
  });

  return (
    <DateField
      {...renderProps}
      {...dateFieldProps}
      style={{
        // The props of DateInput can affect the width due to number of segments shown
        // so we allow it grow larger than the default width constraints.
        width: "unset",
        minWidth: "var(--size-x)",
        ...renderProps.style,
      }}
    >
      {label && <Label>{label}</Label>}
      {message && <Message>{message}</Message>}
      <ComboInput padding="both">
        <DateField.Segments>
          {(_, index) => <DateField.Segment key={index} index={index} />}
        </DateField.Segments>
      </ComboInput>
      <ErrorMessage>{error}</ErrorMessage>
    </DateField>
  );
}
