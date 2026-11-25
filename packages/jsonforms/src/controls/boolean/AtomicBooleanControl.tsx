import {
  and,
  CellProps,
  ControlProps,
  isBooleanControl,
  optionIs,
  RankedTester,
  rankWith,
} from "@jsonforms/core";
import { withJsonFormsCellProps, withJsonFormsControlProps } from "@jsonforms/react";
import { CheckBox, ErrorMessage, Message, ToggleSwitch } from "@atomicjolt/atomic-elements";
import { useCellProps, useControlProps } from "../../hooks/useControlProps";

/** A `boolean` field as a checkbox. The label sits beside the box. */
export function AtomicCheckBoxControl(props: ControlProps) {
  const { data, path, handleChange, visible, id } = props;
  const { label, helpText, fieldProps } = useControlProps(props);
  if (!visible) return null;

  return (
    <CheckBox
      id={id}
      // atomic-elements' CheckBox renders its text in a <span>, which doesn't
      // name the input; aria-label does.
      aria-label={label}
      isSelected={data === true}
      onChange={(value: boolean) => handleChange(path, value)}
      message={helpText.message}
      error={helpText.error}
      {...fieldProps}
    >
      {label}
    </CheckBox>
  );
}

/**
 * A `boolean` field as a toggle switch (`options.toggle: true`). ToggleSwitch
 * has no read-only state or help text, so a read-only form disables it and
 * the description / error render below it.
 */
export function AtomicToggleControl(props: ControlProps) {
  const { data, path, handleChange, visible, enabled, id } = props;
  const { label, description, errorMessage, isInvalid, options } = useControlProps(props);
  if (!visible) return null;

  return (
    <div>
      <ToggleSwitch
        id={id}
        isSelected={data === true}
        onChange={(value: boolean) => handleChange(path, value)}
        isDisabled={!enabled}
        isInvalid={isInvalid}
        {...options.props}
      >
        {label}
      </ToggleSwitch>
      {description && <Message>{description}</Message>}
      <ErrorMessage isInvalid={isInvalid}>{errorMessage}</ErrorMessage>
    </div>
  );
}

/** A `boolean` checkbox with no visible label. */
export function AtomicCheckBoxCell(props: CellProps) {
  const { data, path, handleChange, id } = props;
  const { fieldProps } = useCellProps(props);

  return (
    <CheckBox
      id={id}
      isSelected={data === true}
      onChange={(value: boolean) => handleChange(path, value)}
      {...fieldProps}
    />
  );
}

export const atomicCheckBoxControlTester: RankedTester = rankWith(2, isBooleanControl);
export const atomicToggleControlTester: RankedTester = rankWith(
  3,
  and(isBooleanControl, optionIs("toggle", true)),
);
export const atomicCheckBoxCellTester: RankedTester = rankWith(2, isBooleanControl);

export const AtomicCheckBoxControlRenderer = withJsonFormsControlProps(AtomicCheckBoxControl);
export const AtomicToggleControlRenderer = withJsonFormsControlProps(AtomicToggleControl);
export const AtomicCheckBoxCellRenderer = withJsonFormsCellProps(AtomicCheckBoxCell);
