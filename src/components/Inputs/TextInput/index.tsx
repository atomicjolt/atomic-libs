import React from "react";
import cn from "classnames";
import "../../general.scss";
import "../common.scss";
import "./styles.scss";
import InputLabel from "../../Utility/InputLabel";
import { SharedInputProps } from "../../../types";
import { useIds } from "../../../hooks";
import InputError from "../../Utility/InputError";

export interface Props extends SharedInputProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly type?: "text" | "email" | "tel" | "search";
  readonly placeholder?: string;
}

/** TextInput Component. Accepts a `ref` that will be fowareded to the internal input element */
const TextInput = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      value,
      onChange,
      type = "text",
      size = "medium",
      label,
      error,
      message,
      placeholder,
      hideLabel = false,
      readonly = false,
      disabled = false,
      required = false,
    },
    ref
  ) => {
    const [inputId, errorId] = useIds(`text-input`, ["input", "error"]);

    return (
      <div
        className={cn("aj-input", `is-${size}`, {
          "has-error": error,
          "is-disabled": disabled,
        })}
      >
        <InputLabel message={message} hidden={hideLabel} htmlFor={inputId}>
          {label}
        </InputLabel>
        <input
          ref={ref}
          id={inputId}
          aria-describedby={error ? errorId : ""}
          type={type}
          placeholder={placeholder}
          value={value}
          readOnly={readonly}
          disabled={disabled}
          required={required}
          onChange={(e) => onChange && onChange(e.target.value)}
        />

        <InputError error={error} id={errorId} />
      </div>
    );
  }
);

export default TextInput;
