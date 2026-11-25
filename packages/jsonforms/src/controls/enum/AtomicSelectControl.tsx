import {
  and,
  ControlProps,
  EnumCellProps,
  isEnumControl,
  isOneOfEnumControl,
  optionIs,
  OwnPropsOfEnum,
  RankedTester,
  rankWith,
} from "@jsonforms/core";
import {
  withJsonFormsEnumCellProps,
  withJsonFormsEnumProps,
  withJsonFormsOneOfEnumCellProps,
  withJsonFormsOneOfEnumProps,
} from "@jsonforms/react";
import { ComboBox, CustomSelect, Item, Key, Radio, RadioGroup } from "@atomicjolt/atomic-elements";
import { useCellProps, useControlProps } from "../../hooks/useControlProps";
import { keyOf, valueOf } from "../../util/enumKeys";

type EnumControlProps = ControlProps & OwnPropsOfEnum;

/** An `enum` / `oneOf` field as a dropdown. */
export function AtomicSelectControl(props: EnumControlProps) {
  const { data, path, handleChange, visible, id, options = [] } = props;
  const { helpText, fieldProps } = useControlProps(props);
  if (!visible) return null;

  return (
    <CustomSelect
      id={id}
      selectedKey={keyOf(options, data)}
      onSelectionChange={(key: Key | null) => handleChange(path, valueOf(options, key))}
      {...helpText}
      {...fieldProps}
    >
      {options.map((option, index) => (
        <Item key={index} id={String(index)}>
          {option.label}
        </Item>
      ))}
    </CustomSelect>
  );
}

/** An `enum` / `oneOf` field as radio buttons (`options.format: "radio"`). */
export function AtomicRadioControl(props: EnumControlProps) {
  const { data, path, handleChange, visible, id, options = [] } = props;
  const { helpText, fieldProps } = useControlProps(props);
  if (!visible) return null;

  return (
    <RadioGroup
      id={id}
      value={keyOf(options, data)}
      onChange={(key: string) => handleChange(path, valueOf(options, key))}
      {...helpText}
      {...fieldProps}
    >
      {options.map((option, index) => (
        <Radio key={index} value={String(index)}>
          {option.label}
        </Radio>
      ))}
    </RadioGroup>
  );
}

/** An `enum` / `oneOf` field as a filterable combobox (`options.autocomplete: true`). */
export function AtomicComboBoxControl(props: EnumControlProps) {
  const { data, path, handleChange, visible, id, options = [] } = props;
  const { helpText, fieldProps } = useControlProps(props);
  if (!visible) return null;

  return (
    <ComboBox
      id={id}
      selectedKey={keyOf(options, data)}
      onSelectionChange={(key: Key | null) => handleChange(path, valueOf(options, key))}
      {...helpText}
      {...fieldProps}
    >
      {options.map((option, index) => (
        <Item key={index} id={String(index)} textValue={option.label}>
          {option.label}
        </Item>
      ))}
    </ComboBox>
  );
}

/** An `enum` / `oneOf` dropdown with no label or messages. */
export function AtomicSelectCell(props: EnumCellProps) {
  const { data, path, handleChange, id, options = [] } = props;
  const { fieldProps } = useCellProps(props);

  return (
    <CustomSelect
      id={id}
      selectedKey={keyOf(options, data)}
      onSelectionChange={(key: Key | null) => handleChange(path, valueOf(options, key))}
      {...fieldProps}
    >
      {options.map((option, index) => (
        <Item key={index} id={String(index)}>
          {option.label}
        </Item>
      ))}
    </CustomSelect>
  );
}

export const atomicEnumSelectControlTester: RankedTester = rankWith(2, isEnumControl);
export const atomicOneOfSelectControlTester: RankedTester = rankWith(2, isOneOfEnumControl);
export const atomicEnumRadioControlTester: RankedTester = rankWith(
  3,
  and(isEnumControl, optionIs("format", "radio")),
);
export const atomicOneOfRadioControlTester: RankedTester = rankWith(
  3,
  and(isOneOfEnumControl, optionIs("format", "radio")),
);
export const atomicEnumComboBoxControlTester: RankedTester = rankWith(
  3,
  and(isEnumControl, optionIs("autocomplete", true)),
);
export const atomicOneOfComboBoxControlTester: RankedTester = rankWith(
  3,
  and(isOneOfEnumControl, optionIs("autocomplete", true)),
);
export const atomicEnumSelectCellTester: RankedTester = rankWith(2, isEnumControl);
export const atomicOneOfSelectCellTester: RankedTester = rankWith(2, isOneOfEnumControl);

// `enum` and `oneOf` options come from different JSON Forms HOCs.
export const AtomicEnumSelectControlRenderer = withJsonFormsEnumProps(AtomicSelectControl);
export const AtomicOneOfSelectControlRenderer = withJsonFormsOneOfEnumProps(AtomicSelectControl);
export const AtomicEnumRadioControlRenderer = withJsonFormsEnumProps(AtomicRadioControl);
export const AtomicOneOfRadioControlRenderer = withJsonFormsOneOfEnumProps(AtomicRadioControl);
export const AtomicEnumComboBoxControlRenderer = withJsonFormsEnumProps(AtomicComboBoxControl);
export const AtomicOneOfComboBoxControlRenderer = withJsonFormsOneOfEnumProps(AtomicComboBoxControl);
export const AtomicEnumSelectCellRenderer = withJsonFormsEnumCellProps(AtomicSelectCell);
export const AtomicOneOfSelectCellRenderer = withJsonFormsOneOfEnumCellProps(AtomicSelectCell);
