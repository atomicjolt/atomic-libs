import styled from "styled-components";
import { SkeletonLoader } from "../../Feedback/SkeletonLoader";

/** Lays out the label and placeholder like the loaded chip group. */
export const ChipGroupLoadingWrapper = styled.div<{ $inline: boolean }>`
  display: flex;
  flex-direction: ${({ $inline }) => ($inline ? "row" : "column")};
  align-items: ${({ $inline }) => ($inline ? "center" : "flex-start")};
  gap: ${({ $inline }) => ($inline ? "8px" : "4px")};
`;

/** A row of chip-shaped placeholders shown while the chips load. */
export const StyledLoadingChips = styled(SkeletonLoader)`
  display: block;
  width: 200px;
  max-width: 100%;
  height: 2.2rem;
`;
