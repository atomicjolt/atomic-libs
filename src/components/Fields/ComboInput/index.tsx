import React, { HTMLAttributes, useContext } from "react";
import styled from "styled-components";
import mixins from "../../../styles/mixins";
import { FieldInputContext } from "../contexts";
import { BaseProps, HasChildren } from "../../../types";
import classNames from "classnames";

export const StyledComboInput = styled.div`
  ${mixins.Regular}
  ${mixins.InputLike}
  padding: 0px;
  display: flex;
  align-items: center;
  gap: var(--input-gap);
  cursor: text;

  &.padding-left {
    padding-left: var(--input-padding-horiz);
  }

  &.padding-right {
    padding-right: var(--input-padding-horiz);
  }

  input {
    border: none;
    padding: 0px;
    width: 100%;
    min-height: 100%;
    flex: 1;

    &:focus {
      outline: none;
    }
  }
`;

type PaddingSide = "left" | "right";

export interface ComboInputProps
  extends Omit<BaseProps, "size">,
    HasChildren,
    Omit<HTMLAttributes<HTMLDivElement>, "className" | "id" | "children"> {
  /** ref to the input element that this virtual input should focus when clicked
   * When `ComboInput` is used within a `Field` component, this prop is automatically
   * provided
   */
  inputRef?: React.RefObject<HTMLInputElement>;

  padding?: PaddingSide[] | PaddingSide;
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
  const {
    children,
    className,
    inputRef: passedInputRef,
    padding = ["left", "right"],
    ...rest
  } = props;
  const { inputRef = passedInputRef } = useContext(FieldInputContext);

  return (
    <StyledComboInput
      className={classNames("aje-combo-input", className, {
        "padding-left": padding.includes("left"),
        "padding-right": padding.includes("right"),
      })}
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
