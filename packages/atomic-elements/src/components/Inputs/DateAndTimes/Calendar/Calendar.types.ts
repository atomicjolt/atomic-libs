import { CalendarDate } from '@internationalized/date';

export interface CalendarRenderProps {
  focusedDate: CalendarDate;
  isDisabled: boolean;
  isFocused: boolean;
}
