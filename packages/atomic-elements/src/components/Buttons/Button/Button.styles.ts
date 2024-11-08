import styled from "styled-components";
import { BaseStyledButton } from "../Buttons.styles";
import mixins from "@styles/mixins";

export const StyledButton = styled(BaseStyledButton)`
  ${mixins.SizingX}
`;
