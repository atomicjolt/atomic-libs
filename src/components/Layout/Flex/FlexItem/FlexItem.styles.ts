import styled from "styled-components";
import { FlexBoxItemProperties } from "./FlexItem.types";
import { resolveNumber } from "@/styles/utils";

export const FlexBoxItem = styled.div<{
  $attrs: FlexBoxItemProperties;
  as: any;
}>`
  align-self: ${(props) => props.$attrs.align || "auto"};
  ${(props) => (props.$attrs.order ? `order: ${props.$attrs.order};` : "")}
  flex-grow: ${(props) => props.$attrs.grow || 0};
  flex-shrink: ${(props) => props.$attrs.shrink || 1};
  flex-basis: ${(props) => resolveNumber(props.$attrs.basis) || "auto"};
`;
