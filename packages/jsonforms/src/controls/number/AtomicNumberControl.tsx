import {
  CellProps,
  ControlProps,
  isIntegerControl,
  isNumberControl,
  or,
  RankedTester,
  rankWith,
} from "@jsonforms/core";
import { withJsonFormsCellProps, withJsonFormsControlProps } from "@jsonforms/react";
import { NumberInput } from "@atomicjolt/atomic-elements";
import { useCellProps, useControlProps } from "../../hooks/useControlProps";

const tester = or(isNumberControl, isIntegerControl);

/** Number props shared by the control and the cell. */
function numberProps(props: ControlProps | CellProps) {
  const { data, path, handleChange, schema, id } = props;
  const isInteger = schema.type === "integer";

  return {
    id,
    // react-aria uses NaN for "no value".
    value: typeof data === "number" ? data : NaN,
    // A cleared field stores undefined.
    onChange: (value: number) => handleChange(path, Number.isNaN(value) ? undefined : value),
    minValue: schema.minimum,
    maxValue: schema.maximum,
    step: schema.multipleOf ?? (isInteger ? 1 : undefined),
    formatOptions: isInteger ? { maximumFractionDigits: 0 } : undefined,
  };
}

/** A `number` or `integer` field. */
export function AtomicNumberControl(props: ControlProps) {
  const { helpText, fieldProps } = useControlProps(props);
  if (!props.visible) return null;
  return <NumberInput {...numberProps(props)} {...helpText} {...fieldProps} />;
}

/** A `number` or `integer` input with no label or messages. */
export function AtomicNumberCell(props: CellProps) {
  const { fieldProps } = useCellProps(props);
  return <NumberInput {...numberProps(props)} {...fieldProps} />;
}

export const atomicNumberControlTester: RankedTester = rankWith(2, tester);
export const atomicNumberCellTester: RankedTester = rankWith(2, tester);

export const AtomicNumberControlRenderer = withJsonFormsControlProps(AtomicNumberControl);
export const AtomicNumberCellRenderer = withJsonFormsCellProps(AtomicNumberCell);
