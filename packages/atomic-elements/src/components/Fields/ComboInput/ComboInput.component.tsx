import React from "react";
import { ComboInputProps } from "./ComboInput.types";
import { StyledComboInput } from "./ComboInput.styles";
import { useContextProps } from "@hooks/useContextProps";
import { ComboInputContext } from "./ComboInput.context";
import { useRenderProps } from "@hooks";

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
  [props, ref] = useContextProps(ComboInputContext, props, ref);

  const { className, padding, children, inputRef, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-combo-input",
    ...props,
  });

  return (
    <StyledComboInput
      ref={ref}
      onClick={() => inputRef?.current?.focus()}
      $paddingSide={padding}
      {...rest}
      {...renderProps}
    >
      {renderProps.children}
    </StyledComboInput>
  );
});
