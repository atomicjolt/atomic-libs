import styled from "styled-components";
import { MarginProps, margins } from "@styles/layout";
import { ColorProps, colors } from "@styles/colors";

export const StrongWrapper = styled.strong<MarginProps & ColorProps>`
  ${margins}
  ${colors}
`;
