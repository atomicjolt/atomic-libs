import { CalendarDate } from "@internationalized/date";
import { useContext, useRef } from "react";
import { CalendarStateContext } from "../Calendar.context";
import { useCalendarCell } from "@react-aria/calendar";
import { CalendarCellButton, StyledCalendarCell } from "../Calendar.styles";
import { useRenderProps } from "@hooks";
import { RenderBaseProps } from "../../../../../types";

interface CalendarCellRenderProps {
  focusedDate: CalendarDate;
  isDisabled: boolean;
  isSelected: boolean;
  formattedDate: string;
}

interface CalendarCellProps extends RenderBaseProps<CalendarCellRenderProps> {
  date: CalendarDate;
  isDisabled?: boolean;
}

export function CalendarCell(props: CalendarCellProps) {
  const state = useContext(CalendarStateContext)!;
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
    componentClassName: "aje-calendar__cell",
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
