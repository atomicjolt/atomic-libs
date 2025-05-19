import React, { forwardRef } from "react";
import styled from "styled-components";
import mixins from "../../../../styles/mixins";
import { ElementWrapperProps } from "../../../../types";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks";
import { InputContext } from "./Input.context";
import { SlotProps } from "@hooks/useSlottedContext";

const StyledInput = styled.input`
  ${mixins.Regular}
  ${mixins.InputLike}
  ${mixins.SizingX}
`;

export interface InputProps
  extends Omit<
      ElementWrapperProps<React.InputHTMLAttributes<HTMLInputElement>>,
      "slot"
    >,
    SlotProps {}

/** The input element for a field. */
export const Input = forwardRef(function Input(
  props: InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  [props, ref] = useContextProps(InputContext, props, ref);

  const { className, size, style, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: className,
    size,
    style,
  });

  return (
    <StyledInput
      ref={ref}
      {...renderProps}
      {...rest}
      slot={rest.slot || undefined}
    />
  );
});
