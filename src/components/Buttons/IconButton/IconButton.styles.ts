import styled from "styled-components";
import { BaseStyledButton } from "../Buttons.styles";

export const StyledIconButton = styled(BaseStyledButton)`
  position: relative;
  width: var(--btn-height);
  padding: var(--btn-padding);

  &.aje-btn--primary {
    --btn-text-clr: var(--text-clr-alt);
    --btn-bg-clr: var(--neutral50);
    --btn-hover-text-clr: var(--text-clr);
    --btn-hover-bg-clr: var(--neutral100);
    --btn-border: var(--border);
  }

  i {
    margin-left: 0;
  }
`;
