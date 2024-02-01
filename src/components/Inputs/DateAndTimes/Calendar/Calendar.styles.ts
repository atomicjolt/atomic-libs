import styled from "styled-components";
import mixins from "../../../../styles/mixins";
import { CalendarButton } from "../styles";

export const CalendarWrapper = styled.div`
  ${mixins.Regular}
  padding: 10px;
  border-radius: 6px;
  background-color: white;

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

  .aje-time-picker {
    border: none;
    height: var(--calendar-height);
    border-left: var(--input-outline);
    border-radius: 0px;
  }
`;

export const CalendarHeader = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  margin: 15px;
  margin-bottom: 5px;
`;

export const CalendarHeaderTitle = styled.h2`
  ${mixins.Bold}
  font-size: var(--font-size);
  color: var(--neutral600);
`;

export const CalendarHeaderButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CalendarContent = styled.table`
  height: var(--calendar-content-height);
  min-width: var(--calendar-content-height);
`;

export const CalendarFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: auto;

  .aje-btn--calendar-footer {
    border: none;
    background-color: transparent;
    color: var(--primary600);
    padding: 5px;

    &:hover {
      cursor: pointer;
      color: var(--primary800);
    }
  }
`;

export const CalendarWeekDay = styled.th`
  ${mixins.Unselectable}
  ${mixins.Bold}
  font-size: var(--font-size);
  color: var(--neutral600);
`;

export const StyledCalendarCell = styled.td`
  ${CalendarButton}
  height: var(--calendar-cell-size);

  &.is-disabled {
    color: var(--neutral400);

    &:hover {
      cursor: auto;
      background-color: transparent;
    }
  }

  /*

  &.in-interval {
    border-radius: 0px;
    background-color: var(--neutral200);
  }

  &.in-potential-interval {
    border-top: 1px dashed var(--neutral400);
    border-bottom: 1px dashed var(--neutral400);
  }

  &.neighboring-month {
    color: var(--neutral400);
  }

  &.interval-start {
    background-color: var(--primary700);
    border-radius: 5px 0px 0px 5px;
  }

  &.interval-end {
    background-color: var(--primary700);
    border-radius: 0px 5px 5px 0px;
  } */
`;

export const CalendarCellButton = styled.div`
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  &[hidden] {
    visibility: hidden;
    display: auto;
    pointer-events: none;
  }
`;
