import React from "react";
import classNames from "classnames";
import { ComboInputProps } from "./ComboInput.types";
import { StyledComboInput } from "./ComboInput.styles";
import { useContextPropsV2 } from "@hooks/useContextProps";
import { ComboInputContext } from "./ComboInput.context";

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
  [props, ref] = useContextPropsV2(ComboInputContext, props, ref);

  const { className, padding = [], children, inputRef, ...rest } = props;

  return (
    <StyledComboInput
      className={classNames("aje-combo-input", className, {
        "padding-left": padding.includes("left"),
        "padding-right": padding.includes("right"),
      })}
      ref={ref}
      onClick={() => inputRef?.current?.focus()}
      {...rest}
    >
      {children}
    </StyledComboInput>
  );
});
