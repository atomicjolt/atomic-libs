import React, { useState } from "react";
import cn from "classnames";
import { useVariantClass } from "../../../hooks";
import { AriaProps, FieldBaseProps, HasVariant } from "../../../types";
import { InputWrapper } from "../Inputs.styles";
import useForwardedRef from "../../../hooks/useForwardedRef";
import { AriaSearchFieldProps, useSearchField } from "react-aria";
import { FieldWrapper } from "../../Utility/FieldWrapper";
import { useSearchFieldState } from "react-stately";
import { ActualSearchInput, SearchInputWrapper } from "./SearchInput.styles";
import IconButton from "../../Buttons/IconButton";

type Variants = "default" | "floating";

export interface SearchInputProps
  extends AriaProps<AriaSearchFieldProps>,
    FieldBaseProps,
    HasVariant<Variants> {}

/** Essentially the same as the text input, but with an `onSubmit` handler*/
const SearchInput = React.forwardRef(
  (props: SearchInputProps, ref: React.Ref<HTMLInputElement>) => {
    const {
      type = "text",
      label,
      hideLabel,
      size = "medium",
      error,
      message,
      variant = "default",
      className,
      isDisabled,
      isRequired,
      onSubmit,
    } = props;

    const internalRef = useForwardedRef(ref);
    const searchState = useSearchFieldState(props);
    const [focused, setFocused] = useState(false);

    const {
      labelProps,
      inputProps,
      descriptionProps,
      errorMessageProps,
      isInvalid,
    } = useSearchField(props, searchState, internalRef);

    const variantClassName = useVariantClass("aje-input", variant);

    return (
      <InputWrapper
        className={cn("aje-input__search", variantClassName, className, {
          "float-label": inputProps.value || focused,
        })}
        size={size}
        disabled={isDisabled}
        required={isRequired}
        error={isInvalid}
      >
        <FieldWrapper
          label={label}
          labelProps={labelProps}
          message={message}
          messageProps={descriptionProps}
          error={error}
          errorProps={errorMessageProps}
          hideLabel={hideLabel}
          floating={variant === "floating"}
        >
          <SearchInputWrapper>
            <ActualSearchInput
              ref={internalRef}
              type={type}
              {...inputProps}
              onFocus={(e) => {
                setFocused(true);
                inputProps.onFocus && inputProps.onFocus(e);
              }}
              onBlur={(e) => {
                setFocused(false);
                inputProps.onBlur && inputProps.onBlur(e);
              }}
            />
            <IconButton
              icon="search"
              variant="content"
              onPress={() => onSubmit && onSubmit(searchState.value)}
            />
          </SearchInputWrapper>
        </FieldWrapper>
      </InputWrapper>
    );
  }
);

export default SearchInput;
