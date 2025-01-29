import React, { forwardRef } from "react";
import { ElementWrapperProps } from "../../../../types";
import { StyledTextArea } from "./TextArea.styles";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks";
import { TextAreaContext } from "./TextArea.context";

export interface TextAreaProps
  extends ElementWrapperProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
  > {}

/** A wrapped `<textarea />` element */
export const TextArea = forwardRef(function TextArea(
  props: TextAreaProps,
  ref: React.Ref<HTMLTextAreaElement>
) {
  [props, ref] = useContextProps(TextAreaContext, props, ref);

  const { className, size, style, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: className,
    size,
    style,
  });

  return <StyledTextArea ref={ref} {...renderProps} {...rest} />;
});
