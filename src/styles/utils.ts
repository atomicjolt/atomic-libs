import cn, { Argument } from "classnames";
import styled from "styled-components";
import { Sizes } from "../types";

export interface ComponentWrapperProps {
  className: Argument | Argument[];
  size?: Sizes;
  disabled?: boolean;
  required?: boolean;
  error?: any;
  children: React.ReactNode;
}

export const ComponentWrapper = styled.div.attrs<ComponentWrapperProps>(
  ({ className, size, disabled, required, error }) => ({
    className: cn(className, {
      [`is-${size}`]: size,
      "has-error": error,
      "is-disabled": disabled,
      "is-required": required,
    }),
  })
)<ComponentWrapperProps>``;
