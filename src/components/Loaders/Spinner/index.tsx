import React from 'react'
import '../../general.scss'
import './styles.scss'

/** Spinner Component */
export default function Spinner() {

  return (
    <div className="aj-spinner">
      <svg className="circular-loader" viewBox="25 25 50 50">
        <circle className="loader-path" cx="50" cy="50" r="20" fill="none"></circle>
      </svg>
    </div>
  )
}
