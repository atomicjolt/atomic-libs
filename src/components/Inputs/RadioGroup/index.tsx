import React from "react";
import "../../general.scss";
import "./styles.scss";
import Radio, { Props as RadioProps } from "../Radio";

export interface Props {
  /** Must include a label. Labels are always Sentence case. */
  label: string;
  /** For additional information (ex. date format mm/dd/yy) */
  message?: string;
  /** Error text should be descriptive and explicit in meaning. */
  error?: string;
  /** The name associated with the group. */
  name: string;
  /**[Data for each individual radio button see](/?path=/docs/inputs-radio--default) */
  options: Omit<RadioProps, "name">[];
}

/**
 * Radio Group
 *
 * For a choice selection of 3-5 options. There may be a few cases where you can use these for more than 5, but it isn't common.
 *
 * For 2 choices, use a checkbox instead.
 *
 * For more than 5 options, use a select.
 * */
export default function RadioGroup({
  label,
  message,
  error,
  options,
  name,
}: Props) {
  const radioName = "radio";

  return (
    <fieldset className="aj-radio-group">
      <legend className="aj-label">
        {label}
        {message ? <p className="aj-label--message">{message}</p> : null}
        {error ? <p className="aj-label--error">{error}</p> : null}
      </legend>
      {options.map((o) => (
        <Radio {...o} name={name} />
      ))}
    </fieldset>
  );
}
