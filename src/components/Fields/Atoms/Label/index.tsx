import styled from "styled-components";
import mixins from "../../../../styles/mixins";
import React from "react";
import { ElementWrapperProps } from "../../../../types";
import classNames from "classnames";

const StyledLabel = styled.label`
  ${mixins.Bold}
  display: block;
  padding-bottom: 5px;
  font-size: 1.3rem;
  line-height: 1.1;
  color: var(--text-clr);
`;

export interface LabelProps
  extends ElementWrapperProps<React.LabelHTMLAttributes<HTMLLabelElement>> {
  as?: React.ElementType;
}

/** A wrapper around an `<label />`  component with styles. */
export const Label = React.forwardRef(function Label(
  props: LabelProps,
  ref: React.Ref<HTMLLabelElement>
) {
  const { as, className, size = "auto", ...rest } = props;

  return (
    <StyledLabel
      as={as}
      ref={ref}
      className={classNames(className, `is-${size}`)}
      {...rest}
    />
  );
});
