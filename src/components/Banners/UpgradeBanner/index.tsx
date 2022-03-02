import React from 'react'
import '../../general.scss'
import './styles.scss'
import Button from '../../Buttons/Button'

export interface Props {
  time: string;
  app: 'search' | 'assessments' | 'polls' | 'journals' | 'discussions';
}

/** Upgrade Banner Component */
export default function UpgradeBanner({ time, app }: Props) {
  return (
    <div className="aj-banner--upgrade">
      <i className="material-icons" aria-hidden>new_releases</i>
      <div className="aj-banner__main">
        Your trial expires in {time}. Upgrade now to adopt Atomic {app} in your Canvas.
      </div>
      <Button className="inverted">Upgrade Now</Button>
    </div>
  )
}
