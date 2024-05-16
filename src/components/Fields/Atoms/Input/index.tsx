import React from "react";
import styled from "styled-components";
import mixins from "../../../../styles/mixins";
import { ElementWrapperProps } from "../../../../types";
import classNames from "classnames";

const StyledInput = styled.input`
  ${mixins.Regular}
  ${mixins.InputLike}
  ${mixins.SizingX}
`;

export interface InputProps
  extends ElementWrapperProps<React.InputHTMLAttributes<HTMLInputElement>> {}

/** A wrapper around an `<input />`  component with styles. Typically,
 * you will want to use [TextInput](?path=/docs/inputs-user-input-textinput--overview)
 * or one of it's variants */
export const Input = React.forwardRef(function Input(
  props: InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  const { className, size, ...rest } = props;

  return (
    <StyledInput
      className={classNames(className, { [`is-${size}`]: size })}
      ref={ref}
      {...rest}
    />
  );
});
