import React from "react";
import { AriaSearchFieldProps, useSearchField } from "@react-aria/searchfield";
import { useSearchFieldState } from "react-stately";

import { useRenderProps } from "@hooks";
import useForwardedRef from "@hooks/useForwardedRef";
import {
  AriaProps,
  FieldInputProps,
  FieldStatusProps,
  RenderBaseProps,
} from "../../../types";
import { IconButton } from "../../Buttons/IconButton";
import { ErrorMessage, Input, Label, Message, ComboInput } from "../../Fields";
import { StyledField } from "../../Fields/Field.styles";
import { useTranslations } from "@hooks/useTranslations";

export interface SearchInputProps
  extends AriaProps<AriaSearchFieldProps>,
    Omit<FieldInputProps, "className">,
    RenderBaseProps<FieldStatusProps> {}

/** Essentially the same as the text input, but with an `onSubmit`
 * handler when the user clicks the search button or hits the enter key
 * */
export const SearchInput = React.forwardRef(function SearchInput(
  props: SearchInputProps,
  ref: React.Ref<HTMLInputElement>
) {
  const {
    label,
    error,
    message,
    isDisabled,
    isRequired,
    isReadOnly,
    onSubmit,
  } = props;

  const internalRef = useForwardedRef(ref);
  const searchState = useSearchFieldState(props);

  const {
    labelProps,
    inputProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
  } = useSearchField(props, searchState, internalRef);

  const t = useTranslations();

  const renderProps = useRenderProps({
    ...props,
    componentClassName: "aje-input__search",
    values: { isInvalid, isDisabled, isReadOnly, isRequired },
    selectors: {
      "data-invalid": isInvalid,
      "data-disabled": isDisabled,
      "data-readonly": isReadOnly,
      "data-required": isRequired,
    },
  });

  return (
    <StyledField {...renderProps}>
      {label && <Label {...labelProps}>{label}</Label>}
      {message && <Message {...descriptionProps}>{message}</Message>}
      <ComboInput padding={"left"}>
        <Input {...inputProps} size={undefined} />
        <IconButton
          icon="search"
          variant="ghost"
          onPress={() => onSubmit && onSubmit(searchState.value)}
          aria-label={t("search")}
        />
      </ComboInput>
      {isInvalid && <ErrorMessage {...errorMessageProps}>{error}</ErrorMessage>}
    </StyledField>
  );
});

export default SearchInput;
