import React from "react";
import cn from "classnames";
import styled from "styled-components";
import { HasChildren, HasClassName } from "../../../types";
import { getTabId, useTabContext } from "./utils";
import mixins from "../../../styles/mixins";

const TabList = styled.div`
  margin-bottom: calc(var(--tab-border-width) * -1);
  display: flex;
  align-items: center;
  gap: 2px;
`;

const TabLinkWrapper = styled.div`
  position: relative;
`;

const StyledTabLink = styled.a`
  ${mixins.Regular}
  display: inline-block;
  padding: var(--tab-padding-vert) var(--tab-padding-hori);
  background-color: var(--tab-bg-clr);
  border-radius: var(--tab-radius) var(--tab-radius) 0 0;
  border: var(--tab-border-width) solid;
  border-color: var(--tab-border-clr);
  position: relative;
  font-size: 1.6rem;
  text-decoration: none;
  color: var(--tab-text-clr);

  &[aria-selected="true"] {
    --tab-bg-clr: var(--neutral50);
    --tab-border-clr: var(--border-clr-primary);
    --tab-text-clr: var(--text-clr);

    &::after {
      content: "";
      position: absolute;
      height: calc(var(--tab-border-width) + 2px);
      bottom: -1px;
      left: 0;
      right: 0;
      background-color: var(--tab-bg-clr);
      z-index: 3;
    }
  }

  &:hover {
    --tab-text-clr: var(--text-clr);
    --tab-border-clr: var(--border-clr-primary);
    cursor: pointer;
  }
  &:focus-visible {
    outline: var(--outline);
    outline-offset: -1px;
  }
`;

type TabNavigationProps = HasChildren & HasClassName;

export default function TabsNavigation(props: TabNavigationProps) {
  const { children, className } = props;
  return (
    <TabList
      className={cn("aje-tab-list", className)}
      role="tablist"
      aria-label="navigation"
    >
      {children}
    </TabList>
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
    <TabLinkWrapper className={cn("aje-tab-link", className)}>
      <StyledTabLink
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
      </StyledTabLink>
    </TabLinkWrapper>
  );
}

TabLink.displayName = "Tabs.Link";
