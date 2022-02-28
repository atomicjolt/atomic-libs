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
  /** Placeholders aren't common, you should use the message instead for most placeholders so the user doesn't lose the information after entering text in the input. */
  placeholder?: string;
  /** The input size should reflect the expected size of its content. */
  height?: 'small' | 'medium' | 'large';
  resize?: boolean;
  value?: string;
  readonly?: boolean;
  disabled?: boolean;
  required?: boolean;
}

/** Textarea Component */
export default function Textarea({ 
    height = 'small', 
    resize = true,
    label, 
    error, 
    message, 
    placeholder, 
    value,
    readonly = false,
    disabled = false,
    required = false,
  }: Props) {

  const inputID = 'textarea';
  const errorID = 'errorText';
  let hasError = error ? ' has-error' : '';
  let isHeight = `is-${height}`;
  let isDisabled = disabled ? ' is-disabled' : '';
  let canResize = resize ? ' can-resize' : '';

  return (
    <div className={`aj-input ${isHeight}${canResize}${hasError}${isDisabled}`}>
      <label className="aj-label" htmlFor={inputID}>
        {label}
        {message ?
          <p className="aj-label--message">{message}</p>
          : null
        }
      </label>
      <textarea
        id={inputID}
        aria-describedby={error ? errorID : ""}
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
