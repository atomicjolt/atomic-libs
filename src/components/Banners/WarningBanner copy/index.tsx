import React from 'react'
import '../../general.scss'
import './styles.scss'

export interface Props {
  children?: React.ReactNode;
}

/** Warning Banner Component */
export default function WarningBanner({ children }: Props) {
  return (
    <div className="aj-banner--warning">
      <i className="material-icons" aria-hidden>warning</i>
      <div className="aj-banner__main">
        {children}
      </div>
      <button className="aj-banner__dismiss" aria-label="dismiss warning">
        <i className="material-icons" aria-hidden>close</i>
      </button>
    </div>
  )
}
