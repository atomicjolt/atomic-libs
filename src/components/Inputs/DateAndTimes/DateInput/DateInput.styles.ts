import styled from "styled-components";
import mixins from "../../../../styles/mixins";
import { InputWrapper } from "../../Inputs.styles";

export const DateInputWrapper = styled(InputWrapper)`
  --input-width-sm: 230px;
  --input-width-md: 230px;
  --input-width-lg: 400px;
`;

export const DateSegments = styled.div`
  display: flex;
  align-items: center;

  ${mixins.Regular}
  border: var(--input-border);
  border-radius: var(--input-border-radius);
  min-height: var(--input-height);
  width: 100%;
  padding: 0 var(--input-padding-horiz);
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
`;

export const StyledDateSegment = styled.div`
  margin: 0 0.1rem;
`;
