import React from "react";
import '../../general.scss';
import "./styles.scss";
interface CommonProps {
  /** What to render within the Button */
  children?: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

type ClassNameProps =
  | { 
    className?: 'primary' | 'secondary'; 
    icon?: string; 
    ariaLabel?: never;
  }
  | { 
    className: 'icon'; 
    icon: string;
    ariaLabel: string;
  }

type LoadingProps =
  | { 
    loading?: false; 
    loadingLabel?: never;
  }
  | { 
    loading: true; 
    loadingLabel?: string;
  }

type Props = 
  CommonProps & 
  ClassNameProps & 
  LoadingProps;

/** Button Component */
export default function Button({ 
    children, 
    type = "button", 
    className = "primary", 
    icon,
    ariaLabel, 
    disabled = false,
    loading,
    loadingLabel = 'loading',
    onClick 
  }: Props) {

  let isLoading = loading ? ' is-loading' : '';
  let loadingText = loading ? loadingLabel : '';
    
  return (
    <button
      aria-label={`${ariaLabel}${loadingText}`}
      type={type}
      className={`aj-btn--${className}${isLoading}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon ?
        <i className="material-icons" aria-hidden>{icon}</i>
        : null
      }
      {children}
    </button>
  );
}
