import { CalendarDate } from "@internationalized/date";
import { useContext, useRef } from "react";
import { RangeCalendarStateContext } from "../RangeCalendar.context";
import { useCalendarCell } from "@react-aria/calendar";
import { CalendarCellButton, StyledCalendarCell } from "../../Calendar/Calendar.styles";
import { useRenderProps } from "@hooks";
import { RenderBaseProps } from "../../../../../types";

interface RangeCalendarCellRenderProps {
  focusedDate: CalendarDate;
  isDisabled: boolean;
  isSelected: boolean;
  formattedDate: string;
}

interface RangeCalendarCellProps extends RenderBaseProps<RangeCalendarCellRenderProps> {
  date: CalendarDate;
  isDisabled?: boolean;
}

export function RangeCalendarCell(props: RangeCalendarCellProps) {
  const state = useContext(RangeCalendarStateContext)!;
  const ref = useRef(null);

  const {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate,
  } = useCalendarCell(props, state, ref);

  const renderProps = useRenderProps({
    componentClassName: "aje-range-calendar__cell",
    ...props,
    values: {
      focusedDate: state.focusedDate,
      formattedDate,
      isDisabled,
      isSelected,
    },
    selectors: {
      "data-disabled": isDisabled,
      "data-unavailable": isUnavailable,
    },
  });

  return (
    <StyledCalendarCell {...cellProps} {...renderProps}>
      <CalendarCellButton
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
      >
        {formattedDate}
      </CalendarCellButton>
    </StyledCalendarCell>
  );
}