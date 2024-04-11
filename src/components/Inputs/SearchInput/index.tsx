import React from "react";
import { AriaProps, FieldInputProps } from "../../../types";
import useForwardedRef from "../../../hooks/useForwardedRef";
import { AriaSearchFieldProps, useSearchField } from "react-aria";
import { useSearchFieldState } from "react-stately";
import IconButton from "../../Buttons/IconButton";
import {
  ErrorMessage,
  Input,
  Label,
  Message,
  VirtualInput,
} from "../../Atoms/Field";
import { StyledField } from "../../Atoms/Field/Field.styles";
import classNames from "classnames";

export interface SearchInputProps
  extends AriaProps<AriaSearchFieldProps>,
    FieldInputProps {}

/** Essentially the same as the text input, but with an `onSubmit`
 * handler when the user clicks the search button or hits the enter key
 * */
export const SearchInput = React.forwardRef(function SearchInput(
  props: SearchInputProps,
  ref: React.Ref<HTMLInputElement>
) {
  const {
    label,
    size = "medium",
    error,
    message,
    className,
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

  return (
    <StyledField
      className={classNames(`aje-input__search`, className)}
      size={size}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
    >
      {label && <Label {...labelProps}>{label}</Label>}
      {message && <Message {...descriptionProps}>{message}</Message>}
      <VirtualInput>
        <Input {...inputProps} />
        <IconButton
          icon="search"
          variant="content"
          onPress={() => onSubmit && onSubmit(searchState.value)}
        />
      </VirtualInput>
      {isInvalid && <ErrorMessage {...errorMessageProps}>{error}</ErrorMessage>}
    </StyledField>
  );
});

export default SearchInput;
