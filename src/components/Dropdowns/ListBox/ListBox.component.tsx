import React, { forwardRef, RefAttributes, useContext } from "react";
import { useListState, Node, ListState, SectionProps } from "react-stately";
import { useListBox, useListBoxSection, useOption } from "@react-aria/listbox";
import { mergeProps } from "@react-aria/utils";
import {
  BaseCollection,
  Collection,
  CollectionBuilder,
} from "@react-aria/collections";

import { RenderStyleProps } from "../../../types";
import { useRenderProps } from "@hooks";
import { useFocusRing } from "@hooks/useFocusRing";
import { useForwardedRef } from "@hooks/useForwardedRef";
import { useCollectionRenderer } from "@hooks/useCollectionRenderer";
import { Label } from "@components/Fields";
import { Divider } from "@components/Layout/Divider";
import { Provider } from "@components/Internal/Provider";
import { ItemContext, ItemProps, SectionContext } from "@components/Collection";
import { useContextPropsV2 } from "@hooks/useContextProps";

import { List, ListItem, SectionTitle, SubList } from "./ListBox.styles";
import { ListBoxProps } from "./ListBox.types";
import { ListBoxContext, ListStateContext } from "./ListBox.context";

type ForwardedListBox = {
  <T>(props: ListBoxProps<T> & RefAttributes<HTMLUListElement>): JSX.Element;
  displayName: string;
};

/** A listbox displays a list of options and allows a user to select one or more of them.
 * Used as the dropdown menu for `ComboBox` and `CustomSelect` */
export const ListBox = forwardRef(function ListBox<T extends object>(
  props: ListBoxProps<T>,
  ref: React.Ref<HTMLUListElement>
) {
  const state = useContext(ListStateContext);
  [props, ref] = useContextPropsV2(ListBoxContext, props, ref);

  // When used within a SelectField or similar component,
  // the state will be provided by the parent component
  if (state) {
    return <InternalListBox {...props} state={state} listBoxRef={ref} />;
  }

  // When rendered standalone, we need to build the collection and
  // manage the state ourselves
  return (
    <CollectionBuilder content={<Collection {...props} />}>
      {(collection: BaseCollection<T>) => {
        return (
          <ManagedListBox<T>
            {...props}
            collection={collection}
            listBoxRef={ref}
          />
        );
      }}
    </CollectionBuilder>
  );
}) as unknown as ForwardedListBox;

ListBox.displayName = "ListBox";

interface ManagedListBoxProps<T extends object> extends ListBoxProps<T> {
  collection: BaseCollection<T>;
  listBoxRef: React.RefObject<HTMLUListElement>;
}

function ManagedListBox<T extends object>(props: ManagedListBoxProps<T>) {
  const state = useListState(props);
  return <InternalListBox {...props} state={state} />;
}

export interface InternalListBoxProps<T>
  extends Omit<ListBoxProps<T>, "children"> {
  state: ListState<T>;
  listBoxRef: React.RefObject<HTMLUListElement>;
}

export function InternalListBox<T>(props: InternalListBoxProps<T>) {
  const { state, className, size = "medium", listBoxRef } = props;
  const { listBoxProps, labelProps } = useListBox(props, state, listBoxRef);
  const { CollectionRenderer } = useCollectionRenderer();

  const renderProps = useRenderProps({
    componentClassName: "aje-listbox",
    className,
    size,
  });

  return (
    <>
      {props.label && <Label {...labelProps}>{props.label}</Label>}
      <List {...listBoxProps} {...renderProps} ref={listBoxRef}>
        <Provider
          values={[
            [ItemContext.Provider, { render: ListBoxItem }],
            [SectionContext.Provider, { render: ListBoxSection }],
            [ListStateContext.Provider, state],
          ]}
        >
          <CollectionRenderer
            collection={state.collection as BaseCollection<any>}
          />
        </Provider>
      </List>
    </>
  );
}

interface ListBoxSectionProps<T extends object>
  extends SectionProps<T>,
    RenderStyleProps<never> {}

function ListBoxSection<T extends object>(
  props: ListBoxSectionProps<T>,
  ref: React.ForwardedRef<HTMLLIElement>,
  section: Node<T>
) {
  const state = useContext(ListStateContext)!;

  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  const renderProps = useRenderProps({
    componentClassName: "aje-listbox__section",
    ...props,
    children: props.title,
  });

  const { CollectionBranchRenderer } = useCollectionRenderer();

  return (
    <>
      {section.key !== state.collection.getFirstKey() && <Divider as="li" />}
      <li {...itemProps} ref={ref}>
        {renderProps.children && (
          <SectionTitle {...headingProps}>{renderProps.children}</SectionTitle>
        )}
        <SubList {...groupProps} {...renderProps}>
          <CollectionBranchRenderer
            collection={state.collection as BaseCollection<T>}
            parent={section}
          />
        </SubList>
      </li>
    </>
  );
}

function ListBoxItem(
  props: ItemProps,
  ref: React.ForwardedRef<HTMLLIElement>,
  item: Node<object>
) {
  const state = useContext(ListStateContext)!;
  const internalRef = useForwardedRef<HTMLLIElement>(ref);
  const { optionProps, isSelected } = useOption(
    { key: item.key },
    state,
    internalRef
  );

  // Determine whether we should show a keyboard
  // focus ring for accessibility
  const { focusProps, isFocused, isFocusVisible } = useFocusRing();

  const renderProps = useRenderProps({
    componentClassName: "aje-listbox__item",
    ...props,
    children: item.rendered,
    values: {
      isSelected,
      isFocused,
      isFocusVisible,
    },
    selectors: {
      "data-selected": isSelected,
    },
  });

  return (
    <ListItem
      {...mergeProps(optionProps, focusProps)}
      {...renderProps}
      as={props.href ? "a" : "li"}
      ref={internalRef}
    >
      {renderProps.children}
    </ListItem>
  );
}
