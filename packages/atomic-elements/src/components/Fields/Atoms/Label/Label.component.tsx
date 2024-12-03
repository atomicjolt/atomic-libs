import React from "react";
import styled from "styled-components";
import mixins from "../../../../styles/mixins";
import { ElementWrapperProps } from "../../../../types";
import { useContextProps } from "@hooks/useContextProps";
import { LabelContext } from "./Label.context";
import { useRenderProps } from "@hooks";

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
  [props, ref] = useContextProps(LabelContext, props, ref);

  const { className, size, as = "label", ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: className,
    size,
  });

  return <StyledLabel as={as} ref={ref} {...renderProps} {...rest} />;
});
