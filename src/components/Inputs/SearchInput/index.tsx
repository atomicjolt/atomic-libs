import React from "react";
import { AriaSearchFieldProps, useSearchField } from "react-aria";
import { useSearchFieldState } from "react-stately";

import { useRenderProps, useForwardedRef } from "@/hooks";
import {
  AriaProps,
  FieldInputProps,
  FieldStatusProps,
  RenderBaseProps,
} from "../../../types";
import { IconButton } from "../../Buttons/IconButton";
import { ErrorMessage, Input, Label, Message, ComboInput } from "../../Fields";
import { StyledField } from "../../Fields/Field.styles";

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
      <ComboInput>
        <Input {...inputProps} size={undefined} />
        <IconButton
          icon="search"
          variant="content"
          onPress={() => onSubmit && onSubmit(searchState.value)}
        />
      </ComboInput>
      {isInvalid && <ErrorMessage {...errorMessageProps}>{error}</ErrorMessage>}
    </StyledField>
  );
});

export default SearchInput;
