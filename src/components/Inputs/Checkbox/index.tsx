import React from 'react'
import '../../general.scss'
import '../common.scss'
import './styles.scss'

export interface Props {
  /** Must include a label. Labels are always Sentence case. */
  label: string;
  /** Error text should be descriptive and explicit in meaning. */
  error?: string;
  /** For additional information (ex. date format mm/dd/yy) */
  message?: string;
  checked?: boolean;
  disabled?: boolean;
}

/** Checkbox Component */
export default function Checkbox({ 
    label, 
    error, 
    message, 
    checked,
    disabled = false,
  }: Props) {

  const inputID = 'checkbox';
  let hasError = error ? ' has-error' : '';

  return (
    <label className={`aj-checkbox ${hasError}`} htmlFor={inputID}>
      <input
        id={inputID}
        type="checkbox"
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
