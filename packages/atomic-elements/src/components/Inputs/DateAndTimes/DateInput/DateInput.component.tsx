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
        ...sizes[dateFieldProps.granularity || "day"],
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

const sizes: Record<Granularity, Record<string, string>> = {
  day: {
    "--size-sm-x": "125px",
    "--size-md-x": "200px",
    "--size-lg-x": "300px",
  },
  hour: {
    "--size-sm-x": "185px",
    "--size-md-x": "200px",
    "--size-lg-x": "300px",
  },
  minute: {
    "--size-sm-x": "215px",
    "--size-md-x": "230px",
    "--size-lg-x": "300px",
  },
  second: {
    "--size-sm-x": "240px",
    "--size-md-x": "240px",
    "--size-lg-x": "300px",
  },
};
