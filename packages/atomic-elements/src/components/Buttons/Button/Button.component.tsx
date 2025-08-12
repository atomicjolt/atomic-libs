import { forwardRef } from "react";
import { useContextProps } from "@hooks/useContextProps";
import { BaseButton, ButtonProps } from "@components/Internal/BaseButton";
import { StyledButton } from "./Button.styles";
import { ButtonContext } from "./Button.context";

/** A button component that can be used to trigger actions or events
 *
 * @example <Button onPress={() => alert("Hello, world!")}>Click me</Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    [props, ref] = useContextProps(ButtonContext, props, ref);

    return <BaseButton ref={ref} Component={StyledButton} {...props} />;
  }
);
