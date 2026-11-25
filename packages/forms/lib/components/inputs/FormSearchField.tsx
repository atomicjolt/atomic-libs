import { SearchField } from "@atomicjolt/atomic-elements";
import type { SearchFieldProps } from "@atomicjolt/atomic-elements";
import {
  FormInputProps,
  LengthValdiators,
  PatternValidators,
} from "../../types";
import { useFormField } from "../../hooks/useFormField";

export interface FormSearchFieldProps
  extends FormInputProps<SearchFieldProps, SearchFieldProps["value"]>,
    LengthValdiators,
    PatternValidators {}

export function FormSearchField(props: FormSearchFieldProps) {
  const { fieldProps, inputProps } = useFormField<
    SearchFieldProps,
    SearchFieldProps["value"]
  >(props);

  return <SearchField {...fieldProps} {...inputProps} />;
}
