import styled from "styled-components";
import { CalendarButton } from "../styles";

export const StyledMonthPicker = styled.div`
  --time-selected-back-clr: var(--primary600);
  --time-selected-text-clr: var(--neutral100);
`;

export const MonthPickerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 2px;
`;

export const MonthPickerButton = styled.button`
  flex: 1;
  height: 45px;
  ${CalendarButton}
`;
