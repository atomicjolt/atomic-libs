import React from 'react'
import '../../general.scss'
import './styles.scss'

export interface Props {
  children: React.ReactNode;
  isExpanded?: boolean;
  inputText?: string;
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

/** Custom Dropdown */
export default function CustomDropdown({ 
    children,
    isExpanded = false,
    inputText,
    size = 'medium', 
    label, 
    error, 
    message, 
    hideLabel = false,
    disabled = false,
  }: Props) {

  const errorID = 'errorText';
  let hasError = error ? ' has-error' : '';
  let isSize = `is-${size}`;
  let isDisabled = disabled ? ' is-disabled' : '';
  let labelHidden = hideLabel ? ' aj-hidden' : '';

  return (
    <div className={`aj-dropdown ${isSize}${hasError}${isDisabled}`}>
      <label className={`aj-label${labelHidden}`} id="comboLabel">
        {label}
        {message ?
          <p className="aj-label--message">{message}</p>
          : null
        }
      </label>
      <div className="aj-combobox">
        <div 
          className="aj-combobox__input"
          aria-controls="listboxID"
          aria-expanded={isExpanded}
          aria-haspopup="listbox"
          aria-labelledby="comboLabel"
          aria-describedby={error ? errorID : ''}
          id="comboID"
          role="combobox"
          tabIndex={0}
        >
          {inputText}
        </div>
        <div
          className="aj-combobox__menu"
          role="listbox"
          id="lisboxID"
          aria-labelledby="comboLabel"
          tabIndex={-1}
        >
          <div role="option" id="op1">{children}</div>
        </div>
      </div>
      {error ?
        <p id={errorID} className="aj-label--error">{error}</p>
        : null
      }
    </div>
  )
}
