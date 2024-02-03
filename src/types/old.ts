import { Argument } from "classnames";
import React from "react";

export type SuggestStrings<T> = T | (string & {});

export interface FilterStrategy<Key, Value> {
  filter(key: Key, values: Value[]): Value[];
}

export interface HasValue<T> {
  value: T;
}

export interface HasClassName {
  /** Add classes to the root element of the component.
   * Refer to this for possible values: https://github.com/JedWatson/classnames#readme*/
  className?: Argument[] | Argument;
}

// INPUTS ----------------------------------------------------------
export type EventHandler<
  V = string,
  E extends React.SyntheticEvent = React.SyntheticEvent
> = (value: V, event: E) => void;

/** The props on an `<input />` element that we care about */
export interface InputElementProps<E extends Element = HTMLInputElement>
  extends Omit<React.AriaAttributes, "aria-describedby"> {
  readonly placeholder?: string;
  readonly readOnly?: boolean;
  readonly disabled?: boolean;
  readonly required?: boolean;
  readonly name?: string;
  readonly autoFocus?: boolean;
  readonly defaultValue?: string;

  // Events
  // Note that onChange isn't here, because we define a slight wrapper for it
  readonly onClick?: React.MouseEventHandler<E>;
  readonly onKeyDown?: React.KeyboardEventHandler<E>;
  readonly onKeyUp?: React.KeyboardEventHandler<E>;
  readonly onFocus?: React.FocusEventHandler<E>;
  readonly onBlur?: React.FocusEventHandler<E>;
}

/** The additional Props that a component that wraps an `<input />` will have */
export interface InputComponentProps extends HasClassName {
  // Required
  /** Must include a label. Labels are always Sentence case. */
  readonly label: React.ReactNode;

  // Optional
  /** The select size should reflect the size of its content. */
  readonly size?: Sizes;
  /** Only use in very specific circumstances.
   * This hides the label from view, but still allows
   * screen readers to read the label. (A filter dropdown with a
   * clear meaning could potentially be a use case.) */
  readonly hideLabel?: boolean;
  /** Error text should be descriptive and explicit in meaning. */
  readonly error?: React.ReactNode;
  /** For additional information (ex. date format mm/dd/yy) */
  readonly message?: React.ReactNode;
}

export interface NewInputComponentProps extends HasClassName {
  // Required
  /** Must include a label. Labels are always Sentence case. */
  readonly label: React.ReactNode;

  // Optional
  /** The select size should reflect the size of its content. */
  readonly size?: Sizes;
  /** Only use in very specific circumstances.
   * This hides the label from view, but still allows
   * screen readers to read the label. (A filter dropdown with a
   * clear meaning could potentially be a use case.) */
  readonly hideLabel?: boolean;
  /** For additional information (ex. date format mm/dd/yy) */
  readonly message?: React.ReactNode;

  /** Error mesage for the field */
  readonly error?: React.ReactNode;
}

export interface InputProps<
  T,
  E extends Element = HTMLInputElement,
  Event extends React.SyntheticEvent<E> = React.ChangeEvent<E>
> extends InputComponentProps,
    InputElementProps<E> {
  readonly value?: T;
  readonly onChange?: EventHandler<T, Event>;
}

export interface CheckedInputProps<E extends Element = HTMLInputElement>
  extends Omit<InputComponentProps, "hideLabel" | "size">,
    Omit<InputElementProps<E>, "onClick"> {
  readonly checked?: boolean;
  readonly onClick?: EventHandler<boolean, React.MouseEvent<E>>;
  readonly onChange?: EventHandler<boolean, React.ChangeEvent<E>>;
}

export type Booleanish = boolean | "false" | "true";
export type AriaHasPopUp =
  | Booleanish
  | "dialog"
  | "menu"
  | "listbox"
  | "tree"
  | "grid";

export type SortDirection = "ascending" | "descending" | undefined;

export type HTMLInputValueAttribute = string | ReadonlyArray<string> | number;

export type LimitedSizes = "small" | "medium" | "large";
export type Sizes = LimitedSizes | "auto" | "full";

export type HTMLInputTypeAttribute =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";
