import styled from "styled-components";
import { BaseStyledButton } from "../Buttons.styles";

export const StyledIconButton = styled(BaseStyledButton)`
  position: relative;
  height: var(--btn-height);
  width: var(--btn-height);
  padding: 0 0;

  i {
    margin-left: 0;
  }
`;
