import React, { forwardRef, useContext, useRef, type JSX } from "react";
import {
  AriaTabPanelProps,
  useTab,
  useTabList,
  useTabPanel,
} from "@react-aria/tabs";
import { useTabListState, Node } from "react-stately";
import {
  BaseCollection,
  Collection,
  CollectionBuilder,
  createHideableComponent,
  createLeafComponent,
} from "@react-aria/collections";
import { useObjectRef } from "@react-aria/utils";

import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks";
import { useCollectionRenderer } from "@hooks/useCollectionRenderer";
import { Provider } from "@components/Internal/Provider";
import { ItemContext } from "@components/Collection";

import { TabContext, TabsContext, TabsStateContext } from "./Tabs.context";
import { TabListProps, TabProps, TabsProps } from "./Tabs.types";
import {
  TabContentWrapper,
  TabLink,
  TabLinksWrapper,
  StyledTabList,
  TabsWrapper,
} from "./Tabs.Styles";

type ForwardedTabs = {
  <T extends object>(
    props: TabsProps<T> & React.RefAttributes<HTMLDivElement>
  ): JSX.Element;
  displayName: string;
  /** A list of Tabs in a Tabs component */
  List: typeof TabList;
  /** A Tab in a Tabs component */
  Tab: typeof TabWrapper;
  /** A panel that corresponds to a Tab in a Tabs component */
  Panel: typeof TabPanel;
};

export const Tabs = forwardRef(function Tabs<T extends object>(
  props: TabsProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  [props, ref] = useContextProps(TabsContext, props, ref);

  return (
    <CollectionBuilder content={props.children}>
      {(collection: BaseCollection<T>) => (
        <TabsInner {...props} collection={collection} tabsRef={ref} />
      )}
    </CollectionBuilder>
  );
}) as unknown as ForwardedTabs;

Tabs.displayName = "Tabs";

interface TabsInnerProps<T> extends TabsProps<T> {
  collection: BaseCollection<T>;
  tabsRef: React.RefObject<HTMLDivElement | null>;
}

export function TabsInner<T extends object>(props: TabsInnerProps<T>) {
  const { tabsRef, id } = props;

  const state = useTabListState({
    ...props,
    children: undefined,
  });

  const renderProps = useRenderProps({
    componentClassName: "aje-tabs",
    ...props,
    variant: props.variant || "default",
  });

  return (
    <TabsWrapper {...renderProps} id={id} ref={tabsRef}>
      <Provider
        values={[
          [TabsStateContext.Provider, state],
          [ItemContext.Provider, { render: Tab }],
        ]}
      >
        {props.children}
      </Provider>
    </TabsWrapper>
  );
}

function TabList<T extends object>(props: TabListProps<T>) {
  const state = useContext(TabsStateContext)!;

  // We're building the collection in the Tabs component
  if (!state) return <Collection {...props} />;

  // We're rendering a built collection
  return <TabListInner {...props} />;
}

TabList.displayName = "Tabs.List";
Tabs.List = TabList;

function TabListInner<T extends object>(props: TabListProps<T>) {
  const state = useContext(TabsStateContext)!;
  const ref = useRef(null);
  const { tabListProps } = useTabList(props, state, ref);
  const { CollectionRenderer } = useCollectionRenderer();

  return (
    <StyledTabList {...tabListProps} ref={ref}>
      <TabLinksWrapper>
        <CollectionRenderer
          collection={state.collection as BaseCollection<T>}
        />
      </TabLinksWrapper>
    </StyledTabList>
  );
}

function Tab<T extends object>(
  props: TabProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>,
  item: Node<T>
) {
  [props, ref] = useContextProps(TabContext, props, ref);
  const state = useContext(TabsStateContext)!;

  const { key } = item;
  const { tabProps } = useTab({ key }, state, ref);

  const renderProps = useRenderProps({
    componentClassName: "aje-tabs__tab",
    ...props,
    values: {
      isSelected: state.selectedKey === key,
      // TODO: Implement focus styles
      isFocused: false,
      isFocusVisible: false,
    },
    selectors: {
      "data-selected": state.selectedKey === key,
    },
  });

  const Element = props.href ? "a" : "div";

  return (
    <TabLink as={Element} {...tabProps} {...renderProps} ref={ref}>
      {renderProps.children}
    </TabLink>
  );
}

const TabWrapper = createLeafComponent("item", Tab);
// @ts-expect-error
TabWrapper.displayName = "Tabs.Tab";
Tabs.Tab = TabWrapper;

interface TabPanelProps extends AriaTabPanelProps {
  children?: React.ReactNode;
}

function TabPanelInner(
  props: TabPanelProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
  const state = useContext(TabsStateContext);
  const ref = useObjectRef(forwardedRef);
  const { tabPanelProps } = useTabPanel(props, state, ref);

  const isSelected = state?.selectedKey === props.id;

  if (!isSelected) return null;

  return (
    <TabContentWrapper {...tabPanelProps} ref={ref}>
      {/* May contain other tabs, so clear out the
      providers below this in the tree */}
      <Provider
        values={[
          [TabsContext.Provider, {}],
          [TabsStateContext.Provider, null],
        ]}
      >
        {props.children}
      </Provider>
    </TabContentWrapper>
  );
}

const TabPanel = createHideableComponent(TabPanelInner);
// @ts-expect-error
TabPanel.displayName = "Tabs.Panel";
Tabs.Panel = TabPanel;
