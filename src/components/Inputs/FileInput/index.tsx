import React from 'react'
import '../../general.scss'
import '../common.scss'
import './styles.scss'

export interface Props {
  /** Labels are always Sentence case. */
  label?: string;
  /** Error text should be descriptive and explicit in meaning. */
  error?: string;
  value?: string;
  readonly?: boolean;
  disabled?: boolean;
  required?: boolean;
}

/** File Input Component */
export default function FileInput({ 
    label = 'Choose a file...', 
    error,  
    value,
    readonly = false,
    disabled = false,
    required = false,
  }: Props) {

  const inputID = 'textInput';
  const errorID = 'errorText';
  let hasError = error ? ' has-error' : '';
  let isDisabled = disabled ? ' is-disabled' : '';

  return (
    <div className={`aj-input--file ${hasError}${isDisabled}`}>
      <input
        id={inputID}
        aria-describedby={error ? errorID : ""}
        type="file"
        value={value}
        readOnly={readonly}
        disabled={disabled}
        required={required}
      />
      <label htmlFor={inputID}>
        {/* File name needs to be inserted here */}
        <span></span>
        <strong>{label}</strong>
      </label>
      {error ?
        <p id={errorID} className="aj-label--error">{error}</p>
        : null
      }
    </div>
  )
}
