import React, { useRef, useState } from "react";

import { useBool, useClickOutside } from "../../../hooks";
import { EventHandler, FilterFunction } from "../../../types";
import { OptionProps } from "../Option";

// TYPES --------------------------------------------------------
type SelectOnChangeHandler<T> = EventHandler<
  T,
  React.MouseEvent<Element> | React.KeyboardEvent<Element>
>;

interface UseSelectOptions<T, ChildrenProps extends OptionProps<T>> {
  readonly children:
    | React.ReactElement<ChildrenProps>
    | React.ReactElement<ChildrenProps>[];
  readonly searchable: boolean;
  readonly filterOptions: FilterFunction<ChildrenProps>;
  readonly value: T | T[];
  readonly onChange?: SelectOnChangeHandler<T> | SelectOnChangeHandler<T[]>;
}

interface UseSelectMenu {
  readonly opened: boolean;
  readonly open: () => void;
  readonly close: () => void;
  readonly toggle: () => void;
}

interface UseSelectSearch {
  readonly value: string;
  readonly onChange: React.ChangeEventHandler<HTMLInputElement>;
}

interface UseSelectReturn<T, ChildrenProps extends OptionProps<T>> {
  readonly selectedValues: T[];
  readonly selectedOption: ChildrenProps;
  readonly selectedIndex: number;
  readonly multiselect: boolean;
  readonly ref: React.RefObject<any>;
  readonly options: ChildrenProps[];
  readonly menu: UseSelectMenu;
  readonly search: UseSelectSearch;
  readonly handleKeyPress: React.KeyboardEventHandler;
  readonly isSelected: (value: T) => boolean;
  readonly isFocused: (value: T) => boolean;
  readonly onChange: SelectOnChangeHandler<T>;
}

// Functions --------------------------------------------------------

function handleMultiSelect<T>(
  value: T | T[]
): [values: T[], multiselect: boolean] {
  let selectedValues: T[];
  let multiselect = false;
  if (Array.isArray(value)) {
    selectedValues = value;
    multiselect = true;
  } else {
    selectedValues = [value];
  }

  return [selectedValues, multiselect];
}

export default function useSelect<
  SelectedValue,
  ChildProps extends OptionProps<SelectedValue>
>(
  opts: UseSelectOptions<SelectedValue, ChildProps>
): UseSelectReturn<SelectedValue, ChildProps> {
  // SETUP -------------------------------------

  const { value, children, onChange, searchable, filterOptions } = opts;
  const [selectedValues, multiselect] = handleMultiSelect(value);

  let options: ChildProps[] = React.Children.map(
    children,
    (child) => child.props
  );

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
        handleClose(true);
      }
    },
    { enabled: menuActive }
  );

  // CALLBACKS -------------------------------------
  const isSelected = (value: SelectedValue) => selectedValues.includes(value);
  const isFocused = (value: SelectedValue) => value == options[focused]?.value;

  const handleClose = (force: boolean = false) => {
    if (!multiselect || force) {
      if (focused !== selectedIndex) {
        setFocused(selectedIndex);
      }
      closeMenu();
    }
  };

  const onChangeWrapper: SelectOnChangeHandler<SelectedValue> = (v, e) => {
    handleClose();
    if (!onChange) return;

    // TODO: figure out a better way to disciminate between these types
    // rather than just asserting it manually
    if (multiselect) {
      const multiOnChange = onChange as SelectOnChangeHandler<SelectedValue[]>;
      if (selectedValues.includes(v)) {
        multiOnChange(
          selectedValues.filter((s) => s !== v),
          e
        );
      } else {
        multiOnChange([...selectedValues, v], e);
      }
    } else {
      const singleOnChange = onChange as SelectOnChangeHandler<SelectedValue>;
      singleOnChange(v, e);
    }
  };

  const handleKeyPress: React.KeyboardEventHandler = (e) => {
    if (e.key === " ") {
      openMenu();
    } else if (e.key === "Escape") {
      if (menuActive) {
        handleClose(true);
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

  const menu = {
    opened: menuActive,
    open: openMenu,
    close: () => handleClose(true),
    toggle: toggleMenu,
  };

  const searchData = {
    value: search,
    onChange: onSearch,
  };

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
    menu,
    search: searchData,
  };
}
