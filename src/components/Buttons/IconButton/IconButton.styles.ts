import styled from "styled-components";
import { BaseStyledButton } from "../Buttons.styles";

export const StyledIconButton = styled(BaseStyledButton)`
  position: relative;
  height: var(--btn-height);
  padding: var(--btn-padding);

  i {
    margin-left: 0;
  }
`;
