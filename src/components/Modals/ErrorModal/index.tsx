import React from 'react'
import '../../general.scss'
import '../common.scss'
import './styles.scss'
import Button from '../../Buttons/Button'

export interface Props {
  /** Must include a title. Titles are always in Title case. */
  title: string;
  content: any;
  errorButton?: string;
}

/** 
 * Confirmation Modal Component
 * 
 * For when you need a small modal to confirm an action, show a loading/exporting/etc process, or other small things that don't require a large modal. 
 * */
export default function ConfirmationModal({ 
    title, 
    content, 
    errorButton = 'Close',
  }: Props) {

  return (
    <div className="aj-modal-background">
      <div className="aj-modal--error">
        <div className="aj-modal__top">
          <i className="material-icons">error</i>
          <h2 className="aj-modal__title">{title}</h2>
        </div>
        <div className="aj-modal__main">
          <p>{content}</p>
        </div>
        <div className="aj-modal__bottom">
          {errorButton ?
            <Button className="error" type="button">  
              {errorButton}
            </Button>
            : null
          }
        </div>
      </div>
    </div>
  )
}
