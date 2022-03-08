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

/** Search Input Component */
export default function SearchInput({ 
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
  /* Add a space before the added class rather than inside the className attr on the tag. Looks cleaner. */
  let errorClass = error ? ' has-error' : '';
  let disabledClass = disabled ? ' is-disabled' : '';
  let hiddenClass = hideLabel ? ' aj-hidden' : '';

  return (
    <div className={`aj-input is-${size}${errorClass}${disabledClass}`}>
      <label className={`aj-label${hiddenClass}`} htmlFor={inputID}>
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
