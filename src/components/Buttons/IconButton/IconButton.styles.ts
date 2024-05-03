import styled from "styled-components";
import { BaseStyledButton } from "../Buttons.styles";

export const StyledIconButton = styled(BaseStyledButton)`
  position: relative;
  height: var(--btn-height);
  padding: var(--btn-padding-vert) var(--btn-padding-horiz);

  i {
    margin-left: 0;
  }
`;
