import { useContext } from "react";
import { RenderBaseProps } from "../../../../../types";
import { useRenderProps } from "@hooks";

import {
  RangeCalendarStateContext,
  RangeCalendarTitleContext,
} from "../RangeCalendar.context";
import { CalendarHeaderTitle } from "../../Calendar/Calendar.styles";
import { CalendarDate } from "@internationalized/date";

interface RangeCalendarTitleRenderProps {
  focusedDate: CalendarDate;
  isDisabled: boolean;
  isFocused: boolean;
  title: string;
}

interface RangeCalendarTitleProps
  extends RenderBaseProps<RangeCalendarTitleRenderProps> {}

export function RangeCalendarTitle(props: RangeCalendarTitleProps) {
  const state = useContext(RangeCalendarStateContext)!;
  const { title } = useContext(RangeCalendarTitleContext)!;

  const renderProps = useRenderProps({
    componentClassName: "aje-range-calendar__title",
    values: {
      focusedDate: state.focusedDate,
      isDisabled: state.isDisabled,
      isFocused: state.isFocused,
      title: title,
    },
    ...props,
  });

  return (
    <CalendarHeaderTitle {...renderProps}>
      {props.children ? renderProps.children : title}
    </CalendarHeaderTitle>
  );
}