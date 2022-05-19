import React, { useContext, useMemo, useState } from "react";
import { useIds } from "../../../hooks";
import "../../general.scss";
import "./styles.scss";

export interface Props {
  children: React.ReactElement[] | React.ReactElement;
}

interface TabContext {
  currentIndex: number;
  currentLabel: string;
}

const TabContext = React.createContext({} as TabContext);

/** Tabs Component */
export default function Tabs({ children }: Props) {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [tabId, tabContentId] = useIds("tabs", ["tab", "content"]);

  const labels = useMemo(
    () => React.Children.map(children, (child) => child.props.label),
    [children]
  );

  const ctx: TabContext = {
    currentIndex: currentTab,
    currentLabel: labels[currentTab],
  };

  return (
    <>
      <div className="aj-tab-list" role="tablist" aria-label="navigation">
        {labels.map((label, idx) => (
          <a
            className="aj-tab"
            id={`${tabId}-${idx}`}
            key={`${tabId}-${idx}`}
            role="tab"
            aria-controls={tabContentId}
            aria-selected={currentTab == idx}
            aria-current={currentTab == idx}
            tabIndex={-1}
            onClick={() => setCurrentTab(idx)}
          >
            {label}
          </a>
        ))}
      </div>
      <div
        className="aj-tab-content"
        id={tabContentId}
        tabIndex={0}
        role="tabpanel"
        aria-labelledby={tabId}
      >
        <TabContext.Provider value={ctx}>{children}</TabContext.Provider>
      </div>
    </>
  );
}

interface TabProps {
  children: React.ReactNode;
  label: string;
}

export function Tab({ children, label }: TabProps) {
  const { currentLabel } = useContext(TabContext);

  if (label !== currentLabel) return null;

  return <>{children}</>;
}
