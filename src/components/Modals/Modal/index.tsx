import React from 'react'
import '../../general.scss'
import '../common.scss'
import './styles.scss'
import Button from '../../Buttons/Button'

export interface Props {
  /** Must include a title. Titles are always in Title case. */
  title: string;
  content: any;
  /** Should be descriptive instead of yes or no. If you're confirming you want to delete something, Delete is an appropriate string to use. */
  primaryButton?: string;
  /** This will replace 'Cancel' as the negative action. Sometimes you might need it to say 'Close' or something instead. */
  secondaryButton?: string;
}

/** 
 * Modal Component
 * 
 * For when you need a large modal with somewhat complex actions. 
 * */
export default function Modal({ 
    title, 
    content, 
    primaryButton, 
    secondaryButton = 'Cancel',
  }: Props) {

  return (
    <div className="aj-modal-background">
      <div className="aj-modal">
        <div className="aj-modal__top">
          <h2 className="aj-modal__title">{title}</h2>
          <button className="aj-modal__close" aria-label="close modal">
            <i className="material-icons" aria-hidden>close</i>
          </button>
        </div>
        <div className="aj-modal__main">
          {content}
        </div>
        <div className="aj-modal__bottom">
          {secondaryButton ?
            <Button className="secondary" type="button">  
              {secondaryButton}
            </Button>
            : null
          }
          {primaryButton ?
            <Button className="primary" type="button">  
              {primaryButton}
            </Button>
            : null
          }
        </div>
      </div>
    </div>
  )
}
