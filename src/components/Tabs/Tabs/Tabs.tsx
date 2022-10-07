import React from "react";
import cn from "classnames";
import { useIds } from "../../../hooks";
import { HasChildren, HasClassName } from "../../../types";
import Tab from "./Tab";
import TabsNavigation, { TabLink } from "./TabNavigation";
import { TabsContextT } from "./Tabs.types";
import { getTabId, TabsContext, useTabContext } from "./utils";

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
    <div
      className={cn("aje-tab-content", className)}
      id={tabContentId}
      tabIndex={0}
      role="tabpanel"
      aria-labelledby={getTabId(tabIdPrefix, currentTab)}
    >
      {children}
    </div>
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
