import React, { HTMLAttributes, useContext } from "react";
import styled from "styled-components";
import mixins from "../../../styles/mixins";
import { FieldInputContext } from "../contexts";
import { BaseProps, HasChildren } from "../../../types";
import classNames from "classnames";

export const StyledComboInput = styled.div`
  ${mixins.Regular}
  ${mixins.InputLike}
  padding: 0 var(--input-padding-horiz);
  display: flex;
  align-items: center;
  gap: var(--input-gap);
  cursor: text;

  input {
    border: none;
    padding: 0px;
    width: 100%;
    flex: 1;

    &:focus {
      outline: none;
    }
  }
`;

export interface ComboInputProps
  extends Omit<BaseProps, "size">,
    HasChildren,
    Omit<HTMLAttributes<HTMLDivElement>, "className" | "id" | "children"> {
  /** ref to the input element that this virtual input should focus when clicked
   * When `ComboInput` is used within a `Field` component, this prop is automatically
   * provided
   */
  inputRef?: React.RefObject<HTMLInputElement>;
}

/**
 * ComboInput is a wrapper component that allows you present a input-like component
 * that can be clicked to focus the actual input element. It is useful for creating
 * custom input components that are not actually input elements & inputs that include
 * other elements like icons or buttons.
 */
export const ComboInput = React.forwardRef(function ComboInput(
  props: ComboInputProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { children, className, inputRef: passedInputRef, ...rest } = props;
  const { inputRef = passedInputRef } = useContext(FieldInputContext);

  return (
    <StyledComboInput
      className={classNames("aje-combo-input", className)}
      ref={ref}
      onClick={() => {
        inputRef?.current?.focus();
      }}
      {...rest}
    >
      {children}
    </StyledComboInput>
  );
});
