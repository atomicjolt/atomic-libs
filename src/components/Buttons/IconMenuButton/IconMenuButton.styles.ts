import styled from "styled-components";
import { BaseStyledButton } from "../Buttons.styles";
import { StyledIconButton } from "../IconButton/IconButton.styles";

export const StyledIconMenuButton = styled.div`
  display: flex;

  & > ${BaseStyledButton} {
    --btn-text-clr: var(--text-clr-alt);
    --btn-bg-clr: var(--neutral50);
    --btn-hover-text-clr: var(--text-clr);
    --btn-hover-bg-clr: var(--neutral100);
    --btn-border: var(--border);

    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;
  }

  ${StyledIconButton} {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
