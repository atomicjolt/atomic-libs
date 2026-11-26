import styled from "styled-components";
import mixins from "../../../styles/mixins";
import { SkeletonLoader } from "@components/Feedback/SkeletonLoader";

export const StyledLoadingFileInput = styled(SkeletonLoader)`
  width: 287px;
  max-width: 100%;
  height: 38px;
  display: inline-block;
`;

// 200px by default, but shrinks (truncating the filename) in narrow containers.
export const FileInputSpan = styled.span`
  flex: 0 1 200px;
  min-width: 0;
  min-height: 38px;
  display: inline-block;
  padding: 11px 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const FileInputStrong = styled.strong`
  ${mixins.Bold}
  background-color: var(--background-clr-subtle);
  color: var(--text-clr-secondary);
  min-height: 38px;
  padding: 8px 16px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  border-left: 1px solid var(--file-input-border-clr);
`;

export const StyledFileInputButton = styled.button`
  ${mixins.Regular}
  ${mixins.FocusVisible(2)}
  text-align: left;
  background-color: var(--background-clr);
  padding: 0;
  font-size: 1.6rem;
  line-height: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  display: inline-flex;
  max-width: 100%;
  align-items: center;
  overflow: hidden;
  border: 1px solid var(--file-input-border-clr);
  border-radius: 5px;
  overflow: hidden;
  background-color: none;
  padding: 0;
  color: var(--text-clr);

  &:hover {
    ${FileInputStrong} {
      color: var(--text-clr);
      background-color: var(--background-clr-subtle-hover);
    }
  }
`;

export const FileInputWrapper = styled.div`
  --file-input-border-clr: var(--input-border-clr);
  max-width: 100%;

  &[data-disabled] {
    ${StyledFileInputButton} {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;
