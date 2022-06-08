import cn from "classnames";
import React, { ChangeEvent } from "react";
import { useIds } from "../../../hooks";
import { ControlledInput, SharedInputProps } from "../../../types";
import { makeEventHandler } from "../../../utils";
import "../../general.scss";
import InputError from "../../Utility/InputError";
import Label from "../../Utility/Label";
import "../common.scss";
import "./styles.scss";

export interface Props
  extends Omit<SharedInputProps, "size">,
    ControlledInput<string, HTMLTextAreaElement> {
  size?: "small" | "medium" | "large";
  resize?: boolean;
}

/** Textarea Component. Accepts a `ref` */
const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      value,
      onChange,
      size = "small",
      resize = true,
      label,
      error,
      message,
      placeholder,
      readonly = false,
      disabled = false,
      required = false,
      hideLabel = false,
    },
    ref
  ) => {
    const [inputId, errorId] = useIds("textarea", ["textarea", "error"]);

    return (
      <div
        className={cn("aj-input", `is-${size}`, {
          "can-resize": resize,
          "has-error": error,
          "is-disabled": disabled,
        })}
      >
        <Label message={message} hidden={hideLabel} htmlFor={inputId}>
          {label}
        </Label>
        <textarea
          id={inputId}
          ref={ref}
          aria-describedby={error ? errorId : ""}
          placeholder={placeholder}
          value={value}
          readOnly={readonly}
          disabled={disabled}
          required={required}
          onChange={makeEventHandler(onChange)}
        />
        <InputError error={error} id={errorId} />
      </div>
    );
  }
);

export default Textarea;
