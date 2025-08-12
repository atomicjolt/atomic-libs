import React from "react";
import { AriaSearchFieldProps } from "@react-aria/searchfield";
import { AriaProps, FieldInputProps } from "../../../types";
import {
  Input,
  Label,
  Message,
  ErrorMessage,
  SearchField,
  ComboInput,
} from "../../Fields";
import { IconButton } from "../../Buttons/IconButton";
import { useTranslations } from "@hooks/useTranslations";

export interface SearchInputProps
  extends AriaProps<AriaSearchFieldProps>,
    FieldInputProps {}

/** SearchInput component. */
export const SearchInput = React.forwardRef(function SearchInput(
  props: SearchInputProps,
  ref: React.Ref<HTMLInputElement>
) {
  const { size = "medium", label, message, error, ...rest } = props;

  const t = useTranslations();

  return (
    <SearchField {...rest} size={size}>
      {label && <Label>{label}</Label>}
      {message && <Message>{message}</Message>}
      <ComboInput padding="both">
        <Input ref={ref} size={undefined} />
        <IconButton
          slot="submit"
          icon="search"
          variant="content"
          aria-label={t("search")}
        />
      </ComboInput>
      <ErrorMessage>{error}</ErrorMessage>
    </SearchField>
  );
});

export default SearchInput;
