import styled from "styled-components";
import { CalendarButton } from "../styles";

export const YearPickerWrapper = styled.div`
  --time-selected-back-clr: var(--primary600);
  --time-selected-text-clr: var(--neutral100);

  overflow-y: auto;
  height: inherit;
  width: 100%;
  border-bottom: 1px solid var(--neutral300);
  border-top: 1px solid var(--neutral300);
`;

export const YearPickerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2px;
`;

export const YearPickerButton = styled.button`
  height: 45px;
  ${CalendarButton}
`;
