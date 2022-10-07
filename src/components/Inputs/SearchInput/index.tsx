import React from "react";
import cn from "classnames";
import { useIds } from "../../../hooks";
import { EventHandler, InputProps } from "../../../types";
import InputError from "../../Utility/InputError";
import Label from "../../Utility/Label";
import MaterialIcon from "../../Utility/MaterialIcon";
import { makeEventHandler } from "../../../utils";

export interface SearchInputProps
  extends Omit<InputProps<string>, "required" | "message"> {
  /** When the user hits enter, or presses the submit button, this event will fire
   * with the current value of the input element. */
  onSubmit?: EventHandler<
    string | undefined,
    React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  >;

  /** Display a button to click on to search, instead of just hitting enter */
  submitButton?: boolean;
}

/** Search Input Component. Accepts a `ref`*/
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
    } = props;

    const [inputId, errorId] = useIds("SearchInput", ["input", "error"]);

    return (
      <form
        className={cn("aje-input", `is-${size}`, className, {
          "is-disabled": disabled,
          "has-error": error,
        })}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit && onSubmit(value, e);
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
      </form>
    );
  }
);

export default SearchInput;
