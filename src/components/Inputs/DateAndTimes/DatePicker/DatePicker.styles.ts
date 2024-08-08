import styled from "styled-components";
import mixins from "../../../../styles/mixins";
import { FieldWrapper } from "../../../Internal/FieldWrapper";
import { ComboInput } from "../../../Fields";
import { StyledComboInput } from "../../../Fields/ComboInput";

export const DatePickerWrapper = styled(FieldWrapper)`
  ${mixins.FieldStatus}
  ${mixins.SizingX}

  --size-sm-x: 310px;
  --size-md-x: 310px;
  --size-lg-x: 445px;

  display: flex;
  flex-direction: column;
`;

export const DatePickerComboInput = styled(ComboInput)`
  ${StyledComboInput} {
    border: none;
    padding: 0px;

    &:focus-within {
      outline: none;
    }
  }
`;

export const CalendarWrapper = styled.div``;
