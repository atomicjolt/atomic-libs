import React from 'react'
import '../../general.scss'
import '../common.scss'
import './styles.scss'

export interface Props {
  /** Must include a label. Labels are always Sentence case. */
  label: string;
  /** Placeholders aren't common, you should use the message instead for most placeholders so the user doesn't lose the information after entering text in the input. */
  placeholder?: string;
  /** This hides the label from view, but still allows screen readers to read the label. (This might have 'Search...' as a placeholder and no room for a full label so you can hide it.) */
  hideLabel?: boolean;
  /** Adds a button to submit the search. Replaces hitting enter in the input to submit. */
  submitButton?: boolean;
  /** The input size should reflect the expected size of its content. */
  size?: 'small' | 'medium' | 'large' | 'auto' | 'full';
  value?: string;
  disabled?: boolean;
}

/** Search Input Component */
export default function SearchInput({ 
    size = 'medium', 
    label, 
    placeholder, 
    hideLabel = false,
    submitButton,
    value,
    disabled = false,
  }: Props) {

  const inputID = 'searchInput';
  /* Add a space before the added class rather than inside the className attr on the tag. Looks cleaner. */
  let disabledClass = disabled ? ' is-disabled' : '';
  let hiddenClass = hideLabel ? ' aj-hidden' : '';

  return (
    <form className={`aj-input is-${size}${disabledClass}`}>
      <label className={`aj-label${hiddenClass}`} htmlFor={inputID}>
        {label}
      </label>
      <input
        id={inputID}
        type="search"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
      />
      {submitButton ?
        <button type="submit" aria-label="submit search">
          <i className="material-icons">search</i>
        </button>
        : null
      }
    </form>
  )
}
