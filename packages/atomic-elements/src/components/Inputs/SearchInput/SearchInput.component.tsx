import React from "react";
import { AriaSearchFieldProps } from "@react-aria/searchfield";
import { AriaProps, FieldInputProps, HasVariant } from "../../../types";
import {
  Input,
  Label,
  Message,
  ErrorMessage,
  SearchField,
  ComboInput,
} from "../../Fields";
import { IconButton } from "../../Buttons/IconButton";

type Variants = "default";

export interface SearchInputProps
  extends AriaProps<AriaSearchFieldProps>,
    FieldInputProps,
    HasVariant<Variants> {}

/** SearchInput component. */
export const SearchInput = React.forwardRef(function SearchInput(
  props: SearchInputProps,
  ref: React.Ref<HTMLInputElement>
) {
  const {
    size = "medium",
    variant = "default",
    label,
    message,
    error,
    ...rest
  } = props;

  return (
    <SearchField ref={ref} {...rest}>
      {label && <Label>{label}</Label>}
      {message && <Message>{message}</Message>}
      <ComboInput padding="both">
        <Input size={undefined} />
        <IconButton slot="submit" icon="search" variant="content" />
      </ComboInput>
      {<ErrorMessage>{error}</ErrorMessage>}
    </SearchField>
  );
});

export default SearchInput;
