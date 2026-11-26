import {
  CellProps,
  ControlProps,
  isDateControl,
  isDateTimeControl,
  isTimeControl,
  RankedTester,
  rankWith,
} from "@jsonforms/core";
import { withJsonFormsCellProps, withJsonFormsControlProps } from "@jsonforms/react";
import { DatePicker, TimeInput } from "@atomicjolt/atomic-elements";
import { getLocalTimeZone, now, type DateValue } from "@internationalized/date";
import { useCellProps, useControlProps } from "../../hooks/useControlProps";
import {
  fromDateTimeValue,
  fromDateValue,
  fromTimeValue,
  toDateTimeValue,
  toDateValue,
  toTimeValue,
  type TimeValue,
} from "../../util/dates";

function dateProps({ data, path, handleChange, id }: ControlProps | CellProps) {
  return {
    id,
    value: toDateValue(data),
    onChange: (value: DateValue | null) => handleChange(path, fromDateValue(value)),
  };
}

function timeProps({ data, path, handleChange, id }: ControlProps | CellProps) {
  return {
    id,
    value: toTimeValue(data),
    onChange: (value: TimeValue | null) => handleChange(path, fromTimeValue(value)),
  };
}

function dateTimeProps({ data, path, handleChange, id }: ControlProps | CellProps) {
  return {
    id,
    value: toDateTimeValue(data),
    onChange: (value: DateValue | null) => handleChange(path, fromDateTimeValue(value)),
    granularity: "minute" as const,
    // A zoned placeholder makes new values zoned, so they convert to an instant.
    placeholderValue: now(getLocalTimeZone()).set({ second: 0, millisecond: 0 }),
  };
}

/** A `format: "date"` string field. Stores `YYYY-MM-DD`. */
export function AtomicDateControl(props: ControlProps) {
  const { helpText, fieldProps } = useControlProps(props);
  if (!props.visible) return null;
  return <DatePicker {...dateProps(props)} {...helpText} {...fieldProps} />;
}

/** A `format: "time"` string field. Stores `HH:mm:ss`. */
export function AtomicTimeControl(props: ControlProps) {
  const { helpText, fieldProps } = useControlProps(props);
  if (!props.visible) return null;
  return <TimeInput {...timeProps(props)} {...helpText} {...fieldProps} />;
}

/** A `format: "date-time"` string field. Stores an ISO instant (UTC). */
export function AtomicDateTimeControl(props: ControlProps) {
  const { helpText, fieldProps } = useControlProps(props);
  if (!props.visible) return null;
  return <DatePicker {...dateTimeProps(props)} {...helpText} {...fieldProps} />;
}

export function AtomicDateCell(props: CellProps) {
  const { fieldProps } = useCellProps(props);
  return <DatePicker {...dateProps(props)} {...fieldProps} />;
}

export function AtomicTimeCell(props: CellProps) {
  const { fieldProps } = useCellProps(props);
  return <TimeInput {...timeProps(props)} {...fieldProps} />;
}

export function AtomicDateTimeCell(props: CellProps) {
  const { fieldProps } = useCellProps(props);
  return <DatePicker {...dateTimeProps(props)} {...fieldProps} />;
}

export const atomicDateControlTester: RankedTester = rankWith(2, isDateControl);
export const atomicTimeControlTester: RankedTester = rankWith(2, isTimeControl);
export const atomicDateTimeControlTester: RankedTester = rankWith(2, isDateTimeControl);
export const atomicDateCellTester: RankedTester = rankWith(2, isDateControl);
export const atomicTimeCellTester: RankedTester = rankWith(2, isTimeControl);
export const atomicDateTimeCellTester: RankedTester = rankWith(2, isDateTimeControl);

export const AtomicDateControlRenderer = withJsonFormsControlProps(AtomicDateControl);
export const AtomicTimeControlRenderer = withJsonFormsControlProps(AtomicTimeControl);
export const AtomicDateTimeControlRenderer = withJsonFormsControlProps(AtomicDateTimeControl);
export const AtomicDateCellRenderer = withJsonFormsCellProps(AtomicDateCell);
export const AtomicTimeCellRenderer = withJsonFormsCellProps(AtomicTimeCell);
export const AtomicDateTimeCellRenderer = withJsonFormsCellProps(AtomicDateTimeCell);
