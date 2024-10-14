import styled from "styled-components";
import mixins from "../../../../styles/mixins";
import React from "react";
import classNames from "classnames";
import { ElementWrapperProps } from "../../../../types";

const StyledLabel = styled.label<{ $paddingBottom: string }>`
  ${mixins.Bold}
  display: block;
  font-size: 1.3rem;
  line-height: 1.1;
  color: var(--text-clr);

  ${({ $paddingBottom = "5px" }) =>
    $paddingBottom && `padding-bottom: ${$paddingBottom};`}
`;

export interface LabelProps
  extends ElementWrapperProps<React.LabelHTMLAttributes<HTMLLabelElement>> {
  as?: React.ElementType;
  $paddingBottom?: string;
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
