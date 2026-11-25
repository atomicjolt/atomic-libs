import { SearchInput } from "@atomicjolt/atomic-elements";
import type { SearchInputProps } from "@atomicjolt/atomic-elements";
import {
  FormInputProps,
  LengthValdiators,
  PatternValidators,
} from "../../types";
import { useFormField } from "../../hooks/useFormField";

export interface FormSearchInputProps
  extends FormInputProps<SearchInputProps, SearchInputProps["value"]>,
    LengthValdiators,
    PatternValidators {}

export function FormSearchInput(props: FormSearchInputProps) {
  const { fieldProps, inputProps, ref } = useFormField<
    SearchInputProps,
    SearchInputProps["value"]
  >(props);

  return <SearchInput {...fieldProps} {...inputProps} ref={ref} />;
}
