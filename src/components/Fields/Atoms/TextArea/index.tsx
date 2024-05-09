import styled from "styled-components";
import mixins from "../../../../styles/mixins";
import { ElementWrapperProps } from "../../../../types";
import React from "react";
import classNames from "classnames";

export const StyledTextArea = styled.textarea`
  ${mixins.Regular}

  border: var(--input-border);
  border-color: var(--input-border-clr);
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
    outline-color: var(--input-border-clr);
  }
`;

export interface TextAreaProps
  extends ElementWrapperProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
  > {}

/** A wrapper around an `<textara />`  component with styles. Typically,
 * you will want to use [TextAreaInput](?path=/docs/inputs-user-input-textareainput--overview) */
export const TextArea = React.forwardRef(function TextArea(
  props: TextAreaProps,
  ref: React.Ref<HTMLTextAreaElement>
) {
  const { className, size = "auto", ...rest } = props;

  return (
    <StyledTextArea
      className={classNames(className, `is-${size}`)}
      ref={ref}
      {...rest}
    />
  );
});
