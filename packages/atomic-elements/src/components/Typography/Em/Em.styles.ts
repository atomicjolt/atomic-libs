import styled from "styled-components";
import { colors, ColorProps } from "@styles/colors";
import { MarginProps, margins } from "@styles/layout";

export const EmWrapper = styled.em<MarginProps & ColorProps>`
  ${margins}
  ${colors}
`;
