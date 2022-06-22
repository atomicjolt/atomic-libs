import { useContext } from "react";
import { useIds } from "../../../hooks";
import RadioContext from "./context";
import "./styles.scss";

export interface RadioProps {
  value: string;
  children: React.ReactNode;
  disabled?: boolean;
  message?: string;
  error?: string;
}

/** Radio Elements, must be a descendant of a `<RadioGroup>` */
export default function Radio({
  value,
  children,
  disabled,
  message,
  error,
}: RadioProps) {
  const [inputId] = useIds(`radio`, ["input"]);

  const {
    currentValue,
    onChange,
    name,
    disabled: parentDisabled,
  } = useContext(RadioContext);

  return (
    <label className="aj-radio" htmlFor={inputId}>
      <input
        id={inputId}
        type="radio"
        name={name}
        checked={value == currentValue}
        disabled={disabled || parentDisabled}
        value={value}
        onChange={onChange}
      />
      <span className="aj-checkbox__label">
        {children}
        {message && <p className="aj-label--message">{message}</p>}
        {error && <p className="aj-label--error">{error}</p>}
      </span>
    </label>
  );
}
