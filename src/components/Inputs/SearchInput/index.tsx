import React, { useState } from "react";
import cn from "classnames";
import { useIds } from "../../../hooks";
import { EventHandler, SharedInputProps } from "../../../types";
import InputError from "../../Utility/InputError";
import Label from "../../Utility/Label";
import MaterialIcon from "../../Utility/MaterialIcon";

export interface SearchInputProps
  extends Omit<SharedInputProps, "required" | "message"> {
  /** When the user hits enter, or presses the submit button, this event will fire
   * with the current value of the input element. */
  onSubmit?: EventHandler<
    string,
    React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  >;

  /** Callback whenever the content of the input changes */
  onChange?: EventHandler<string, React.ChangeEvent<HTMLInputElement>>;
  /** Display a button to click on to search, instead of just hitting enter */
  submitButton?: boolean;
}

/** Search Input Component. Accepts a `ref`*/
const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      size = "medium",
      label,
      placeholder,
      hideLabel = false,
      submitButton = false,
      disabled = false,
      error,
      onSubmit,
      onChange,
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState("");
    const [inputId, errorId] = useIds("SearchInput", ["input", "error"]);

    return (
      <form
        className={cn("aje-input", `is-${size}`, {
          "is-disabled": disabled,
          "has-error": error,
        })}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit && onSubmit(inputValue, e);
        }}
      >
        <Label hidden={hideLabel} htmlFor={inputId}>
          {label}
        </Label>
        <input
          id={inputId}
          type="search"
          role="search"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            onChange && onChange(e.target.value, e);
          }}
          disabled={disabled}
          ref={ref}
        />
        {submitButton && (
          <button type="submit" aria-label="submit search">
            <MaterialIcon icon="search" />
          </button>
        )}
        <InputError error={error} id={errorId} />
      </form>
    );
  }
);

export default SearchInput;
