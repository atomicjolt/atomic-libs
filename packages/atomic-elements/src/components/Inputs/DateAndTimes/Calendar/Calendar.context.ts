import { createContext } from 'react';
import { CalendarState } from 'react-stately';

export const CalendarStateContext = createContext<CalendarState | null>(null);

export const CalendarTitleContext = createContext<{ title: string } | null>(null);
