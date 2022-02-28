import React from 'react'
import '../../general.scss'
import '../common.scss'
import './styles.scss'

export interface Props {
  /** Radio inputs are never alone, so giving them a name connects them to their related radio inputs as a radio group. */
  name: string;
  /** Must include a label. Labels are always Sentence case. */
  label: string;
  /** Error text should be descriptive and explicit in meaning. */
  error?: string;
  /** For additional information (ex. date format mm/dd/yy) */
  message?: string;
  checked?: boolean;
  disabled?: boolean;
}

/** 
 * Radio Component 
 * 
 * For a choice selection of 3-5 options. There may be a few cases where you can use these for more than 5, but it isn't common.
 * 
 * For 2 choices, use a checkbox instead.
 * 
 * For more than 5 options, use a select.
 * */
export default function Radio({ 
    name,
    label, 
    error, 
    message, 
    checked,
    disabled = false,
  }: Props) {

  const inputID = 'radio';
  let hasError = error ? ' has-error' : '';

  return (
    <label className={`aj-radio ${hasError}`} htmlFor={inputID}>
      <input
        id={inputID}
        type="radio"
        name={name}
        checked={checked}
        disabled={disabled}
      />
      <span className="aj-checkbox__label">
        {label}
        {message ?
          <p className="aj-label--message">{message}</p>
          : null
        }
        {error ?
          <p className="aj-label--error">{error}</p>
          : null
        }
      </span>
    </label>
  )
}
