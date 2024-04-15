import React, { useContext } from "react";
import { FieldComponentProps } from "../../../types";
import { useMultipleDomRefs } from "../../../hooks/useMultipleDomRefs";
import { FieldInputContext } from "../contexts";
import mixins from "../../../styles/mixins";
import styled from "styled-components";
import classNames from "classnames";

export const TextArea = styled.textarea`
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

export interface FieldTextAreaProps
  extends Omit<
    FieldComponentProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>>,
    "children"
  > {}

export const FieldTextArea = React.forwardRef(function FieldTextArea(
  props: FieldTextAreaProps,
  providedRef: React.Ref<HTMLTextAreaElement>
) {
  const { className, ...rest } = props;
  const { inputProps, ref: contextRef } = useContext(FieldInputContext);

  // @ts-ignore
  const ref = useMultipleDomRefs(providedRef, contextRef);

  return (
    <TextArea
      className={classNames(className)}
      ref={ref}
      {...inputProps}
      {...rest}
    />
  );
});
