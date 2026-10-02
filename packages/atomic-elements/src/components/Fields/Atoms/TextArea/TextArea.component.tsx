import React, { forwardRef } from "react";
import { ElementWrapperProps, LoadingProps } from "../../../../types";
import { StyledLoadingTextArea, StyledTextArea } from "./TextArea.styles";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks";
import { TextAreaContext } from "./TextArea.context";
import { useLoading } from "@components/Feedback/Loading";

export interface TextAreaProps
  extends ElementWrapperProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>
    >,
    LoadingProps {}

/** A wrapped `<textarea />` element */
export const TextArea = forwardRef(function TextArea(
  props: TextAreaProps,
  ref: React.Ref<HTMLTextAreaElement>
) {
  [props, ref] = useContextProps(TextAreaContext, props, ref);

  const { isLoading, loadingLabel } = useLoading(props);
  const {
    className,
    size,
    style,
    isLoading: _isLoading,
    loadingLabel: _loadingLabel,
    ...rest
  } = props;

  const renderProps = useRenderProps({
    componentClassName: className,
    size,
    style,
  });

  if (isLoading) {
    return (
      <StyledLoadingTextArea
        className={renderProps.className}
        style={renderProps.style}
        title={loadingLabel}
      >
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="var(--input-border-radius)"
          ry="var(--input-border-radius)"
        />
      </StyledLoadingTextArea>
    );
  }

  return <StyledTextArea ref={ref} {...renderProps} {...rest} />;
});
