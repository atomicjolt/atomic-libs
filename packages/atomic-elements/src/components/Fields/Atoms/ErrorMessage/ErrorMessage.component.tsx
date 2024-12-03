import React from "react";
import styled from "styled-components";
import mixins from "../../../../styles/mixins";
import { ElementWrapperProps } from "../../../../types";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks";
import { ErrorMessageContext } from "./ErrorMessage.context";

/** A styled error message */
export const StyledErrorMessage = styled.p`
  ${mixins.Bold}
  font-size: 1.3rem;
  margin: 3px 0 0;
  color: var(--error-clr);
`;

export interface ErrorMessageProps
  extends ElementWrapperProps<React.HTMLAttributes<HTMLParagraphElement>> {
  as?: React.ElementType;
  isInvalid?: boolean;
}

/** A wrapper around an `<p />`  styled as a field error message */
export const ErrorMessage = React.forwardRef(function ErrorMessage(
  props: ErrorMessageProps,
  ref: React.Ref<HTMLParagraphElement>
) {
  [props, ref] = useContextProps(ErrorMessageContext, props, ref);
  const { className, size = "medium", as = "p", isInvalid, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: className,
    size,
  });

  if (!isInvalid) return;

  return <StyledErrorMessage as={as} ref={ref} {...renderProps} {...rest} />;
});
