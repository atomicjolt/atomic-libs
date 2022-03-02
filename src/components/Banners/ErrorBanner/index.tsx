import React from 'react'
import '../../general.scss'
import './styles.scss'

export interface Props {
  children?: React.ReactNode;
}

/** Error Banner Component */
export default function ErrorBanner({ children }: Props) {
  return (
    <div className="aj-banner--error">
      <i className="material-icons" aria-hidden>error</i>
      <div className="aj-banner__main">
        {children}
      </div>
      <button className="aj-banner__dismiss" aria-label="dismiss error">
        <i className="material-icons" aria-hidden>close</i>
      </button>
    </div>
  )
}
