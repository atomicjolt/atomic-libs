import { AriaDateFieldProps, DateValue } from "@react-aria/datepicker";
import { Granularity } from "@react-types/datepicker";

import { AriaProps, FieldInputProps } from "../../../../types";
import { DateField } from "../../../Fields/DateField";
import { Label, Message, ErrorMessage } from "../../../Fields";
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
        // ...sizes[dateFieldProps.granularity || "day"],
        ...renderProps.style,
      }}
    >
      {label && <Label>{label}</Label>}
      {message && <Message>{message}</Message>}
      <DateField.Segments>
        {(_, index) => <DateField.Segment key={index} index={index} />}
      </DateField.Segments>
      <ErrorMessage>{error}</ErrorMessage>
    </DateField>
  );
}
