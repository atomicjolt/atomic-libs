import React from 'react'
import './styles.scss'

export interface Props {
  /** Must include a label. Labels are always Sentence case. */
  label: string;
  error?: string;
  /** For additional information (ex. date format mm/dd/yy) */
  message?: string;
  placeholder?: string;
}

/** Text Input Component */
export default function TextInput({ label, error, message, placeholder }: Props) {
  const inputID = 'textInput';
  const errorID = 'errorText';

  return (
    <div className={`aj-input${error ? ' has-error' : ''}`}>
      <label className="aj-label" htmlFor={inputID}>
        {label}
        {message ?
          <p className="aj-input__message">{message}</p>
          : null
        }
      </label>
      <input
        id={inputID}
        aria-describedby={error ? errorID : ""}
        type="text"
        placeholder={placeholder}
      />
      {error ?
        <p id={errorID} className="aj-input__error">{error}</p>
        : null
      }
    </div>
  )
}
