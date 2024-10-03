import React, { useContext, useRef } from "react";
import {
  AriaTabPanelProps,
  useTab,
  useTabList,
  useTabPanel,
} from "@react-aria/tabs";
import {
  Collection as ICollection,
  TabListState,
  useTabListState,
  Node,
  TabListProps,
} from "react-stately";
import {
  BaseCollection,
  Collection,
  CollectionBuilder,
  createLeafComponent,
} from "@react-aria/collections";

import {
  TabContentWrapper,
  TabInfo,
  TabInfoWrapper,
  TabLink,
  TabLinksWrapper,
  TabList,
  TabsWrapper,
} from "./Tabs.Styles";
import { BaseProps, HasVariant, Key, RenderBaseProps } from "../../../types";
import { useContextProps } from "@hooks/useContextProps";
import { useForwardedRef } from "@hooks/useForwardedRef";
import { useRenderProps } from "@hooks";
import { useCollectionRenderer } from "@hooks/useCollectionRenderer";
import { Provider } from "@components/Internal/Provider";
import { ItemContext } from "@components/Collection";

export const TabsContext = React.createContext<TabsProps<any> | null>(null);
export const TabsStateContext = React.createContext<TabListState<any> | null>(
  null
);

export interface TabsProps<T>
  extends TabListProps<T>,
    BaseProps,
    HasVariant<"default" | "card" | "toggle"> {
  /** Display information to the right of the tab list */
  info?: React.ReactNode;
}

export function Tabs<T extends object>(props: TabsProps<T>) {
  props = useContextProps(TabsContext, props);
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <CollectionBuilder content={<Collection {...props} />}>
      {(collection) =>
        collection.size > 0 && (
          <TabsInner {...props} collection={collection} tabsRef={ref} />
        )
      }
    </CollectionBuilder>
  );
}

interface TabsInnerProps<T> extends TabsProps<T> {
  collection: ICollection<Node<T>>;
  tabsRef: React.ForwardedRef<HTMLDivElement | null>;
}

export function TabsInner<T extends object>(props: TabsInnerProps<T>) {
  const { collection, tabsRef, id, info } = props;

  const state = useTabListState(props);
  const ref = useForwardedRef<HTMLDivElement>(tabsRef);
  const { tabListProps } = useTabList(props, state, ref);

  const { CollectionRenderer } = useCollectionRenderer();

  const renderProps = useRenderProps({
    componentClassName: "aje-tabs",
    ...props,
    variant: props.variant || "default",
  });

  return (
    <TabsWrapper {...renderProps} id={id} ref={ref}>
      <Provider
        values={[
          [TabsStateContext.Provider, state],
          [ItemContext.Provider, { render: Tab }],
        ]}
      >
        <TabList {...tabListProps}>
          <TabLinksWrapper>
            <CollectionRenderer collection={collection} />
          </TabLinksWrapper>
          <TabInfoWrapper>
            {React.Children.map(info, (child) => (
              <TabInfo>{child}</TabInfo>
            ))}
          </TabInfoWrapper>
        </TabList>
      </Provider>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </TabsWrapper>
  );
}

interface TabProps<T> extends RenderBaseProps<never> {
  id?: Key;
  title?: React.ReactNode;
}

function Tab<T extends object>(
  props: TabProps<T>,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
  item: Node<T>
) {
  const { key } = item;
  const state = useContext(TabsStateContext)!;
  const ref = useForwardedRef<HTMLDivElement>(forwardedRef);
  const { tabProps } = useTab({ key }, state, ref);
  const renderProps = useRenderProps({
    componentClassName: "aje-tabs__tab",
    ...props,
  });

  return (
    <TabLink {...tabProps} {...renderProps} ref={ref}>
      {props.title}
    </TabLink>
  );
}

Tabs.Tab = createLeafComponent("item", Tab);

interface TabPanelProps<T> extends AriaTabPanelProps {
  state: TabListState<T>;
}

function TabPanel<T>(props: TabPanelProps<T>) {
  const { state } = props;
  const ref = useRef(null);
  const { tabPanelProps } = useTabPanel(props, state, ref);

  return (
    <TabContentWrapper {...tabPanelProps} ref={ref}>
      {state.selectedItem?.props.children}
    </TabContentWrapper>
  );
}
