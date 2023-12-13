import styled, { css } from "styled-components";
import { BaseStyledButton } from "../Buttons.styles";

export const iconButtonColorsCss = css`
  --btn-text-clr: var(--text-clr-alt);
  --btn-bg-clr: var(--neutral50);
  --btn-hover-text-clr: var(--text-clr);
  --btn-hover-bg-clr: var(--neutral100);
  --btn-border: var(--border);
`

export const StyledIconButton = styled(BaseStyledButton)`
  ${iconButtonColorsCss}

  position: relative;
  width: var(--btn-height);
  height: var(--btn-height);
  padding: var(--btn-padding);

  i {
    margin-left: 0;
  }
`;
