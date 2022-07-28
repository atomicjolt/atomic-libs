import cn from "classnames";
import React from "react";
import { SharedInputProps } from "../../../types";
import { RadioContextData } from "./context";
import RadioContext from "./context";

export interface Props
  extends Omit<SharedInputProps, "size" | "required" | "readonly"> {
  value: string;
  onChange: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** The name associated with the radio group. */
  name: string;
  children: React.ReactNode;
}

/**
 * Radio Group
 *
 * - For a choice selection of 3-5 options. There may be a few cases where you can use these for more than 5, but it isn't common.
 * - For 2 choices, use a checkbox instead.
 * - For more than 5 options, use a select.
 *
 * Any `<Radio />` element nested under a `<RadioGroup />` will be considered part of that group,
 * do note that it does not need to nested directly under. As such, you can add additional strucuture
 * between the over-lying `<RadioGroup />` and it's `<Radio />`s
 * */
export default function RadioGroup({
  value,
  label,
  message,
  error,
  name,
  onChange,
  children,
  disabled = false,
  hideLabel,
}: Props) {
  const ctx: RadioContextData = {
    onChange: (e) => onChange(e.target.value, e),
    name,
    currentValue: value,
    disabled,
  };

  return (
    <fieldset className="aje-radio-group">
      <legend className={cn("aje-label", { "aje-hidden": hideLabel })}>
        {label}
        {message && <p className="aje-label--message">{message}</p>}
        {error && <p className="aje-label--error">{error}</p>}
      </legend>
      <RadioContext.Provider value={ctx}>{children}</RadioContext.Provider>
    </fieldset>
  );
}

export { default as Radio } from "./Radio";
