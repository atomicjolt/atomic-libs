import classNames, { Argument } from "classnames";
import { useMemo } from "react";
import { ExtendedSize } from "..";

interface UseRenderPropsOptions<T extends {}> {
  readonly componentClassName: Argument;
  readonly className?: Argument;
  readonly style?: React.CSSProperties;
  readonly children?: React.ReactNode | ((props: T) => React.ReactNode);
  readonly defaultChildren?: React.ReactNode;
  readonly values?: T;
  readonly size?: ExtendedSize;
}

export function useRenderProps<T extends {}>(
  options: UseRenderPropsOptions<T>
) {
  const {
    componentClassName,
    className,
    style,
    children,
    defaultChildren,
    size,
    values = {},
  } = options;

  return useMemo(() => {
    let actualClassName = classNames(componentClassName, className, {
      [`is-${size}`]: size,
    });

    let actualChildren = children;

    if (typeof children === "function") {
      actualChildren = children(values as T);
    } else if (children === undefined) {
      actualChildren = defaultChildren;
    } else {
      actualChildren = children;
    }

    return {
      className: actualClassName,
      children: actualChildren,
      style,
    };
  }, [
    componentClassName,
    className,
    style,
    children,
    size,
    defaultChildren,
    values,
  ]);
}
