import cn from "classnames";
import React, { useContext, useMemo, useState } from "react";
import { useIds } from "../../../hooks";
interface TabData {
  label: string;
  notification?: "error" | "info";
}

export interface SharedProps {
  children: React.ReactElement[] | React.ReactElement;
  /** Mapping between tabs names and a human-readable
   * lable that will actually be displayed */
  tabs: Record<string, string | TabData>;
}

type ControlledProps =
  | {
      currentTab: string;
      onChange: (value: string) => void;
    }
  | {
      currentTab?: never;
      onChange: never;
    };

export type Props = SharedProps & ControlledProps;

interface TabsControlledProps extends SharedProps {
  currentTab: string;
  onChange: (value: string) => void;
}

interface TabsUncontrolledProps extends SharedProps {}

interface TabContextData {
  currentTab: string;
  currentLabel: string | null;
}

interface TabProps {
  children: React.ReactNode;
  name: string;
}

const TabContext = React.createContext({} as TabContextData);

/** Tabs Component
 *
 */
export default function Tabs({ children, tabs, currentTab, onChange }: Props) {
  if (currentTab !== undefined) {
    return (
      <TabsControlled
        children={children}
        currentTab={currentTab}
        tabs={tabs}
        onChange={onChange}
      />
    );
  }

  return <TabsUncontrolled children={children} tabs={tabs} />;
}

function TabsControlled({
  children,
  currentTab,
  tabs,
  onChange,
}: TabsControlledProps) {
  return (
    <TabsShared currentTab={currentTab} tabs={tabs} onChange={onChange}>
      {children}
    </TabsShared>
  );
}

function TabsUncontrolled({ children, tabs }: TabsUncontrolledProps) {
  const [currentTab, setCurrentTab] = useState<string>(
    () => Object.keys(tabs)[0]
  );

  return (
    <TabsShared currentTab={currentTab} tabs={tabs} onChange={setCurrentTab}>
      {children}
    </TabsShared>
  );
}

function getLabel(data?: string | TabData) {
  if (!data) return null;

  if (typeof data === "string") {
    return data;
  }
  return data.label;
}

function getNotification(data: string | TabData) {
  if (typeof data === "string") {
    return null;
  }
  return data.notification;
}

function TabsShared({
  currentTab,
  tabs,
  onChange,
  children,
}: TabsControlledProps) {
  const [tabId, tabContentId] = useIds("tabs", ["tab", "content"]);

  const ctx: TabContextData = {
    currentTab,
    currentLabel: getLabel(tabs[currentTab]),
  };

  return (
    <>
      <div className="aje-tab-list" role="tablist" aria-label="navigation">
        {Object.entries(tabs).map(([name, data], idx) => (
          <div className="aje-tab-link">
            <a
              className="aje-tab"
              id={`${tabId}-${idx}`}
              key={`${tabId}-${idx}`}
              role="tab"
              aria-controls={tabContentId}
              aria-selected={currentTab === name}
              aria-current={currentTab === name}
              tabIndex={-1}
              onClick={() => onChange(name)}
            >
              {getLabel(data)}
            </a>
            <div
              className={cn("aje-tab-notification", {
                "aje-tab-notification--error": getNotification(data) == "error",
                "aje-tab-notification--info": getNotification(data) == "info",
              })}
            />
          </div>
        ))}
      </div>
      <div
        className="aje-tab-content"
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

export function Tab({ children, name }: TabProps) {
  const { currentTab } = useContext(TabContext);

  if (name !== currentTab) return null;

  return <>{children}</>;
}
