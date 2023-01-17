import styled from "styled-components";
import mixins from "../../../styles/mixins";

export const StyledFileInput = styled.input.attrs({ type: "file" })`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  &:focus + label {
    --border-clr: var(--outline-clr-primary);
    outline: var(--input-outline);
  }
`;

export const FileInputLabel = styled.label`
  --border-clr: var(--neutral600);

  ${mixins.Regular}
  font-size: 1.6rem;
  line-height: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  border: 1px solid var(--border-clr);
  border-radius: 5px;
  overflow: hidden;
  background-color: none;
  padding: 0;
  color: var(--text-clr);

  &:hover {
    strong {
      color: var(--text-clr);
      background-color: var(--neutral200);
    }
  }
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
  background-color: var(--neutral100);
  ${mixins.Bold}
  color: var(--text-clr-alt);
  min-height: 38px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  border-left: 1px solid var(--border-clr);
`;
