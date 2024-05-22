import React from "react";
import styled from "styled-components";
import mixins from "../../../../styles/mixins";
import { ElementWrapperProps } from "../../../../types";
import classNames from "classnames";

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
}

/** A wrapper around an `<p />`  styled as a field error message */
export const ErrorMessage = React.forwardRef(function ErrorMessage(
  props: ErrorMessageProps,
  ref: React.Ref<HTMLParagraphElement>
) {
  const { as, className, size = "auto", ...rest } = props;

  return (
    <StyledErrorMessage
      as={as}
      ref={ref}
      className={classNames(className, `is-${size}`)}
      {...rest}
    />
  );
});
