import React from "react";
import { HasChildren } from "../../../types";
import { getTabId, useTabContext } from "./utils";

type TabNavigationProps = HasChildren;

export default function TabsNavigation({ children }: TabNavigationProps) {
  return (
    <div className="aje-tab-list" role="tablist" aria-label="navigation">
      {children}
    </div>
  );
}

TabsNavigation.displayName = "Tabs.Navigation";

interface TabLinkProps extends HasChildren {
  /** What tab this link navigates to */
  readonly to: string;
}

export function TabLink(props: TabLinkProps) {
  const { to, children } = props;
  const { changeTab, currentTab, tabIdPrefix, tabContentId } = useTabContext();

  const tabId = getTabId(tabIdPrefix, to);

  return (
    <div className="aje-tab-link">
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
