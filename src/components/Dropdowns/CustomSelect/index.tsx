import React, { useContext, useEffect, useRef, useState } from "react";
import cn from "classnames";
import "../../general.scss";
import "./styles.scss";
import InputLabel from "../../Utility/InputLabel";
import { useBool, useClick, useIds } from "../../../hooks";
import { EventHandler, HasChildren, SharedInputProps } from "../../../types";
import InputError from "../../Utility/InputError";

export interface Props<T> extends SharedInputProps, HasChildren {
  value: T;
  onChange: EventHandler<T, React.MouseEvent<Element>>;
}

interface CustomSelectContext<T> {
  currentValue: T;
  setIntialLabel: (v: React.ReactNode) => void;
  onClick: (
    value: T,
    content: React.ReactNode,
    event: React.MouseEvent<Element>
  ) => void;
}

const Context = React.createContext<CustomSelectContext<any>>(
  {} as CustomSelectContext<any>
);

/**
 * Custom Select
 *
 * https://www.w3.org/TR/wai-aria-practices/examples/combobox/combobox-select-only.html for accessibility implementation.
 * */
function CustomSelect<T>({
  value,
  onChange,
  size = "medium",
  label,
  error,
  message,
  hideLabel = false,
  disabled = false,
  children,
}: Props<T>) {
  const [menuActive, toggleMenu] = useBool(false);
  const [initialContent, setInitialContent] = useState<React.ReactNode>(null);
  const contentRef = useRef<React.ReactNode>(null);
  const [comboId, listBoxId, errorId, labelId] = useIds("custom-dropdown", [
    "combo",
    "list",
    "errors",
    "label",
  ]);

  useClick(() => {
    if (!menuActive) return;
    toggleMenu();
  }, [menuActive]);

  const ctx: CustomSelectContext<T> = {
    currentValue: value,
    setIntialLabel: setInitialContent,
    onClick: (value, content, e) => {
      onChange(value, e);
      contentRef.current = content;
    },
  };

  return (
    <div
      className={cn("aj-dropdown", `is-${size}`, {
        "has-error": error,
        "is-disabled": disabled,
      })}
    >
      <InputLabel
        message={message}
        htmlFor={comboId}
        id={labelId}
        hidden={hideLabel}
      >
        {label}
      </InputLabel>
      <div className="aj-combobox">
        <div
          className="aj-combobox__input"
          aria-controls={listBoxId}
          aria-expanded={menuActive}
          aria-haspopup="listbox"
          aria-labelledby={labelId}
          aria-describedby={error ? errorId : ""}
          id={comboId}
          role="combobox"
          tabIndex={0}
          onClick={toggleMenu}
        >
          <span>
            {contentRef.current ? contentRef.current : initialContent}
          </span>
        </div>
        <ul
          className="aj-combobox__menu"
          role="listbox"
          id={listBoxId}
          aria-labelledby={labelId}
          tabIndex={-1}
        >
          <Context.Provider value={ctx}>{children}</Context.Provider>
        </ul>
      </div>
      <InputError error={error} id={errorId} />
    </div>
  );
}

interface CustomSelectItemProps<T> extends HasChildren {
  value: T;
}

/** An Option in the `CustomSelect` */
CustomSelect.Item = <T,>({ value, children }: CustomSelectItemProps<T>) => {
  const { currentValue, setIntialLabel, onClick } = useContext(Context);

  useEffect(() => {
    if (value === currentValue) {
      setIntialLabel(children);
    }
  }, []);

  return (
    <li
      className={cn("aj-combobox__option", {
        "is-focused": value == currentValue,
      })}
      role="option"
      // id={`${optionId}-${idx}`}
      aria-selected={value == currentValue}
      onClick={(e) => onClick(value, children, e)}
    >
      {children}
    </li>
  );
};

// @ts-ignore
CustomSelect.Item.displayName = "CustomSelect.Item";

/** A `CustomSelect.Item` item with `null` as the value */
CustomSelect.Empty = ({
  children = "-- Select an Option --",
}: {
  children?: React.ReactNode;
}) => {
  return <CustomSelect.Item value={null}>{children}</CustomSelect.Item>;
};

// @ts-ignore
CustomSelect.Empty.displayName = "CustomSelect.Empty";

export default CustomSelect;
