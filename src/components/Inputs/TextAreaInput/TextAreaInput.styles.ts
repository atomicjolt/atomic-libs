import styled from "styled-components";
import mixins from "../../../styles/mixins";
import { TextField } from "../../Internal/Field";

export const TextAreaWrapper = styled(TextField)`
  ${mixins.FieldStatus}

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

  &[data-resize="horizontal"] textarea {
    resize: horizontal;
  }

  &[data-resize="vertical"] textarea {
    resize: vertical;
  }

  &[data-resize="both"] textarea {
    resize: both;
  }
`;
