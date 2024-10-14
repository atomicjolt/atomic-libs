import React, { forwardRef, useContext, useRef } from "react";
import {
  AriaTabPanelProps,
  useTab,
  useTabList,
  useTabPanel,
} from "@react-aria/tabs";
import { TabListState, useTabListState, Node } from "react-stately";
import {
  BaseCollection,
  Collection,
  CollectionBuilder,
  createLeafComponent,
} from "@react-aria/collections";

import { useContextPropsV2 } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks";
import { useCollectionRenderer } from "@hooks/useCollectionRenderer";
import { Provider } from "@components/Internal/Provider";
import { ItemContext } from "@components/Collection";

import { TabContext, TabsContext, TabsStateContext } from "./Tabs.context";
import { TabProps, TabsProps } from "./Tabs.types";
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
  Tab: typeof TabWrapper;
  List: typeof TabList;
  Panel: typeof TabPanel;
};

export const Tabs = forwardRef(function Tabs<T extends object>(
  props: TabsProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  [props, ref] = useContextPropsV2(TabsContext, props, ref);

  return (
    <CollectionBuilder content={props.children}>
      {(collection: BaseCollection<T>) => (
        <TabsInner {...props} collection={collection} tabsRef={ref} />
      )}
    </CollectionBuilder>
  );
}) as unknown as ForwardedTabs;

interface TabsInnerProps<T> extends TabsProps<T> {
  collection: BaseCollection<T>;
  tabsRef: React.RefObject<HTMLDivElement>;
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

function TabList<T extends object>(
  props: React.HTMLAttributes<HTMLUListElement>
) {
  const state = useContext(TabsStateContext)!;

  if (!state) return <Collection {...props} />;

  return <TabListInner {...props} />;
}

function TabListInner<T extends object>(
  props: React.HTMLAttributes<HTMLUListElement>
) {
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

Tabs.List = TabList;

function Tab<T extends object>(
  props: TabProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>,
  item: Node<T>
) {
  [props, ref] = useContextPropsV2(TabContext, props, ref);
  const state = useContext(TabsStateContext)!;

  const { key } = item;
  const { tabProps } = useTab({ key }, state, ref);

  const renderProps = useRenderProps({
    componentClassName: "aje-tabs__tab",
    ...props,
    values: {
      isSelected: state.selectedKey === key,
    },
    selectors: {
      "data-selected": state.selectedKey === key,
    },
  });

  const Element = props.href ? "a" : "div";

  return (
    <TabLink as={Element} {...tabProps} {...renderProps} ref={ref}>
      {props.children}
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

function TabPanel(props: TabPanelProps) {
  const state = useContext(TabsStateContext);

  if (!state) return null;
  if (state.selectedKey !== props.id) return null;

  return <TabPanelInner {...props} state={state} />;
}

interface TabPanelInnerProps extends TabPanelProps {
  state: TabListState<any>;
}

function TabPanelInner(props: TabPanelInnerProps) {
  const { state } = props;
  const ref = useRef(null);
  const { tabPanelProps } = useTabPanel(props, state, ref);

  return (
    <TabContentWrapper {...tabPanelProps} ref={ref}>
      {props.children}
    </TabContentWrapper>
  );
}

TabPanel.displayName = "Tabs.Panel";
Tabs.Panel = TabPanel;
