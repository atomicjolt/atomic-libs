import React from 'react'
import '../../general.scss'
import './styles.scss'

export interface Props {
  children: React.ReactNode;
  /** Must include a label. Labels are always Sentence case. */
  label: string;
  /** Error text should be descriptive and explicit in meaning. */
  error?: string;
  /** For additional information (ex. date format mm/dd/yy) */
  message?: string;
  /** Only use in very specific circumstances. This hides the label from view, but still allows screen readers to read the label. (A filter dropdown with a clear meaning could potentially be a use case.) */
  hideLabel?: boolean;
  /** The select size should reflect the size of its content. */
  size?: 'small' | 'medium' | 'large' | 'full' | 'auto';
  disabled?: boolean;
  required?: boolean;
}

/** Select Component */
export default function Select({ 
    children,
    size = 'medium', 
    label, 
    error, 
    message, 
    hideLabel = false,
    disabled = false,
    required = false,
  }: Props) {

  const inputID = 'select';
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
      <div className="aj-input__select">
        <select
          id={inputID}
          aria-describedby={error ? errorID : ""}
          disabled={disabled}
          required={required}
        >
          {/* Options need to be added as either children or some other programming wizardry. */}
          {children}
        </select>
      </div>
      {error ?
        <p id={errorID} className="aj-label--error">{error}</p>
        : null
      }
    </div>
  )
}
