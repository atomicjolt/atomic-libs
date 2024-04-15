import React, { HTMLAttributes, useContext } from "react";
import styled from "styled-components";
import mixins from "../../../styles/mixins";
import { FieldInputContext } from "../contexts";
import { BaseProps, HasChildren } from "../../../types";
import classNames from "classnames";

export const StyledInputWrapper = styled.div`
  ${mixins.InputLike}
  ${mixins.Regular}
  display: flex;
  align-items: center;
  gap: var(--input-gap);
  cursor: text;

  input {
    border: none;
    padding: 0px;

    &:focus {
      outline: none;
    }
  }
`;

export interface VirtualInputProps
  extends Omit<BaseProps, "size">,
    HasChildren,
    Omit<HTMLAttributes<HTMLDivElement>, "className" | "id" | "children"> {
  /** ref to the input element that this virtual input should focus when clicked
   * When `VirtualInput` is used within a `Field` component, this prop is automatically
   * provided
   */
  inputRef?: React.RefObject<HTMLInputElement>;
}

/**
 * VirtualInput is a wrapper component that allows you present a input-like component
 * that can be clicked to focus the actual input element. It is useful for creating
 * custom input components that are not actually input elements & inputs that include
 * other elements like icons or buttons.
 */
export const VirtualInput = React.forwardRef(function VirtualInput(
  props: VirtualInputProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { children, className, ...rest } = props;
  const { inputRef } = useContext(FieldInputContext);

  return (
    <StyledInputWrapper
      className={classNames(className)}
      ref={ref}
      onClick={() => {
        inputRef?.current?.focus();
        props.inputRef?.current?.focus();
      }}
      {...rest}
    >
      {children}
    </StyledInputWrapper>
  );
});
