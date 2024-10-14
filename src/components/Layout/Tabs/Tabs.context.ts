import { createContext } from "react";
import { createComponentContext } from "@utils/index";
import { TabListState } from "react-stately";
import { TabProps, TabsProps } from "./Tabs.types";
import { TabListAria } from "@react-aria/tabs";

export const TabsContext = createComponentContext<TabsProps<any>>();
export const TabContext = createComponentContext<TabProps<any>>();
export const TabsStateContext = createContext<TabListState<any> | null>(null);
