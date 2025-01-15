import mixins from "@styles/mixins";
import styled from "styled-components";

export const StyledTextArea = styled.textarea`
  ${mixins.Regular}
  ${mixins.Border("input")}

  min-height: 80px;
  min-width: 200px;
  height: var(--textarea-height);
  width: 100%;
  padding: calc(var(--input-font-size) / 2) var(--input-padding-horiz);
  font-size: var(--input-font-size);
  color: var(--input-text-clr);
  background-color: var(--input-bg-clr);
  resize: none;

  &[data-resize="horizontal"] {
    resize: horizontal;
  }

  &[data-resize="vertical"] {
    resize: vertical;
  }

  &[data-resize="both"] {
    resize: both;
  }

  &:focus {
    box-shadow: 0 0 0 1px var(--input-border-clr);
    outline: var(--input-outline);
    --input-border-clr: var(--outline-clr-primary);
  }
`;
