import React from "react";
import '../../general.scss';
import "./styles.scss";
import Spinner from '../../Loaders/Spinner';
interface CommonProps {
  /** What to render within the Button */
  children?: React.ReactNode;
  className?: 'primary' | 'secondary' | 'success' | 'error' | 'inverted';
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

type LoadingProps =
  | { 
    loading?: false; 
    loadingLabel?: never;
    loadingComplete?: never;
  }
  | { 
    loading: true; 
    loadingLabel?: string;
    loadingComplete?: boolean;
  }

export type Props = CommonProps & LoadingProps;

/** Button Component */
export default function Button({ 
    children, 
    type = "button", 
    className, 
    disabled,
    loading,
    loadingLabel = 'loading',
    loadingComplete,
    onClick 
  }: Props) {

  let loadingClass = loading ? ' is-loading' : '';
  let loadingText = loading ? loadingLabel : '';
    
  return (
    <button
      aria-label={loadingText}
      type={type}
      className={`aj-btn--${className}${loadingClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ?
        <Spinner loading={!loadingComplete} />
        : null
      }
      {children}
    </button>
  );
}
