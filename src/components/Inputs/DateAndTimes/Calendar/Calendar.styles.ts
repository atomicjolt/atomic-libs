import styled from "styled-components";
import mixins from "../../../../styles/mixins";
import { CalendarButton } from "../styles";

export const StyledCalendar = styled.div`
  display: inline-block;
  padding: 10px;
  ${mixins.Regular}

  --time-selected-back-clr: var(--primary600);
  --time-selected-text-clr: var(--neutral100);
  --calendar-hover-back-clr: var(--neutral200);
`;

export const CalendarWrapper = styled.div`
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  border: var(--input-outline);
  background-color: white;
  max-height: var(--calendar-height);

  &.is-small {
    --cell-size: 32px;
    --font-size: 1.5rem;
    --calendar-height: 318px;
    --calendar-content-height: 240px;
  }

  &.is-medium {
    --cell-size: 42px;
    --font-size: 18px;
    --calendar-height: 382px;
    --calendar-content-height: 304px;
  }

  &.is-large {
    --cell-size: 52px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
`;

export const CalendarHeaderSelectors = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    font-size: var(--font-size);
    color: var(--text-clr-alt);
    font-weight: bold;
    border-bottom: 1px solid var(--primary600);

    &:hover {
      cursor: pointer;
      color: var(--neutral700);
      background-color: var(--calendar-hover-back-clr);
    }
  }

  .aje-calendar__era {
    font-size: calc(var(--font-size) - 5px);
    color: var(--neutral400);
  }
`;

export const CalendarNavigationButton = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  border-radius: 3px;

  &:hover {
    background-color: var(--calendar-hover-back-clr);
    cursor: pointer;
  }

  &.year-btn {
    position: relative;
    text-align: center;
    width: 36px;
    height: 24px;

    &:first-child {
      .material-icons:first-child {
        position: absolute;
        left: 10px;
        top: 0;
      }
      .material-icons:last-child {
        position: absolute;
        right: 10px;
        top: 0;
      }
    }

    &:last-child {
      .material-icons:first-child {
        position: absolute;
        right: 10px;
        top: 0;
      }
      .material-icons:last-child {
        position: absolute;
        left: 10px;
        top: 0;
      }
    }
  }
`;

export const CalendarContent = styled.div`
  height: var(--calendar-content-height);
  min-width: var(--calendar-content-height);
  display: flex;
  justify-content: center;
`;

export const CalendarFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;

  button {
    border: none;
    background-color: transparent;
    color: var(--primary600);

    &:hover {
      cursor: pointer;
      color: var(--primary800);
    }
  }
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, var(--cell-size));
  grid-template-rows: 1fr repeat(6, var(--cell-size));
  grid-row-gap: 5px;
`;

export const CalendarWeekDay = styled.div`
  display: inline-block;
  text-align: center;
  ${mixins.Unselectable}
  ${mixins.Bold}
  font-size: var(--font-size);
  color: var(--neutral600);
  align-self: end;
`;

export const CalendarDay = styled.button`
  display: inline-block;
  height: var(--cell-size);
  ${CalendarButton}

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
  }
`;
