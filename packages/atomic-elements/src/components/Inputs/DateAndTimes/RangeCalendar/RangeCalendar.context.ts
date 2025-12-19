import { createContext } from "react";
import { RangeCalendarState } from "react-stately";

import { createComponentContext } from "@utils/index";
import { RangeCalendarProps } from "./RangeCalendar.component";

export const RangeCalendarContext = createComponentContext<RangeCalendarProps<any>>();

export const RangeCalendarStateContext = createContext<RangeCalendarState | null>(null);

export const RangeCalendarTitleContext = createContext<{ title: string } | null>(
  null
);