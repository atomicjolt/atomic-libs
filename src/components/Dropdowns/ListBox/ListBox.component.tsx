import React, { forwardRef, useContext } from "react";
import classNames from "classnames";
import { useListState, Node, ListState, SectionProps } from "react-stately";
import { useListBox, useListBoxSection, useOption } from "@react-aria/listbox";
import { mergeProps } from "@react-aria/utils";
import { LinkDOMProps } from "@react-types/shared";
import {
  BaseCollection,
  Collection,
  CollectionBuilder,
  createBranchComponent,
  createLeafComponent,
} from "@react-aria/collections";

import { Key, RenderBaseProps, RenderStyleProps } from "../../../types";
import { useRenderProps } from "@hooks";
import { useFocusRing } from "@hooks/useFocusRing";
import { useForwardedRef } from "@hooks/useForwardedRef";
import { useCollectionRenderer } from "@hooks/useCollectionRenderer";
import { Label } from "@components/Fields";
import { Divider } from "@components/Layout/Divider";
import { Provider } from "@components/Internal/Provider";
import { ItemContext, SectionContext } from "@components/Collection";
import { useContextPropsV2 } from "@hooks/useContextProps";

import { List, ListItem, SectionTitle, SubList } from "./ListBox.styles";
import { ListBoxProps } from "./ListBox.types";
import { ListBoxContext, ListStateContext } from "./ListBox.context";

interface ListBoxComponent
  extends React.ForwardRefExoticComponent<ListBoxProps<any>> {
  Section: React.FC<ListBoxSectionProps<any>>;
  Item: React.FC<ListBoxItemProps>;
}

/** A listbox displays a list of options and allows a user to select one or more of them.
 * Used as the dropdown menu for `ComboBox` and `CustomSelect` */
export const ListBox = forwardRef(function ListBox<T extends object>(
  props: ListBoxProps<T>,
  ref: React.Ref<HTMLUListElement>
) {
  const state = useContext(ListStateContext);
  [props, ref] = useContextPropsV2(ListBoxContext, props, ref);

  if (state) {
    return <InternalListBox {...props} state={state} />;
  }

  return (
    <CollectionBuilder content={<Collection {...props} />}>
      {(collection) => {
        // @ts-expect-error
        return <ManagedListBox {...props} collection={collection} />;
      }}
    </CollectionBuilder>
  );
}) as ListBoxComponent;

interface ManagedListBoxProps<T> extends ListBoxProps<T> {
  collection: BaseCollection<T>;
}

function ManagedListBox<T extends object>(props: ManagedListBoxProps<T>) {
  const state = useListState(props);
  return <InternalListBox {...props} state={state} />;
}

export interface InternalListBoxProps<T>
  extends Omit<ListBoxProps<T>, "children"> {
  state: ListState<T>;
}

export const InternalListBox = React.forwardRef<
  HTMLUListElement,
  InternalListBoxProps<any>
>((props, ref) => {
  const { state, className, size = "medium" } = props;
  const internalRef = useForwardedRef(ref);
  const { listBoxProps, labelProps } = useListBox(props, state, internalRef);
  const { CollectionRenderer } = useCollectionRenderer();

  return (
    <>
      {props.label && <Label {...labelProps}>{props.label}</Label>}
      <List
        {...listBoxProps}
        ref={internalRef}
        className={classNames("aje-listbox", className, `is-${size}`)}
      >
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
});

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
            collection={state.collection as BaseCollection<object>}
            parent={section}
          />
        </SubList>
      </li>
    </>
  );
}

ListBox.Section = createBranchComponent("section", ListBoxSection);

interface ListBoxItemRenderProps {
  isSelected: boolean;
}

interface ListBoxItemProps
  extends RenderBaseProps<ListBoxItemRenderProps>,
    LinkDOMProps {
  id?: Key;
  textValue?: string;
  "aria-label"?: string;
  isDisabled?: boolean;
  onAction?: () => void;
}

function ListBoxItem(
  props: ListBoxItemProps,
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

  const renderProps = useRenderProps({
    componentClassName: "aje-listbox__item",
    ...props,
    children: item.rendered,
    values: {
      isSelected,
    },
    selectors: {
      "data-selected": isSelected,
    },
  });

  // Determine whether we should show a keyboard
  // focus ring for accessibility
  const { focusProps } = useFocusRing();

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

ListBox.Item = createLeafComponent("item", ListBoxItem);
