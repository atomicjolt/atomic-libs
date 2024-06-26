import React, { useMemo, useRef, useState } from "react";
import type { AriaListBoxProps } from "react-aria";
import { useListState, Node, ListState } from "react-stately";
import {
  mergeProps,
  useFilter,
  useFocusRing,
  useListBox,
  useListBoxSection,
  useOption,
} from "react-aria";
import classNames from "classnames";
import { BaseProps } from "../../../types";
import useForwardedRef from "../../../hooks/useForwardedRef";
import SearchInput from "../../Inputs/SearchInput";
import MaterialIcon from "../../Icons/MaterialIcon";
import { Label } from "../../Fields";
import { Divider } from "@components/Layout/Divider";
import { List, ListItem, SectionTitle, SubList } from "./ListBox.styles";

export type ListBoxProps<T> = AriaListBoxProps<T> &
  BaseProps & {
    /** Allow the items in the select to be searchable */
    isSearchable?: boolean;
    /** Placeholder for the search input */
    searchPlaceholder?: string;
    /** Whether to show a checkmark next to selected items */
    showCheckmark?: boolean;
  };

/** A listbox displays a list of options and allows a user to select one or more of them.
 * Used as the dropdown menu for `ComboBox` and `CustomSelect` */
export function ListBox<T extends object>(props: ListBoxProps<T>) {
  const state = useListState(props);
  return <UnmanagedListBox {...props} state={state} />;
}

export type UnmanagedListBoxProps<T> = Omit<ListBoxProps<T>, "children"> & {
  state: ListState<T>;
};

/** Listbox, but the state is passed in instead of managed internally */
export const UnmanagedListBox = React.forwardRef<
  HTMLUListElement,
  UnmanagedListBoxProps<any>
>((props, ref) => {
  const {
    isSearchable,
    searchPlaceholder = "Search",
    state,
    className,
    size = "medium",
    showCheckmark = false,
  } = props;
  const internalRef = useForwardedRef(ref);
  const { listBoxProps, labelProps } = useListBox(props, state, internalRef);
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const { contains } = useFilter({ sensitivity: "base" });

  const filteredItems = useMemo(
    () =>
      [...state.collection].filter((item) =>
        item.type === "section" ? true : contains(item.textValue, searchValue)
      ),
    [state.collection, searchValue]
  );

  if (isSearching) {
    // Prevent the listbox from handling keyboard events while the search input is focused
    // Stops it from taking focus away from the search input
    delete listBoxProps.onKeyDownCapture;
  }

  return (
    <>
      <Label {...labelProps}>{props.label}</Label>
      <List
        {...listBoxProps}
        ref={internalRef}
        className={classNames("aje-listbox", className, `is-${size}`)}
      >
        {isSearchable && (
          <SearchInput
            aria-label="Search"
            value={searchValue}
            onChange={setSearchValue}
            placeholder={searchPlaceholder}
            size={size}
            onFocus={() => setIsSearching(true)}
            onBlur={() => setIsSearching(false)}
          />
        )}
        {filteredItems.map((item) =>
          item.type === "section" ? (
            <ListBoxSection
              key={item.key}
              section={item}
              state={state}
              filter={(v) => contains(v, searchValue)}
              showCheckmark={showCheckmark}
            />
          ) : (
            <ListBoxOption
              key={item.key}
              item={item}
              state={state}
              showCheckmark={showCheckmark}
            />
          )
        )}
      </List>
    </>
  );
});

interface ListBoxSectionProps<T> {
  readonly section: Node<T>;
  readonly state: ListState<T>;
  readonly filter: (text: string) => boolean;
  readonly showCheckmark?: boolean;
}

function ListBoxSection<T>(props: ListBoxSectionProps<T>) {
  const { section, state, filter, showCheckmark = false } = props;
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  const children = [...section.childNodes].filter((item) =>
    filter(item.textValue)
  );

  if (children.length === 0) {
    return null;
  }

  // If the section is not the first, add a separator element to provide visual separation.
  // The heading is rendered inside an <li> element, which contains
  // a <ul> with the child items.
  return (
    <>
      {section.key !== state.collection.getFirstKey() && <Divider as="li" />}
      <li {...itemProps}>
        {section.rendered && (
          <SectionTitle {...headingProps}>{section.rendered}</SectionTitle>
        )}
        <SubList {...groupProps}>
          {children.map((node) => (
            <ListBoxOption
              key={node.key}
              item={node}
              state={state}
              showCheckmark={showCheckmark}
            />
          ))}
        </SubList>
      </li>
    </>
  );
}

interface ListBoxOptionProps<T> {
  item: Node<T>;
  state: ListState<T>;
  showCheckmark?: boolean;
}

function ListBoxOption<T>(props: ListBoxOptionProps<T>) {
  const { item, state, showCheckmark } = props;
  const ref = useRef(null);
  const { optionProps } = useOption({ key: item.key }, state, ref);

  // Determine whether we should show a keyboard
  // focus ring for accessibility
  const { focusProps } = useFocusRing();

  return (
    <ListItem
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      data-focus-visible={item.key === state.selectionManager.focusedKey}
    >
      {item.rendered}
      {showCheckmark && <MaterialIcon icon="check" />}
    </ListItem>
  );
}
