import React from "react";
import { useTabContext } from "./utils";

interface TabProps {
  children: React.ReactNode;
  /** The name of tab, when `currentTab` matches this name, this tab will be rendered */
  name: string;
}

export default function Tab({ children, name }: TabProps) {
  const { currentTab } = useTabContext();

  if (name !== currentTab) return null;

  return <>{children}</>;
}

Tab.displayName = "Tabs.Tab";
