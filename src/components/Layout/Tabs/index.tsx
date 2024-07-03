import React, { useRef } from "react";
import classNames from "classnames";
import {
  AriaTabPanelProps,
  useTab,
  useTabList,
  useTabPanel,
} from "@react-aria/tabs";
import {
  TabListState,
  useTabListState,
  Node,
  TabListProps,
} from "react-stately";

import {
  TabContentWrapper,
  TabInfo,
  TabInfoWrapper,
  TabLink,
  TabLinkWrapper,
  TabLinksWrapper,
  TabList,
  TabsWrapper,
} from "./Tabs.Styles";
import { BaseProps, HasVariant } from "../../../types";
import { useVariantClass } from "../../../hooks";

export interface TabsProps<T>
  extends TabListProps<T>,
    BaseProps,
    HasVariant<"default" | "card" | "toggle"> {
  /** Display information to the right of the tab list */
  info?: React.ReactNode;
}

export function Tabs<T extends object>(props: TabsProps<T>) {
  const { className, id, info, variant = "default" } = props;

  const state = useTabListState(props);
  const ref = useRef(null);
  const { tabListProps } = useTabList(props, state, ref);

  const variantClass = useVariantClass("aje-tabs", variant);

  return (
    <TabsWrapper
      className={classNames("aje-tabs", variantClass, className)}
      id={id}
    >
      <TabList {...tabListProps} ref={ref}>
        <TabLinksWrapper>
          {[...state.collection].map((item) => (
            <Tab key={item.key} item={item} state={state} />
          ))}
        </TabLinksWrapper>
        <TabInfoWrapper>
          {React.Children.map(info, (child) => (
            <TabInfo>{child}</TabInfo>
          ))}
        </TabInfoWrapper>
      </TabList>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </TabsWrapper>
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
