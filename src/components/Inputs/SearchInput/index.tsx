import React, { useState } from "react";
import cn from "classnames";
import { useIds } from "../../../hooks";
import { EventHandler, SharedInputProps } from "../../../types";
import InputError from "../../Utility/InputError";
import Label from "../../Utility/Label";
import MaterialIcon from "../../Utility/MaterialIcon";

export interface Props extends SharedInputProps {
  /** When the user hits enter, or presses the submit button, this event will fire
   * with the current value of the input element. */
  onSubmit: EventHandler<
    string,
    React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  >;
  /** Display a button to click on to search, instead of just hitting enter */
  submitButton?: boolean;
}

/** Search Input Component. Accepts a `ref`*/
const SearchInput = React.forwardRef<HTMLInputElement, Props>(
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
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState("");
    const [inputId, errorId] = useIds("search", ["input", "error"]);

    return (
      <form
        className={cn("aje-input", `is-${size}`, {
          "is-disabled": disabled,
          "has-error": error,
        })}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(inputValue, e);
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
          onChange={(e) => setInputValue(e.target.value)}
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
