import React, { useRef } from "react";
import {
  useTab,
  useTabList,
  useTabPanel,
  AriaTabListOptions,
  AriaTabPanelProps,
} from "react-aria";
import {
  TabListState,
  useTabListState,
  Node,
  TabListProps,
} from "react-stately";
import {
  TabContentWrapper,
  TabLink,
  TabLinkWrapper,
  TabList,
} from "./Tabs.Styles";
import { BaseProps } from "../../../types";
import classNames from "classnames";

export interface TabsProps<T> extends TabListProps<T>, BaseProps {}

export function Tabs<T extends object>(props: TabsProps<T>) {
  const { className, id } = props;

  const state = useTabListState(props);
  const ref = useRef(null);
  const { tabListProps } = useTabList(props, state, ref);

  return (
    <div className={classNames("aje-tabs", className)} id={id}>
      <TabList {...tabListProps} ref={ref}>
        {[...state.collection].map((item) => (
          <Tab key={item.key} item={item} state={state} />
        ))}
      </TabList>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </div>
  );
}

interface TabProps<T> {
  item: Node<T>;
  state: TabListState<T>;
}

function Tab<T>(props: TabProps<T>) {
  const { item, state } = props;
  const { key, rendered } = item;
  const ref = useRef(null);
  const { tabProps } = useTab({ key }, state, ref);

  return (
    <TabLinkWrapper>
      <TabLink {...tabProps} ref={ref}>
        {rendered}
      </TabLink>
    </TabLinkWrapper>
  );
}

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
