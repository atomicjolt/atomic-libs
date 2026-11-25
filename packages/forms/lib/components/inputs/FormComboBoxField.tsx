import { ComboBoxField } from "@atomicjolt/atomic-elements";
import type { Key, ComboBoxFieldProps } from "@atomicjolt/atomic-elements";
import { FormInputProps } from "../../types";
import { useFormField } from "../../hooks/useFormField";
import { useMemo } from "react";

export interface FormComboBoxFieldProps<T extends object>
  extends FormInputProps<
    ComboBoxFieldProps<T>,
    ComboBoxFieldProps<T>["selectedKey"]
  > {}

/** Stores the selected `Key` (or `null`). With `allowsCustomValue`, stores
 * the input text instead, like `Form.ComboBox`. */
export function FormComboBoxField<T extends object>(
  props: FormComboBoxFieldProps<T>
) {
  const { allowsCustomValue, onSelectionChange } = props;
  const {
    fieldProps,
    inputProps: { value, onChange },
  } = useFormField<ComboBoxFieldProps<T>, ComboBoxFieldProps<T>["selectedKey"]>(
    {
      ...props,
      defaultValue: props.defaultSelectedKey,
    }
  );

  const inputProps = useMemo(() => {
    if (allowsCustomValue) {
      return {
        inputValue: (value ?? "") as string,
        onInputChange: onChange,
        onSelectionChange: (key: Key | null) => {
          if (key) {
            onChange(key);
            onSelectionChange?.(key);
          }
        },
      };
    } else {
      return {
        selectedKey: value ?? null,
        onSelectionChange: onChange,
      };
    }
  }, [allowsCustomValue, value, onChange, onSelectionChange]);

  return <ComboBoxField {...fieldProps} {...inputProps} />;
}
