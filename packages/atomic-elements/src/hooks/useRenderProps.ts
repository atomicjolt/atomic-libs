import classNames, { Argument } from "classnames";
import React, { useMemo } from "react";
import { ExtendedSize, FieldStatusProps } from "..";

interface UseRenderPropsOptions<T extends {}> {
  readonly componentClassName: Argument;
  readonly className?:
    | Argument
    | Argument[]
    | ((props: T) => Argument | Argument[]);
  readonly style?: React.CSSProperties | ((props: T) => React.CSSProperties);
  readonly children?: React.ReactNode | ((props: T) => React.ReactNode);
  readonly defaultChildren?: React.ReactNode;
  readonly values?: T;
  readonly size?: ExtendedSize;
  readonly variant?: string;
  readonly selectors?: Record<string, boolean | undefined | null>;
}

interface RenderPropsResult {
  readonly className: string;
  readonly children?: React.ReactNode;
  readonly style?: React.CSSProperties;
  readonly [key: string]: any;
}

export function useRenderProps<T extends object>(
  options: UseRenderPropsOptions<T>
): RenderPropsResult {
  const {
    componentClassName,
    className,
    style,
    children,
    defaultChildren,
    size,
    values = {},
    variant,
    selectors,
  } = options;

  return useMemo(() => {
    const actualClassName = classNames(
      componentClassName,
      typeof className === "function" ? className(values as T) : className,
      {
        [`${componentClassName}--${variant}`]: variant,
        [`is-${size}`]: size,
      }
    );

    let actualChildren = children;

    if (typeof children === "function") {
      actualChildren = children(values as T);
    } else if (children === undefined) {
      actualChildren = defaultChildren;
    }

    actualChildren = actualChildren as React.ReactNode;

    const actualSelectors = Object.entries(selectors || {}).reduce(
      (acc, [key, value]) => {
        if (!!value) {
          acc[key] = "true";
        }

        return acc;
      },
      {} as Record<string, string>
    );

    const actualStyle =
      typeof style === "function" ? style(values as T) : style;

    return {
      className: actualClassName,
      children: actualChildren,
      style: actualStyle,
      ...actualSelectors,
    };
  }, [
    componentClassName,
    className,
    style,
    children,
    size,
    defaultChildren,
    values,
    variant,
    selectors,
  ]);
}

export function fieldStatusSelectors(props: Partial<FieldStatusProps>) {
  return {
    "data-disabled": props.isDisabled,
    "data-required": props.isRequired,
    "data-invalid": props.isInvalid,
    "data-readonly": props.isReadOnly,
  };
}
