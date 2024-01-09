import { createContext, useContext } from "react";
import { TabsContextT } from "./Tabs.types";

export const TabsContext = createContext<TabsContextT<any>>({} as TabsContextT);

export const useTabContext = () => useContext(TabsContext);

export const getTabId = (prefix: string, name: string) => `${prefix}-${name}`;