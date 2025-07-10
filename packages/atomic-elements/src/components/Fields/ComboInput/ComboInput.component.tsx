import React from "react";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks/useRenderProps";
import { ComboInputContext } from "./ComboInput.context";
import { ComboInputProps } from "./ComboInput.types";
import { StyledComboInput } from "./ComboInput.styles";

/**
 * ComboInput is a wrapper component designed to provide an input-like interface
 * that focuses the actual input element when clicked. It is ideal for building
 * custom input components that are not standard input elements, or inputs that
 * incorporate additional elements such as icons or buttons.
 */
export const ComboInput = React.forwardRef(function ComboInput(
  props: ComboInputProps,
  ref: React.Ref<HTMLDivElement>
) {
  [props, ref] = useContextProps(ComboInputContext, props, ref);

  const { className, style, padding, children, inputRef, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-combo-input",
    className,
    style,
    children,
    ...rest,
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
