import styled from "styled-components";
import mixins from "../../../../styles/mixins";
import { CalendarButton } from "../styles";

export const TimePickerWrapper = styled.div`
  --font-size: 16px;

  height: 230px;
  width: 170px;
  padding: 3px;
  border-radius: 6px;
  border: var(--input-outline);

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const TimePickerSection = styled.div`
  overflow-y: auto;
  ${mixins.HideScrollbar}
`;

export const TimePickerButton = styled.button`
  display: block;
  width: 55px;
  height: 30px;
  ${CalendarButton};
`;
