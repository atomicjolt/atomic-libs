import React, { FormEvent } from "react";
import cn from "classnames";
import { useIds } from "../../../hooks";
import { EventHandler, InputProps } from "../../../types";
import InputError from "../../Utility/InputError";
import Label from "../../Utility/Label";
import MaterialIcon from "../../Icons/MaterialIcon";
import { makeEventHandler } from "../../../utils";
import { InputWrapper } from "../Inputs.styles";
import { StyledSearchInput } from "./SearchInput.styles";

export interface SearchInputProps extends Omit<InputProps<string>, "required"> {
  /** When the user hits enter, or presses the submit button, this event will fire
   * with the current value of the input element. */
  onSubmit?: EventHandler<
    string | undefined,
    React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  >;

  /** Display a button to click on to search, instead of just hitting enter */
  submitButton?: boolean;
}

/** Search Input Component. Accepts a `ref`
 *
 * Essentially the same as the `TextInput` component, but
 * has an `onSumbit()` handler that gets called when the user
 * hits enter
 */
const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  (props, ref) => {
    const {
      value,
      size = "medium",
      label,
      placeholder,
      hideLabel = false,
      submitButton = false,
      disabled = false,
      error,
      onSubmit,
      onChange,
      className,
      message,
    } = props;

    const [inputId, errorId] = useIds("SearchInput", ["input", "error"]);

    return (
      <InputWrapper
        as="form"
        className={cn("aje-input", className)}
        size={size}
        error={error}
        disabled={disabled}
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          onSubmit && onSubmit(value, e);
        }}
      >
        <Label hidden={hideLabel} htmlFor={inputId} message={message}>
          {label}
        </Label>
        <StyledSearchInput
          id={inputId}
          type="search"
          role="search"
          placeholder={placeholder}
          value={value}
          onChange={makeEventHandler(onChange)}
          disabled={disabled}
          ref={ref}
        />
        {submitButton && (
          <button type="submit" aria-label="submit search">
            <MaterialIcon icon="search" />
          </button>
        )}
        <InputError error={error} id={errorId} />
      </InputWrapper>
    );
  }
);

export default SearchInput;
