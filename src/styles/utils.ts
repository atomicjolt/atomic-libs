import cn, { Argument } from "classnames";
import styled from "styled-components";
import { Sizes } from "../types";
import mixins from "./mixins";

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

export const Hidden = styled.span.attrs({ className: "aje-hidden" })`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const Label = styled.label.attrs(({ className }) => ({
  className: cn("aje-label", className),
}))`
  ${mixins.Bold}
  display: block;
  padding-bottom: 5px;
  font-size: 1.3rem;
  line-height: 1.1;
  color: var(--text-clr);
  ${mixins.Hidden}
`;

export const MessageLabel = styled.p.attrs(({ className }) => ({
  className: cn("aje-label--message", className),
}))`
  ${mixins.Regular}
  font-size: 1.3rem;
  padding-bottom: 5px;
  margin: 2px 0 0;
  color: var(--text-clr-alt);
`;

export const ErrorLabel = styled.p.attrs(({ className }) => ({
  className: cn("aje-label--error", className),
}))`
  ${mixins.Bold}
  font-size: 1.3rem;
  margin: 3px 0 0;
  color: var(--error700);
`;
