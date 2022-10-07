import React from "react";
import cn from "classnames";
import { HasChildren, HasClassName } from "../../../types";
import { getTabId, useTabContext } from "./utils";

type TabNavigationProps = HasChildren & HasClassName;

export default function TabsNavigation(props: TabNavigationProps) {
  const { children, className } = props;
  return (
    <div
      className={cn("aje-tab-list", className)}
      role="tablist"
      aria-label="navigation"
    >
      {children}
    </div>
  );
}

TabsNavigation.displayName = "Tabs.Navigation";

interface TabLinkProps extends HasChildren, HasClassName {
  /** What tab this link navigates to */
  readonly to: string;
}

export function TabLink(props: TabLinkProps) {
  const { to, children, className } = props;
  const { changeTab, currentTab, tabIdPrefix, tabContentId } = useTabContext();

  const tabId = getTabId(tabIdPrefix, to);

  return (
    <div className={cn("aje-tab-link", className)}>
      <a
        className="aje-tab"
        id={tabId}
        role="tab"
        aria-controls={tabContentId}
        aria-selected={currentTab === to}
        aria-current={currentTab === to}
        tabIndex={-1}
        onClick={() => changeTab(to)}
      >
        {children}
      </a>
    </div>
  );
}

TabLink.displayName = "Tabs.Link";
