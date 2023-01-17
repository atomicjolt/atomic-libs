import React from "react";
import cn from "classnames";
import styled from "styled-components";
import { useIds } from "../../../hooks";
import { HasChildren, HasClassName } from "../../../types";
import Tab from "./Tab";
import TabsNavigation, { TabLink } from "./TabNavigation";
import { TabsContextT } from "./Tabs.types";
import { getTabId, TabsContext, useTabContext } from "./utils";

const TabContentWrapper = styled.div`
  --tab-bg-clr: var(--neutral50);
  --tab-border-clr: var(--border-clr-primary);

  position: relative;
  z-index: 2;
  background-color: var(--tab-bg-clr);
  border-top: 1px solid var(--tab-border-clr);
  min-height: 4px;

  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: var(--outline);
    outline-offset: -2px;
  }
`;

export interface TabsProps<T extends string> extends HasChildren {
  readonly currentTab: T;
  readonly onChange: (name: T) => void;
}

function Tabs<T extends string>(props: TabsProps<T>) {
  const { children, currentTab, onChange } = props;
  const [tabIdPrefix, tabContentId] = useIds("Tabs", ["prefix", "content"]);

  const ctx: TabsContextT<T> = {
    changeTab: (name: T) => onChange && onChange(name),
    currentTab: currentTab,
    tabContentId,
    tabIdPrefix,
  };

  return <TabsContext.Provider value={ctx}>{children}</TabsContext.Provider>;
}

type TabsContentProps = HasChildren & HasClassName;

export function TabsContent(props: TabsContentProps) {
  const { children, className } = props;
  const { tabContentId, tabIdPrefix, currentTab } = useTabContext();

  return (
    <TabContentWrapper
      className={cn("aje-tab-content", className)}
      id={tabContentId}
      tabIndex={0}
      role="tabpanel"
      aria-labelledby={getTabId(tabIdPrefix, currentTab)}
    >
      {children}
    </TabContentWrapper>
  );
}

TabsContent.displayName = "Tabs.Content";

// @ts-ignore
Tabs.Tab = Tab;
// @ts-ignore
Tabs.Navigation = TabsNavigation;
// @ts-ignore
Tabs.Link = TabLink;
// @ts-ignore
Tabs.Content = TabsContent;

export default Tabs;
