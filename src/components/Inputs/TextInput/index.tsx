import React from 'react'
import '../../general.scss'
import '../common.scss'
import './styles.scss'

export interface Props {
  type?: 'text' | 'password' | 'email' | 'tel';
  /** Must include a label. Labels are always Sentence case. */
  label: string;
  /** Error text should be descriptive and explicit in meaning. */
  error?: string;
  /** For additional information (ex. date format mm/dd/yy) */
  message?: string;
  /** Placeholders aren't common, you should use the message instead for most placeholders so the user doesn't lose the information after entering text in the input. */
  placeholder?: string;
  /** Only use in very specific circumstances. This hides the label from view, but still allows screen readers to read the label. (A search input might have 'Search...' as a placeholder and no room for a full label so you can hide it.) */
  hideLabel?: boolean;
  /** The input size should reflect the expected size of its content. */
  size?: 'small' | 'medium' | 'large' | 'auto' | 'full';
  value?: string;
  readonly?: boolean;
  disabled?: boolean;
  required?: boolean;
}

/** Text Input Component */
export default function TextInput({ 
    type = 'text',
    size = 'medium', 
    label, 
    error, 
    message, 
    placeholder, 
    hideLabel = false,
    value,
    readonly = false,
    disabled = false,
    required = false,
  }: Props) {

  const inputID = 'textInput';
  const errorID = 'errorText';
  let hasError = error ? ' has-error' : '';
  let isSize = `is-${size}`;
  let isDisabled = disabled ? ' is-disabled' : '';
  let labelHidden = hideLabel ? ' aj-hidden' : '';

  return (
    <div className={`aj-input ${isSize}${hasError}${isDisabled}`}>
      <label className={`aj-label${labelHidden}`} htmlFor={inputID}>
        {label}
        {message ?
          <p className="aj-label--message">{message}</p>
          : null
        }
      </label>
      <input
        id={inputID}
        aria-describedby={error ? errorID : ""}
        type={type}
        placeholder={placeholder}
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
