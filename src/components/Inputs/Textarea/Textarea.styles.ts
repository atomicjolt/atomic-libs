import styled from "styled-components";
import mixins from "../../../styles/mixins";
import { ComponentWrapper } from "../../../styles/utils";

export const TextAreaWrapper = styled(ComponentWrapper)`
  ${mixins.Sizing}
  &.has-error {
    --input-border-color: var(--error-clr);
  }

  &.can-resize-x textarea {
    resize: horizontal;
  }

  &.can-resize-y textarea {
    resize: vertical;
  }

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
    box-shadow: 0 0 0 1px var(--input-border-color);
    outline: var(--input-outline);
    outline-color: var(--input-border-color);
  }
`;
