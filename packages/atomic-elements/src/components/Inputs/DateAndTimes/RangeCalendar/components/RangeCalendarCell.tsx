import { CalendarDate } from "@internationalized/date";
import { useContext, useMemo, useRef } from "react";
import { RangeCalendarStateContext } from "../RangeCalendar.context";
import { useCalendarCell } from "@react-aria/calendar";
import {
  StyledRangeCalendarCell,
  RangeCalendarCellButton,
} from "../RangeCalendar.styles";
import { useRenderProps } from "@hooks";
import { RenderBaseProps } from "../../../../../types";

interface RangeCalendarCellRenderProps {
  focusedDate: CalendarDate;
  isDisabled: boolean;
  isSelected: boolean;
  formattedDate: string;
}

interface RangeCalendarCellProps
  extends RenderBaseProps<RangeCalendarCellRenderProps> {
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

  // Determine the selection state for range styling
  const selectionState = useMemo(() => {
    if (!state.value) return null;

    const { start, end } = state.value;
    const currentDate = props.date;

    if (!start) return null;

    // If only start is selected (no end yet)
    if (!end) {
      if (currentDate.compare(start) === 0) {
        return "range-start";
      }
      return null;
    }

    // Check if this is a single day selection
    if (start.compare(end) === 0 && currentDate.compare(start) === 0) {
      return "range-start range-end";
    }

    // Check if this is the start date
    if (currentDate.compare(start) === 0) {
      return "range-start";
    }

    // Check if this is the end date
    if (currentDate.compare(end) === 0) {
      return "range-end";
    }

    // Check if this is in the middle of the range
    if (currentDate.compare(start) > 0 && currentDate.compare(end) < 0) {
      return "range-middle";
    }

    return null;
  }, [state.value, props.date]);

  // Create custom props that include the selection state
  const customCellProps = {
    ...cellProps,
    "data-selection-state": selectionState,
  };

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
    <StyledRangeCalendarCell {...customCellProps} {...renderProps}>
      <RangeCalendarCellButton
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
      >
        {formattedDate}
      </RangeCalendarCellButton>
    </StyledRangeCalendarCell>
  );
}
