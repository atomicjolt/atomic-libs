import {
  ControlProps,
  isStringControl,
  RankedTester,
  rankWith,
} from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import {
  FieldErrorMessage,
  FieldInput,
  FieldLabel,
  FieldMessage,
  FieldTextArea,
  TextField,
} from "@atomicjolt/atomic-elements";
import { useControlProps } from "../../hooks/useControlProps";
import { fromText, toText } from "./textValue";

/** A string field. `options.multi` renders a textarea. */
export function AtomicTextControl(props: ControlProps) {
  const { data, path, handleChange, visible, id } = props;
  const { options, label, description, errorMessage, fieldProps } =
    useControlProps(props);

  if (!visible) return null;

  return (
    <TextField
      id={id}
      value={toText(data)}
      onChange={(value: string) => handleChange(path, fromText(value))}
      {...fieldProps}
    >
      <FieldLabel>{label}</FieldLabel>
      {options.multi ? <FieldTextArea /> : <FieldInput />}
      {description && <FieldMessage>{description}</FieldMessage>}
      <FieldErrorMessage>{errorMessage}</FieldErrorMessage>
    </TextField>
  );
}

export const atomicTextControlTester: RankedTester = rankWith(1, isStringControl);

export default withJsonFormsControlProps(AtomicTextControl);
