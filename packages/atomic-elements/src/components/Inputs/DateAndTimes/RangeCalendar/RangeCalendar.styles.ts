import styled from "styled-components";
import { StyledCalendarCell, CalendarCellButton, CalendarWrapper } from "../Calendar/Calendar.styles";

export const StyledRangeCalendarCell = styled(StyledCalendarCell)`
  /* Range selection styling */
  &[data-selection-state="range-start"] {
    background-color: var(--calendar-selected-bg-clr);
    color: var(--calendar-selected-text-clr);
    border-radius: 3px 0 0 3px;

    &:hover {
      background-color: var(--calendar-selected-bg-clr);
    }
  }

  &[data-selection-state="range-end"] {
    background-color: var(--calendar-selected-bg-clr);
    color: var(--calendar-selected-text-clr);
    border-radius: 0 3px 3px 0;

    &:hover {
      background-color: var(--calendar-selected-bg-clr);
    }
  }

  &[data-selection-state="range-middle"] {
    background-color: var(--calendar-selected-bg-clr-light);
    color: var(--text-clr);
    border-radius: 0;

    &:hover {
      background-color: var(--calendar-selected-bg-clr-hover-light);
      cursor: pointer;
    }
  }

  &[data-selection-state*="range-start"][data-selection-state*="range-end"] {
    /* Single day selection (start and end are the same) */
    border-radius: 3px;
  }

  /* Override default selected styling when we have range states */
  &[data-selection-state="range-start"],
  &[data-selection-state="range-end"],
  &[data-selection-state="range-middle"] {
    &[aria-selected="true"] {
      /* Reset the default selected styling */
      border-radius: inherit;
    }
  }
`;

export const RangeCalendarCellButton = styled(CalendarCellButton)`
  /* Ensure the button fills the entire cell for continuous appearance */
  width: 100%;
  height: 100%;
`;

export const RangeCalendarWrapper = styled(CalendarWrapper)`
  /* Custom CSS variables for range calendar */
  --calendar-selected-bg-clr-light: rgba(var(--primary-rgb, 0, 123, 255), 0.15);
  --calendar-selected-bg-clr-hover-light: rgba(var(--primary-rgb, 0, 123, 255), 0.25);
`;