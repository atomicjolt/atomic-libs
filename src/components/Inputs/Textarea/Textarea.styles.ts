import styled from "styled-components";
import mixins from "../../../styles/mixins";
import { ComponentWrapper } from "../../../styles/utils";

export const TextAreaWrapper = styled(ComponentWrapper)`
  ${mixins.InputWrapper}

  --size-sm-x: 200px;
  --size-md-x: 300px;
  --size-lg-x: 600px;

  --size-sm-y: 100px;
  --size-md-y: 200px;
  --size-lg-y: 300px;

  &.is-small {
    width: var(--size-sm-x);
    min-height: var(--size-sm-y);
    --textara-height: calc(var(--size-sm-y) - 21px);
  }

  &.is-medium {
    width: var(--size-md-x);
    min-height: var(--size-md-y);
    --textarea-height: calc(var(--size-md-y) - 21px);
  }

  &.is-large {
    width: var(--size-lg-x);
    min-height: var(--size-lg-y);
    --textarea-height: calc(var(--size-lg-y) - 21px);
  }

  &.is-full {
    width: var(--size-full-x);
    min-height: var(--size-full-y);
    --textarea-height: calc(var(--size-full-y) - 21px);
  }

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
  min-width: 200px;
  height: var(--textarea-height);
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
