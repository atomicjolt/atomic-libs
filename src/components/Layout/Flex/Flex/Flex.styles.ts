import styled from "styled-components";
import { resolveNumber } from "@styles/utils";
import { FlexBoxProperties } from "./Flex.types";

export function handleGap({ gap, rowGap, columnGap }: FlexBoxProperties) {
  if (gap) {
    return `gap: ${resolveNumber(gap)}`;
  }
  if (rowGap && columnGap) {
    return `row-gap: ${resolveNumber(rowGap)}; column-gap: ${resolveNumber(
      columnGap
    )}`;
  }
  if (rowGap) {
    return `row-gap: ${resolveNumber(rowGap)}`;
  }
  if (columnGap) {
    return `column-gap: ${resolveNumber(columnGap)}`;
  }
  return "";
}

export const FlexBox = styled.div<{ $attrs: FlexBoxProperties; as: any }>`
  display: flex;
  flex-direction: ${(props) => props.$attrs.direction || "row"};
  align-items: ${(props) => props.$attrs.alignItems || "stretch"};
  justify-content: ${(props) => props.$attrs.justifyContent || "flex-start"};
  align-content: ${(props) => props.$attrs.alignContent || "stretch"};
  flex-wrap: ${(props) => {
    if (props.$attrs.wrap === true) return "wrap";
    if (props.$attrs.wrap === false) return "nowrap";
    return props.$attrs.wrap;
  }};

  ${({ $attrs }) => handleGap($attrs)}
`;
