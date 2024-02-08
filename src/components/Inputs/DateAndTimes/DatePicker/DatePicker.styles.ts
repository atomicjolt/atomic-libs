import styled from "styled-components";
import { scaleAnimation } from "../../../../styles/animations";
import mixins from "../../../../styles/mixins";
import { ComponentWrapper } from "../../../../styles/utils";

export const DatePickerWrapper = styled(ComponentWrapper)`
  ${mixins.InputWrapper}
  ${mixins.SizingX}

  --size-sm-x: 310px;
  --size-md-x: 310px;
  --size-lg-x: 445px;

  display: flex;
  flex-direction: column;

  &.read-only {
    border-color: var(--neutral100);
    --input-bg-clr: var(--neutral100);
  }
`;

export const DatePickerInputWrapper = styled.div`
  display: flex;
  align-items: end;

  ${mixins.Regular}
  border: var(--input-border);
  border-radius: var(--input-border-radius);
  min-height: var(--input-height);
  font-size: var(--input-font-size);
  color: var(--input-text-clr);
  background-color: var(--input-bg-clr);
  text-align: left;

  &:focus-within {
    --input-border-color: var(--outline-clr-primary);
    outline: var(--input-outline);
  }

  &.read-only {
    border-color: var(--neutral100);
    --input-bg-clr: var(--neutral100);
  }

  .aje-input__date-segments {
    border: 0px solid transparent;
    padding-right: 0px;

    &:focus-within {
      outline: 0px solid transparent;
    }
  }
`;

export const CalendarWrapper = styled.div`
  border: var(--border);
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  ${scaleAnimation}
`;
