import styled from "styled-components";
import { BaseStyledButton } from "../common";

export const StyledIconButton = styled(BaseStyledButton)`
  --btn-text-clr: var(--text-clr-alt);
  --btn-bg-clr: var(--neutral50);
  --btn-hover-text-clr: var(--text-clr);
  --btn-hover-bg-clr: var(--neutral100);
  --btn-border: var(--border);

  position: relative;
  width: var(--btn-height);
  padding: var(--btn-padding);

  i {
    margin-left: 0;
  }
`;
