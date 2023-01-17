import styled from "styled-components";
import mixins from "../../../styles/mixins";
import { ComponentWrapper } from "../../../styles/utils";

export const TextAreaWrapper = styled(ComponentWrapper)`
  &.can-resize textarea {
    resize: both;
  }
`;

export const StyledTextArea = styled.textarea`
  ${mixins.Regular}
  border: var(--input-border);
  border-radius: var(--input-border-radius);
  min-height: 80px;
  width: 100%;
  padding: calc(var(--input-font-size) / 2) var(--input-padding-horiz);
  font-size: var(--input-font-size);
  color: var(--input-text-clr);
  background-color: var(--input-bg-clr);
  resize: none;

  &:read-only {
    border-color: var(--neutral100);
    --input-bg-clr: var(--neutral100);
  }
  &:focus {
    --input-border-color: var(--outline-clr-primary);
    outline: var(--input-outline);
  }
`;
