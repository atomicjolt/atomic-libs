import {
  CellProps,
  isStringControl,
  RankedTester,
  rankWith,
} from "@jsonforms/core";
import { withJsonFormsCellProps } from "@jsonforms/react";
import { FieldInput, FieldTextArea, TextField } from "@atomicjolt/atomic-elements";
import { fromText, toText } from "./textValue";

/** A string input with no label, description or error message. */
export function AtomicTextCell(props: CellProps) {
  const { data, path, handleChange, enabled, isValid, schema, uischema, id } =
    props;
  const options = { ...props.config, ...uischema.options };

  return (
    <TextField
      id={id}
      aria-label={schema.title ?? path}
      value={toText(data)}
      onChange={(value: string) => handleChange(path, fromText(value))}
      isReadOnly={!enabled}
      isInvalid={!isValid}
      {...options.props}
    >
      {options.multi ? <FieldTextArea /> : <FieldInput />}
    </TextField>
  );
}

export const atomicTextCellTester: RankedTester = rankWith(1, isStringControl);

export default withJsonFormsCellProps(AtomicTextCell);
