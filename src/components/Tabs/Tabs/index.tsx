import React, { useContext, useMemo, useState } from "react";
import { useIds } from "../../../hooks";
import "../../general.scss";
import "./styles.scss";

export interface SharedProps {
  children: React.ReactElement[] | React.ReactElement;
}

type ControlledProps =
  | {
      currentTab: number;
      onChange: (value: number) => void;
    }
  | {
      currentTab?: never;
      onChange: never;
    };

export type Props = SharedProps & ControlledProps;

interface TabsControlledProps extends SharedProps {
  currentTab: number;
  labels: string[];
  onChange: (value: number) => void;
}

interface TabsUncontrolledProps extends SharedProps {
  labels: string[];
}

interface TabContextData {
  currentIndex: number;
  currentLabel: string;
}

interface TabProps {
  children: React.ReactNode;
  label: string;
}

const TabContext = React.createContext({} as TabContextData);

/** Tabs Component
 *
 */
export default function Tabs({ children, currentTab, onChange }: Props) {
  const labels = useMemo(
    () =>
      React.Children.map(children, (child) => {
        if (
          typeof child === "string" ||
          typeof child.type == "string" ||
          // @ts-ignore
          child.type.displayName !== "Tab"
        ) {
          throw new Error(
            "All direct children ot Tabs must be a Tab component"
          );
        }
        return child.props.label;
      }),
    [children]
  );

  if (currentTab !== undefined) {
    return (
      <TabsControlled
        children={children}
        currentTab={currentTab}
        labels={labels}
        onChange={onChange}
      />
    );
  }

  return <TabsUncontrolled children={children} labels={labels} />;
}

function TabsControlled({
  children,
  currentTab,
  labels,
  onChange,
}: TabsControlledProps) {
  return (
    <TabsShared currentTab={currentTab} labels={labels} onChange={onChange}>
      {children}
    </TabsShared>
  );
}

function TabsUncontrolled({ children, labels }: TabsUncontrolledProps) {
  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <TabsShared
      currentTab={currentTab}
      labels={labels}
      onChange={setCurrentTab}
    >
      {children}
    </TabsShared>
  );
}

function TabsShared({
  currentTab,
  labels,
  onChange,
  children,
}: TabsControlledProps) {
  const [tabId, tabContentId] = useIds("tabs", ["tab", "content"]);

  const ctx: TabContextData = {
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
            onClick={() => onChange(idx)}
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

export function Tab({ children, label }: TabProps) {
  const { currentLabel } = useContext(TabContext);

  if (label !== currentLabel) return null;

  return <>{children}</>;
}
