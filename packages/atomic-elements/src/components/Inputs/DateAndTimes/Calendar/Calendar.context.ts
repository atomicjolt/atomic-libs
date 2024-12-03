import { createContext } from "react";
import { CalendarState } from "react-stately";

import { createComponentContext } from "@utils/index";
import { CalendarProps } from "./Calendar.component";

export const CalendarContext = createComponentContext<CalendarProps<any>>();

export const CalendarStateContext = createContext<CalendarState | null>(null);

export const CalendarTitleContext = createContext<{ title: string } | null>(
  null
);
