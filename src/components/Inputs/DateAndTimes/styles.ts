import styled, { css } from "styled-components";

export const CalendarButton = css`
  font-size: var(--font-size);
  padding: 0px;
  border: 0;
  background-color: transparent;
  color: var(--text-clr);

  &.is-selected {
    background-color: var(--time-selected-back-clr);
    color: var(--time-selected-text-clr);
    border-radius: 3px;

    &:hover {
      background-color: var(--time-selected-back-clr);
    }
  }

  &:hover {
    cursor: pointer;
    border-radius: 3px;
    background-color: var(--neutral200);
  }
`;
