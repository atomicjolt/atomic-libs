import styled from "styled-components";
import { scaleAnimation } from "../../../../styles/animations";
import mixins from "../../../../styles/mixins";
import { FieldWrapper } from "../../../Internal/FieldWrapper";
import { VirtualInput } from "../../../Internal/Field";
import { StyledInputWrapper } from "../../../Internal/Field/VirtualInput";

export const DatePickerWrapper = styled(FieldWrapper)`
  ${mixins.FieldStatus}
  ${mixins.SizingX}

  --size-sm-x: 310px;
  --size-md-x: 310px;
  --size-lg-x: 445px;

  display: flex;
  flex-direction: column;
`;

export const DatePickerVirtualInput = styled(VirtualInput)`
  ${StyledInputWrapper} {
    border: none;
    padding: 0px;

    &:focus-within {
      outline: none;
    }
  }
`;

export const CalendarWrapper = styled.div`
  border: var(--border);
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  ${scaleAnimation}
`;
