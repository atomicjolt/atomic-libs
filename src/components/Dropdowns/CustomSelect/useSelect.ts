import React, { useEffect, useMemo, useRef, useState } from "react";

import { useBool, useClickOutside } from "../../../hooks";
import { EventHandler, FilterStrategy } from "../../../types";
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
  readonly filterStrategy: FilterStrategy<string, string>;
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
  readonly onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
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

  const { value, children, onChange, searchable, filterStrategy } = opts;
  const [selectedValues, multiselect] = handleMultiSelect(value);

  let childrenProps: ChildProps[] = React.Children.map(
    children,
    (child) => child.props
  );

  const getSelected = (values: SelectedValue[]): [number, ChildProps] => {
    const index = childrenProps.findIndex((o) => values.includes(o.value));
    const selectedValue: ChildProps = childrenProps[index];

    return [index, selectedValue];
  };

  const [selectedIndex, selectedOption] = getSelected(selectedValues);

  // HOOKS -------------------------------------

  const [search, setSearch] = useState<string>("");

  const options: ChildProps[] = useMemo(() => {
    if (searchable && search) {
      const searchableOptions = childrenProps.filter((o) => o.searchKey);

      const searchLookup: Record<string, ChildProps[]> = {};
      searchableOptions.forEach((o) => {
        searchLookup[o.searchKey as string] ||= [];
        searchLookup[o.searchKey as string].push(o);
      });

      const searchKeys: string[] = [
        ...new Set(searchableOptions.map((o) => o.searchKey)),
      ] as string[];

      const filteredSearchKeys = filterStrategy.filter(search, searchKeys);
      const filteredChildren = filteredSearchKeys
        .map((o) => searchLookup[o])
        .flat();

      return filteredChildren;
    } else {
      return childrenProps;
    }
  }, [childrenProps, filterStrategy]);

  const ref = useRef<HTMLDivElement | null>(null);

  const [menuActive, toggleMenu, openMenu, closeMenu] = useBool(false);

  const [focused, setFocused] = useState(selectedIndex || 0);

  useEffect(() => {
    if (!menuActive) {
      setFocused(getSelected(selectedValues)[0]);
    }
  }, [menuActive]);

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
      const newValue: SelectedValue[] = selectedValues.includes(v)
        ? selectedValues.filter((s) => s !== v)
        : [...selectedValues, v];

      multiOnChange(newValue, e);
    } else {
      const singleOnChange = onChange as SelectOnChangeHandler<SelectedValue>;
      singleOnChange(v, e);
    }

    setFocused(getSelected([v])[0]);
  };

  const handleKeyPress: React.KeyboardEventHandler = (e) => {
    if (menuActive) {
      switch (e.key) {
        case "ArrowDown":
          setFocused(Math.min(focused + 1, options.length - 1));
          break;
        case "ArrowUp":
          setFocused(Math.max(focused - 1, 0));
          break;
        case "Enter":
        case " ":
          onChangeWrapper(options[focused].value, e);
          handleClose();
          break;
        case "Escape":
          if (menuActive) {
            handleClose(true);
          } else {
            ref.current?.blur();
          }
          break;
        default:
          break;
      }
    } else {
      if (e.key === " ") {
        openMenu();
      }
    }
  };

  const searchKeydown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key !== " ") {
      handleKeyPress(e);
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
    onKeyDown: searchKeydown,
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
