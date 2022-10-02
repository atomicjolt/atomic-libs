import React, { useMemo, useRef, useState } from "react";

import { useBool, useClickOutside } from "../../../hooks";
import { EventHandler } from "../../../types";
import { OptionProps } from "../Option";

type SelectOnChangeHandler<T> = EventHandler<
  T,
  React.MouseEvent<Element> | React.KeyboardEvent<Element>
>;

interface BaseOptions<T, ChildrenProps extends OptionProps<T>> {
  children:
    | React.ReactElement<ChildrenProps>
    | React.ReactElement<ChildrenProps>[];
  searchable: boolean;
  filterOptions: (value: string, options: ChildrenProps[]) => ChildrenProps[];
}

type ValueOptions<T> =
  | {
      value: T | null;
      onChange?: SelectOnChangeHandler<T | null>;
    }
  | {
      value: (T | null)[];
      onChange?: SelectOnChangeHandler<(T | null)[]>;
    };

type UseSelectOptions<T, C extends OptionProps<T>> = BaseOptions<T, C> &
  ValueOptions<T>;

interface UseSelectReturn<T, ChildrenProps extends OptionProps<T>> {
  readonly selectedValues: (T | null)[];
  readonly selectedOption: ChildrenProps;
  readonly selectedIndex: number;
  readonly multiselect: boolean;
  readonly ref: React.RefObject<any>;
  readonly options: ChildrenProps[];
  readonly handleKeyPress: React.KeyboardEventHandler;
  readonly isSelected: (value: T) => boolean;
  readonly isFocused: (value: T) => boolean;
  readonly onChange: SelectOnChangeHandler<T | null>;
  readonly menu: {
    readonly opened: boolean;
    readonly open: () => void;
    readonly close: () => void;
    readonly toggle: () => void;
  };
  readonly search: {
    readonly value: string;
    readonly onChange: React.ChangeEventHandler<HTMLInputElement>;
  };
}

function isMultiSelect<T>(
  value: T | null | (T | null)[]
): value is (T | null)[] {
  return Array.isArray(value);
}

export default function useSelect<T, C extends OptionProps<T>>(
  opts: UseSelectOptions<T, C>
): UseSelectReturn<T, C> {
  // SETUP -------------------------------------

  const { value, children, onChange, searchable, filterOptions } = opts;
  let selectedValues: (T | null)[];
  let multiselect = false;
  if (Array.isArray(value)) {
    selectedValues = value;
    multiselect = true;
  } else {
    selectedValues = [value];
  }

  let options: C[] = React.Children.map(children, (child) => child.props);

  const selectedIndex = options.findIndex((o) =>
    selectedValues.includes(o.value)
  );

  const selectedOption = options[selectedIndex];
  // HOOKS -------------------------------------

  const [search, setSearch] = useState<string>("");

  if (searchable && search) {
    options = filterOptions(search, options);
  }

  const ref = useRef<HTMLDivElement | null>(null);

  const [menuActive, toggleMenu, openMenu, closeMenu] = useBool(false);

  const [focused, setFocused] = useState(selectedIndex || 0);

  useClickOutside(
    ref,
    () => {
      if (menuActive) {
        handleClose();
      }
    },
    { enabled: menuActive }
  );

  // CALLBACKS -------------------------------------
  const isSelected = (value: T) => selectedValues.includes(value);
  const isFocused = (value: T) => value == options[focused].value;

  const handleClose = () => {
    if (focused !== selectedIndex) {
      setFocused(selectedIndex);
    }
    if (!multiselect) closeMenu();
  };

  const onChangeWrapper: SelectOnChangeHandler<T | null> = (v, e) => {
    handleClose();
    if (!onChange) return;

    // TODO: figure out a better way to disciminate between these types
    // rather than just asserting it manually
    if (multiselect) {
      const multiOnChange = onChange as SelectOnChangeHandler<(T | null)[]>;
      if (selectedValues.includes(v)) {
        multiOnChange(
          selectedValues.filter((s) => s !== v),
          e
        );
      } else {
        multiOnChange([...selectedValues, v], e);
      }
    } else {
      const singleOnChange = onChange as SelectOnChangeHandler<T | null>;
      singleOnChange(v, e);
    }
  };

  const handleKeyPress: React.KeyboardEventHandler = (e) => {
    if (e.key === " ") {
      openMenu();
    } else if (e.key === "Escape") {
      if (menuActive) {
        handleClose();
      } else {
        ref.current?.blur();
      }
    } else if (menuActive) {
      switch (e.key) {
        case "ArrowDown":
          setFocused(Math.min(focused + 1, options.length - 1));
          break;
        case "ArrowUp":
          setFocused(Math.max(focused - 1, 0));
          break;
        case "Enter":
          onChangeWrapper(options[focused].value, e);
          handleClose();
        default:
          break;
      }
    }
  };

  const onSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  console.log(search);

  return {
    selectedValues,
    selectedOption,
    selectedIndex,
    multiselect,
    ref,
    options,
    handleKeyPress,
    isFocused,
    isSelected,
    onChange: onChangeWrapper,
    menu: {
      opened: menuActive,
      open: openMenu,
      close: closeMenu,
      toggle: toggleMenu,
    },
    search: {
      value: search,
      onChange: onSearch,
    },
  };
}
