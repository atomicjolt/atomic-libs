import classNames from "classnames";
import {
  ExtendedSize,
  FieldStatusProps,
  HasChildren,
  HasClassName,
} from "../../types";
import { StyledTarget } from "styled-components/dist/types";

export interface FieldWrapperProps
  extends FieldStatusProps,
    HasClassName,
    HasChildren {
  size?: ExtendedSize;
  as?: StyledTarget<"web">;
}

export function FieldWrapper(props: FieldWrapperProps) {
  const {
    className,
    size,
    isDisabled,
    isInvalid,
    isReadOnly,
    isRequired,
    children,
    as: Component = "div",
    ...rest
  } = props;

  return (
    <Component
      className={classNames(className, {
        [`is-${size}`]: size,
      })}
      data-disabled={isDisabled || undefined}
      data-required={isRequired || undefined}
      data-invalid={isInvalid || undefined}
      data-readonly={isReadOnly || undefined}
      {...rest}
    >
      {children}
    </Component>
  );
}
