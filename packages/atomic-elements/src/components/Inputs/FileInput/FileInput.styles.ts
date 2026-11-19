import styled from "styled-components";
import mixins from "../../../styles/mixins";
import { SkeletonLoader } from "@components/Feedback/SkeletonLoader";

export const StyledLoadingFileInput = styled(SkeletonLoader)`
  width: 287px;
  height: 38px;
  display: inline-block;
`;

export const FileInputSpan = styled.span`
  width: 200px;
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

  &[data-disabled] {
    ${StyledFileInputButton} {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;
