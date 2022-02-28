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
  /** The input size should reflect the expected size of its content. */
  size?: 'small' | 'medium' | 'large' | 'auto' | 'full';
  min?: string;
  max?: string;
  value?: string;
  readonly?: boolean;
  disabled?: boolean;
  required?: boolean;
}

/** Number Input Component */
export default function NumberInput({ 
    label, 
    error, 
    message, 
    size = 'small',
    min,
    max,
    value,
    readonly = false,
    disabled = false,
    required = false,
  }: Props) {

  const inputID = 'numberInput';
  const errorID = 'errorText';
  let hasError = error ? ' has-error' : '';
  let isSize = `is-${size}`;
  let isDisabled = disabled ? ' is-disabled' : '';

  return (
    <div className={`aj-input ${isSize}${hasError}${isDisabled}`}>
      <label className="aj-label" htmlFor={inputID}>
        {label}
        {message ?
          <p className="aj-label--message">{message}</p>
          : null
        }
      </label>
      <input
        id={inputID}
        aria-describedby={error ? errorID : ""}
        type="number"
        min={min}
        max={max}
        value={value}
        readOnly={readonly}
        disabled={disabled}
        required={required}
      />
      {error ?
        <p id={errorID} className="aj-label--error">{error}</p>
        : null
      }
    </div>
  )
}
