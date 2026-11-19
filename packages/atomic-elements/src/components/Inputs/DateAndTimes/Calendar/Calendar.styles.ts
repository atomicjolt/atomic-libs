import styled from "styled-components";
import mixins from "../../../../styles/mixins";

export const CalendarWrapper = styled.div`
  ${mixins.Regular}
  padding: 10px;
  border-radius: 6px;
  background-color: var(--background-clr);

  &.is-small {
    --calendar-cell-size: 32px;
    --font-size: 1.5rem;
    --calendar-height: 318px;
    --calendar-content-height: 240px;
  }

  &.is-medium {
    --calendar-cell-size: 42px;
    --font-size: 18px;
    --calendar-height: 382px;
    --calendar-content-height: 304px;
  }

  &.is-large {
    --calendar-cell-size: 52px;
    --font-size: 22px;
    --calendar-height: 452px;
    --calendar-content-height: 369px;
  }

  &.is-full {
    --calendar-cell-size: 52px;
    --font-size: 22px;
    --calendar-height: 452px;
    --calendar-content-height: 369px;
  }

  .aje-time-picker {
    border: none;
    height: var(--calendar-height);
    border-left: var(--input-outline);
    border-radius: 0px;
  }
`;

export const CalendarHeaderTitle = styled.h2`
  ${mixins.Bold}
  font-size: var(--font-size);
  color: var(--text-clr-secondary);
`;

export const CalendarContent = styled.table`
  height: var(--calendar-content-height);
  min-width: var(--calendar-content-height);
  margin: auto;
`;

export const CalendarWeekDay = styled.th`
  ${mixins.Bold}
  user-select: none;
  font-size: var(--font-size);
  color: var(--text-clr-secondary);
`;

export const StyledCalendarCell = styled.td`
  font-size: var(--font-size);
  padding: 0px;
  border: 0;
  background-color: transparent;
  color: var(--text-clr);
  height: var(--calendar-cell-size);

  &[aria-selected="true"] {
    background-color: var(--calendar-selected-bg-clr);
    color: var(--calendar-selected-text-clr);
    border-radius: 3px;

    &:hover {
      background-color: var(--calendar-selected-bg-clr);
    }
  }

  &[aria-invalid="true"] {
    background-color: var(--error-clr-fill);
    color: var(--text-clr-on-accent);

    &:hover {
      cursor: pointer;
      border-radius: 3px;
      background-color: var(--error-clr-fill);
    }
  }

  &:hover {
    cursor: pointer;
    border-radius: 3px;
    background-color: var(--background-clr-subtle-hover);
  }

  &[data-disabled] {
    color: var(--text-clr-disabled);

    &:hover {
      cursor: auto;
      background-color: transparent;
    }
  }
`;

export const CalendarCellButton = styled.div`
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;
